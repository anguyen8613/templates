import { ChangeEvent, FormEvent, useState } from 'react';
import DateInput from '../../components/inputs/dateInput/DateInput';
import Dropdown from '../../components/inputs/dropdown/Dropdown';
import RadioInput from '../../components/inputs/radioInput/RadioInput';
import TextInput from '../../components/inputs/textInput/TextInput';
import styles from './Inputs.module.css';

const genders = [
  {
    label: 'male',
    value: 'male',
  },
  { label: 'female', value: 'female' },
];

const sports = [
  {
    label: 'basketball',
    value: 'basketball',
  },
  { label: 'soccer', value: 'soccer' },
];

export interface FormData {
  firstName: string;
  location: string;
  gender: string;
  sports: string;
  startDate: Date;
}

const Inputs = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    location: '',
    gender: 'male',
    sports: 'basketball',
    startDate: new Date('10/12/2022'),
  }); 

  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    switch (name) {
      case 'firstName':
        setFormData({ ...formData, firstName: value });
        break;
      case 'location':
        setFormData({ ...formData, location: value });
        break;
      default:
        console.log('error');
    }
  };

  const handleDropDownChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = e.target;
    switch (name) {
      case 'sports':
        setFormData({ ...formData, sports: value });
        break;
      default:
        console.log('error');
    }
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    switch (name) {
      case 'gender':
        setFormData({ ...formData, gender: value });
        break;
      default:
        console.log('error');
    }
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // yyyy/mm/dd - is not considering timezone while calculating local time.But
    // yyyy-mm-dd - is considering time while calculating local time in java script date function.
    const formatValue = value.replaceAll('-',"/" )
    switch (name) {
      case 'startDate':
        setFormData({
          ...formData,
          startDate: new Date(formatValue),
        });
        break;
      default:
        console.log('error');
    }
  };

  return (
    <div className={styles.container}>
      <div>About</div>
      <TextInput
        name='firstName'
        value={formData.firstName}
        handleChange={handleTextInput}
      />
      <TextInput
        name='location'
        value={formData.location}
        handleChange={handleTextInput}
      />
      <Dropdown
        name='sports'
        value={formData.sports}
        options={sports}
        handleChange={handleDropDownChange}
      />

      <RadioInput
        name='gender'
        value={formData.gender}
        options={genders}
        handleChange={handleRadioChange}
      />

      <DateInput
        name={'startDate'}
        value={formData.startDate}
        handleChange={handleDateChange}
      />

      <div>{formData.firstName}</div>
      <div>{formData.location}</div>
    </div>
  );
};

export default Inputs;
