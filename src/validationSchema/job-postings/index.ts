import * as yup from 'yup';

export const jobPostingValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  location: yup.string().required(),
  salary: yup.number().integer().required(),
  company_id: yup.string().nullable().required(),
});
