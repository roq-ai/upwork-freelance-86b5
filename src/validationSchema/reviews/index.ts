import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  rating: yup.number().integer().required(),
  comment: yup.string().required(),
  reviewer_id: yup.string().nullable().required(),
  reviewee_id: yup.string().nullable().required(),
  job_posting_id: yup.string().nullable().required(),
});
