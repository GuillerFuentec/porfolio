import { useState } from 'react';
import * as Yup from 'yup';
import { isPossiblePhoneNumber } from 'libphonenumber-js';

export const usePhoneNumberValidation = () => {
  const [validPhoneNumber, setValidPhoneNumber] = useState(true);

  const handlePhoneNumberChange = (value) => {
    setValidPhoneNumber(isPossiblePhoneNumber(value));
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    lastName: Yup.string(),
    email: Yup.string().email('Invalid email address').required('Required'),
    phone: Yup.string()
      .required('Required')
      .test('is-phone-valid', 'Invalid phone number', (value) => {
        return isPossiblePhoneNumber(value, 'US'); // Asegúrate de que el país esté configurado
      }),
    company: Yup.string(),
  });

  return {
    validPhoneNumber,
    handlePhoneNumberChange,
    validationSchema,
  };
};
