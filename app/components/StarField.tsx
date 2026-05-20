'use client';

import { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  layer: number; // 0, 1, or 2 for depth
  opacity: number;
  vx: number; // velocity x for idle drift
  vy: number; // velocity y for idle drift
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
}

interface StarFieldProps {
  starCount?: number;
  layers?: number;
  shootingStarInterval?: [number, number];
}

const STAR_COUNT = 220;
const LAYERS = 3;
const SHOOTING_STAR_INTERVAL: [number, number] = [10000, 22000];
const PARALLAX_FACTORS = [0.05, 0.03, 0.01]; // layer 0, 1, 2
const IDLE_DRIFT_THRESHOLD = 1000; // 1 second
const TARGET_FPS = 60;
const FRAME_TIME = 1000 / TARGET_FPS;

export default function StarField({
  starCount = STAR_COUNT,
  layers = LAYERS,
  shootingStarInterval = SHOOTING_STAR_INTERVAL,
}: StarFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const lastMouseMoveRef = useRef(Date.now());
  const rafIdRef = useRef<number>();
  const shootingStarTimeoutRef = useRef<NodeJS.Timeout>();
  const lastFrameTimeRef = useRef(Date.now());
  const [theme, setTheme] = useState('dark');
  const starRGBRef = useRef('255, 255, 255');

  // Watch for theme changes
  useEffect(() => {
    const update = () => {
      const t = document.documentElement.getAttribute('data-theme') ?? 'dark';
      setTheme(t);
      starRGBRef.current = t === 'light' ? '180, 210, 255' : '255, 255, 255';
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  // Star colors per theme: dark = white, light = cool periwinkle
  const starRGB = theme === 'light' ? '180, 210, 255' : '255, 255, 255';

  // Initialize stars
  const initializeStars = (width: number, height: number) => {
    const stars: Star[] = [];
    const starsPerLayer = Math.floor(starCount / layers);

    for (let layer = 0; layer < layers; layer++) {
      const count = layer === layers - 1 ? starCount - stars.length : starsPerLayer;

      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.5 + layer * 0.3,
          layer,
          opacity: Math.random() * 0.5 + 0.3 + layer * 0.1,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
        });
      }
    }

    starsRef.current = stars;
  };

  // Spawn shooting star
  const spawnShootingStar = (width: number, height: number) => {
    const angle = Math.random() * Math.PI / 4 + Math.PI / 6; // 30-75 degrees
    const startX = Math.random() * width;
    const startY = Math.random() * height * 0.5; // Top half of screen

    shootingStarsRef.current.push({
      x: startX,
      y: startY,
      length: Math.random() * 80 + 40,
      speed: Math.random() * 3 + 2,
      angle,
      opacity: 1,
    });

    // Schedule next shooting star
    const nextInterval =
      Math.random() * (shootingStarInterval[1] - shootingStarInterval[0]) +
      shootingStarInterval[0];
    shootingStarTimeoutRef.current = setTimeout(() => {
      if (canvasRef.current) {
        spawnShootingStar(canvasRef.current.width, canvasRef.current.height);
      }
    }, nextInterval);
  };

  // Animation loop
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const now = Date.now();
    const deltaTime = now - lastFrameTimeRef.current;

    // Throttle to target FPS
    if (deltaTime < FRAME_TIME) {
      rafIdRef.current = requestAnimationFrame(animate);
      return;
    }

    lastFrameTimeRef.current = now - (deltaTime % FRAME_TIME);

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const timeSinceMouseMove = now - lastMouseMoveRef.current;
    const isIdleDrift = timeSinceMouseMove > IDLE_DRIFT_THRESHOLD;

    // Draw and update stars
    starsRef.current.forEach((star) => {
      let x = star.x;
      let y = star.y;

      // Apply parallax effect
      if (!isIdleDrift) {
        const parallaxFactor = PARALLAX_FACTORS[star.layer];
        x += (mouseRef.current.x - canvas.width / 2) * parallaxFactor;
        y += (mouseRef.current.y - canvas.height / 2) * parallaxFactor;
      } else {
        // Apply idle drift
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        x = star.x;
        y = star.y;
      }

      // Draw star
      ctx.beginPath();
      ctx.arc(x, y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${starRGBRef.current}, ${star.opacity})`;
      ctx.fill();
    });

    // Draw and update shooting stars
    shootingStarsRef.current = shootingStarsRef.current.filter((shootingStar) => {
      // Update position
      shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
      shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
      shootingStar.opacity -= 0.01;

      // Remove if off screen or faded
      if (
        shootingStar.opacity <= 0 ||
        shootingStar.x > canvas.width + 100 ||
        shootingStar.y > canvas.height + 100
      ) {
        return false;
      }

      // Draw shooting star trail
      const gradient = ctx.createLinearGradient(
        shootingStar.x,
        shootingStar.y,
        shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length,
        shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length
      );
      gradient.addColorStop(0, `rgba(${starRGBRef.current}, ${shootingStar.opacity})`);
      gradient.addColorStop(1, `rgba(${starRGBRef.current}, 0)`);

      ctx.beginPath();
      ctx.moveTo(shootingStar.x, shootingStar.y);
      ctx.lineTo(
        shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length,
        shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length
      );
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.stroke();

      return true;
    });

    rafIdRef.current = requestAnimationFrame(animate);
  };

  // Handle mouse move
  const handleMouseMove = (e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
    lastMouseMoveRef.current = Date.now();
  };

  // Handle window resize
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Reinitialize stars with new dimensions
    initializeStars(canvas.width, canvas.height);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize stars
    initializeStars(canvas.width, canvas.height);

    // Start animation loop
    rafIdRef.current = requestAnimationFrame(animate);

    // Spawn first shooting star
    const initialDelay =
      Math.random() * (shootingStarInterval[1] - shootingStarInterval[0]) +
      shootingStarInterval[0];
    shootingStarTimeoutRef.current = setTimeout(() => {
      spawnShootingStar(canvas.width, canvas.height);
    }, initialDelay);

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      if (shootingStarTimeoutRef.current) {
        clearTimeout(shootingStarTimeoutRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [starCount, layers, shootingStarInterval]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -50, backgroundColor: 'var(--bg)' }}
    />
  );
}
