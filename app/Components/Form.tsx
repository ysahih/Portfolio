import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import { IoSendSharp } from "react-icons/io5";





//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//       
//   };


//   return (
//     <form id="contact-form" onSubmit={handleSubmit}>
//       {/* To simplify the tutorial, the value is static. */}
//       {/* <input type="hidden" name="contact_number" value="697483" /> */}
      
//       <label>Name</label>
//       <input type="text" name="user_name" />

//       <label>Email</label>
//       <input type="email" name="user_email" />

//       <label>Message</label>
//       <textarea name="message" />
      
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

// export default Form;


  // ------------------------------------------------

import { useState } from 'react';
import { Button } from '@mui/material';
import toast from 'react-hot-toast';

// interface FormProps {
//   onSubmit: (formData: FormData) => void;
// }

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Form = () => {
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    emailjs.init('k7Xbdqofx3sBAJf3I');
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      
   emailjs.send("service_s5tsk8o","template_9rbucml",{
      from_name: formData.name,
      // to_name: formData.name,
      message: formData.message,
      reply_to: formData.email,
     })
      .then(
          () => {
            // toast.success('')
            toast('Email sent successfully!',
              {
                icon: '👏',
                style: {
                  borderRadius: '10px',
                  background: '#008080',
                  color: '#fff',
                },
              }
            );
            },
            (error) => {
              toast.error("This didn't work.")
            }
      );
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      
      <div className='send'>
          <Button variant="contained"
            type='submit'
            className='sendButton'
            endIcon={<IoSendSharp/>}
            style={{ backgroundColor: '#008080', width: '90px' , height:'30px', fontSize: '10px'}}
            >Send
          </Button>
      </div>
    
    </form>
  );
};

export default Form;