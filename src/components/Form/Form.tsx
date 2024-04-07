/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './form.scss';

interface FormState {
  name: string;
  surname: string;
  email: string;
  phone: string;
}
const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isFormValid = true;
    const newErrors: Partial<FormState> = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === '') {
        newErrors[key as keyof FormState] = `${key} is required`;
        isFormValid = false;
      }

      if ((key === 'name' || key === 'surname') && !/^[a-zA-Z]+$/.test(value)) {
        newErrors[key] = `${key} can consist only of letter`;
        isFormValid = false;
      }

      if (key === 'phone' && !/^[0-9]+$/.test(value)) {
        newErrors[key] = `${key} number can only consist of numbers`;
        isFormValid = false;
      }
    });

    if (!isFormValid) {
      setErrors(newErrors);

      return;
    }

    navigate('/done');
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit} id="form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="name"
            className="form-input"
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-input"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            placeholder="surname"
          />
          {errors.surname && <div className="error">{errors.surname}</div>}
        </div>

        <div className="form-group">
          <input className="form-input" type="email" placeholder="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="form-group">
          <input className="form-input" type="tel" placeholder="phone" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <div className="error">{errors.phone}</div>}
        </div>

        <button type="submit" className="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;
