import React, { ChangeEvent } from 'react';

interface option {
  label: string;
  value: string;
}
interface pageProps {
  name: string;
  value: string;
  options: option[];
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}
const Dropdown = ({ name, value, options, handleChange }: pageProps) => {
  return (
    <div>
      <select name={name} value={value} onChange={handleChange}>
        {options.map((item: option) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
