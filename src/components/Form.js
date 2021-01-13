import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { init, sendForm } from 'emailjs-com';
init('user_8do5i87Ii765gdJI1jRcq');

export default function EmailJSForm() {
  const { register, handleSubmit, errors } = useForm();
  const errorMsg = 'This field is required';
  const [contactNumber, setContactNumber] = useState("000000");

  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }

  const onSubmit = (data) => {
    console.log(data);
    generateContactNumber();
    sendForm('default_service', 'template_tq0t33c', '#contact-form')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
      <h2 className="text-3xl text-center font-bold mb-6 leading-7 form-title">Get in touch</h2>
      <div className="form-column grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="form-field">
          <input type="text" name="fullName" ref={register({ required: true })} placeholder="Name" tabIndex="-1" />
          {errors.fullName && <span className="error-field">{errorMsg}</span>}
        </div>
        <div className="form-field">
          <input type="email" name="email" ref={register({ required: true })} placeholder="Email address" tabIndex="-1" />
          {errors.email && <span className="error-field">{errorMsg}</span>}
        </div>
        <div className="form-field">
          <input type="text" name="phone" ref={register({ required: true })} placeholder="Phone" tabIndex="-1" />
          {errors.phone && <span className="error-field">{errorMsg}</span>}
        </div>
      </div>
      <div className="form-column grid grid-cols-1 gap-4">
        <div className="form-field">
          <textarea name="message" ref={register({ required: true })} placeholder="Message" tabIndex="-1" rows={5} />
          {errors.message && <span className="error-field">{errorMsg}</span>}
        </div>
      </div>

      <div className="form-field flex items-center justify-center content-center">
        <input type='hidden' name='contact_number' value={contactNumber} />

        <div className="form-submit">
          <button type="submit" className="btn-submit mt-4 w-34 font-bold italic rounded-lg">Say hello!</button>
        </div>
      </div>
    </form>
  )
}
