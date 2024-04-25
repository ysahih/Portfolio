import React from 'react';
import { makeStyles } from '@mui/material';

interface ParapProps {
  className?: string;
}



const Parap: React.FC<ParapProps> = ({ className }) => {

  return (

    <p className={`${className}`}>
      <div className='paraContainer'>
        Have a project idea, question, or collaboration opportunity? I'm eager to hear from you. Let's connect and make your web development goals a reality!
      </div>
    </p>
  );
};

export default Parap;