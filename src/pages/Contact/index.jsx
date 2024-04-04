import { useState } from "react";
import Navbar from "../../components/Navigation/Header/Header";
import { Helmet } from "react-helmet";
import * as Yup from 'yup';

const schema = Yup.object().shape({
  fullName: Yup.string().min(3, 'Too short!').required('Required'),
  subject: Yup.string().min(3, 'Too short!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().trim().min(3).max(200).required('Required')
});

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    message: ""
  });

  const [useSubmit, setUseSubmit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      await schema.validate(formData);
      setUseSubmit(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="contact-container">
      <Navbar />
      <Helmet>
        <title>Contact Us | E-Commerce</title>
      </Helmet>
      <h1 className="contact-h1">Contact Us</h1>
      {useSubmit ? (
        <div className="success-message">Form submitted successfully!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              minLength={3}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              minLength={3}
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
              minLength={3}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;


