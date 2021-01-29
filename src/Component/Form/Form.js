import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import s from './Form.module.css';
export default function Form({ addContact }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const resetState = () => {
    setName('');
    setPhone('');
  };

  const handleInputChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    if (name === 'name') {
      setName(value);
      return;
    }
    setPhone(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const result = addContact({
      id: uuidv4(),
      name: name.trim(),
      phone: phone.trim(),
    });
    result && resetState();
  };

  return (
    <form onSubmit={handleSubmit} className={s.Form}>
      <label className={s.Label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          className={s.Input}
        />
      </label>
      <label className={s.Label}>
        Phone number
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleInputChange}
          className={s.Input}
        />
      </label>
      <button type="submit" className={s.buttonSubmit}>
        Add Contact
      </button>
    </form>
  );
}
