import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5inl08p', 'template_yao100d', form.current, 'xuQxNm2ba-Eh_lNjI')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
  <section className='py-16 lg:section' id='contact'>

    <div className="container mx-auto">

  <div className='flex flex-col lg:flex-row'>
       {/* text */}

       <motion.div variants={fadeIn('right',0.3)}
           initial='hidden'
           whileInView={"show"}
           viewport={{once: false , amount: 0.3}}
            className='flex-1 flex justify-start items-center'>
        <div>
          <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
            Get in touch
          </h4>
          <h2 className='text-[45px] lg:text-[90px]  uppercase leading-none mb-12'>Let's work <br/> together!</h2>
        </div></motion.div>

       {/* form */}

       <motion.form
       variants={fadeIn('left',0.3)}
       initial='hidden'
       whileInView={"show"}
       viewport={{once: false , amount: 0.3}}
       ref={form}
       onSubmit={sendEmail}
        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-20 p-6 items-start'>
        <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
        focus:border-accent transition-all' name='name' type='text' placeholder='Your name'/>
         <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
        focus:border-accent transition-all' name='email' type='text' placeholder='Your email'/>
        <textarea className='bg-transparent border-b py-9 outline-none w-full placeholder:text-white
        focus:border-accent transition-all resize-none mb-3' name='message' placeholder='Your message' ></textarea>
        <button type='submit' className='btn btn-lg'>Send Message</button>
       </motion.form>
      </div>
    </div>
  
  </section>);
};

export default Contact;
