import moment from 'moment';
import React, { ChangeEvent } from 'react';

interface pageProps {
  name: string;
  value: Date;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const DateInput = ({ name, value, handleChange }: pageProps) => {
  return (
    <div>
      <input type='date' name={name} value={moment(value).format('YYYY-MM-DD')} onChange={handleChange} />
    </div>
  );
};

export default DateInput;
