import * as yup from 'yup';

export const cardSchema = yup.object().shape({
  cardnumber: yup
    .string()
    .required('Please provide a card number')
    .matches(/^[0-9]{16}$/, 'Card number must be 16 digits'),
  expiryDate: yup.string().required('Please provide an expiry date'),
  cvv: yup
    .string()
    .required('Please provide a CVV')
    .matches(/^[0-9]{3,4}$/, 'CVV must be 3 or 4 digits'),
  cardHolderName: yup.string().required('Please provide a card holder name'),
});
