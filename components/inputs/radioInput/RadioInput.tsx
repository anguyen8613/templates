import { ChangeEvent } from 'react';

interface option {
  label: string;
  value: string;
}

interface pageProps {
  name: string;
  value: string;
  options: option[];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RadioInput = ({ name, value, options, handleChange }: pageProps) => {
  return (
    <div>
      {options.map((input) => {
        return (
          <div key={input.value}>
            <label htmlFor={input.value}>{input.label}</label>
            {/* name is what groups the radio inputs together */}
            <input
              type='radio'
              id={input.value}
              name={name}
              value={input.value}
              checked={input.value === value}
              onChange={handleChange}
            ></input>
          </div>
        );
      })}
    </div>
  );
};

export default RadioInput;
