import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';


const Form: React.FC = () => {
  useEffect(() => {
    emailjs.init('k7Xbdqofx3sBAJf3I');
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      
      emailjs.send("service_s5tsk8o","template_9rbucml",{
        from_name: "asdf",
        to_name: "asdfasd",
        message: "asdfasd",
        reply_to: "asdfasdf",
        });
    //   .then(
    //       () => {
    //           console.log('SUCCESS!');
    //         },
    //         (error) => {
    //             console.log('FAILED...', error);
    //         }
    //   );
  };


  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      {/* To simplify the tutorial, the value is static. */}
      {/* <input type="hidden" name="contact_number" value="697483" /> */}
      
      <label>Name</label>
      <input type="text" name="user_name" />

      <label>Email</label>
      <input type="email" name="user_email" />

      <label>Message</label>
      <textarea name="message" />
      
      <input type="submit" value="Send" />
    </form>
  );
};

export default Form;