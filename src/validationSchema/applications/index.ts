import * as yup from 'yup';

export const applicationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  cover_letter: yup.string().required(),
  resume: yup.string().required(),
  user_id: yup.string().nullable().required(),
  job_posting_id: yup.string().nullable().required(),
});
