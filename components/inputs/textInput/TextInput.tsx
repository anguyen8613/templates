import React, { useState } from 'react';
import styles from './TextInput.module.css';

interface pageProps {
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ name, value, handleChange }: pageProps) => {

  return (
    <div className={styles.container}>
      {/* sets the value of this input to be whatever text was passed down */}
      <label>{name}:</label>
      <input type="text" id={name} name={name} value={value} onChange={handleChange}  />
      {value}
    </div>
  );
};

export default TextInput;
