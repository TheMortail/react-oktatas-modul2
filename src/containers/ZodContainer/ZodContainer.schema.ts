import { z } from 'zod';

export const validationSchema = z
  .object({
    firstName: z.string().min(1, { message: 'Firstname is required' }),
    lastName: z.string().min(1, { message: 'Lastname is required' }),
    company: z.string().min(1, { message: 'Company is required' }),
    email: z.string().min(1, { message: 'Email is required' }).email({
      message: 'Must be a valid email',
    }),
    sex: z.string().min(1, { message: 'Sex is required' }),
    password: z
      .string()
      .min(6, { message: 'Password must be atleast 6 characters' }),
    passwordAgain: z
      .string()
      .min(1, { message: 'Confirm Password is required' }),
    accept: z.literal<boolean>(true, {
      errorMap: () => ({
        message: 'You must agree with the Terms and Conditions',
      }),
    }),
    animal: z.string().min(1, { message: 'Choosing an animal is required' }),
    favoriteAnimal: z
      .string()
      .min(1, { message: 'Favorite animal is required' }),
  })
  .refine((data) => data.password === data.passwordAgain, {
    path: ['passwordAgain'],
    message: "Password don't match",
  })
  .refine(
    (data) =>
      data.animal === 'kiskutya' ? data.animal === data.favoriteAnimal : true,
    {
      path: ['favoriteAnimal'],
      message: 'Must match kiskutya!',
    },
  );

export type ValidationSchema = z.infer<typeof validationSchema>;
export const schemaFormDefaultValue = {
  firstName: '',
  lastName: '',
  company: 'Pont',
  sex: '',
  email: '',
  password: '',
  passwordAgain: '',
  accept: false,
  animal: '',
  favoriteAnimal: '',
};
