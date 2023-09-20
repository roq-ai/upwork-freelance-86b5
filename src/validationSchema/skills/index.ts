import * as yup from 'yup';

export const skillValidationSchema = yup.object().shape({
  name: yup.string().required(),
  experience: yup.number().integer().required(),
  endorsement_count: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
