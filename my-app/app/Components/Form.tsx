import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';




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

interface FormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Form: React.FC<FormProps> = () => {
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
     to_name: formData.name,
     message: formData.message,
     reply_to: formData.email,
     })
      .then(
          () => {
              console.log('SUCCESS!'); //thoasts
            },
            (error) => {
                console.log('FAILED...', error);
            }
      );
    // onSubmit(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
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
        <label htmlFor="email">Email:</label>
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
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default Form;