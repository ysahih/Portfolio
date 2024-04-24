import React from 'react';
import { makeStyles } from '@mui/material';

interface ParapProps {
  className?: string;
}



const Parap: React.FC<ParapProps> = ({ className }) => {


  return (
    <p className={`${className}`}>
      Whether you have a project idea, a question, or an opportunity for collaboration, I'd love to hear from you. Let's connect and bring your web development goals to life!
    </p>
  );
};

export default Parap;