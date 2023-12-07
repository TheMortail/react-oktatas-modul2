import { SubmitHandler, useForm } from 'react-hook-form';

import { ComponentFormValues } from './types';
import PontInputComponent from '../../components/PontInputComponent';
import PontRadioComponent from '../../components/PontRadioComponent';
import PontButtonComponent from '../../components/PontButtonComponent';
import PontCheckboxComponent from '../../components/PontCheckboxComponent';
import PontSelectComponent from '../../components/PontSelectComponent';
import { GENDER_OPTIONS } from '../../common/constants';

const defaultValues: ComponentFormValues = {
  firstName: '',
  lastName: '',
  company: 'Pont',
  sex: 'No',
  email: '',
  password: '',
  passwordAgain: '',
  accept: false,
  acceptRadio: false,
};
const ComponentBasicContainer = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ComponentFormValues>({
    defaultValues,
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<ComponentFormValues> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  const validatePwAgain = (value: string) => {
    return getValues('password') === value || 'Nem egyezik!!!';
  };

  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  return (
    <>
      <h2>React-Hook-Form Componensekbe szedve</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PontInputComponent
          {...register('company', { required: 'Kotelezo!' })}
          label={'Company'}
          errorMessage={errors['company']?.message}
          required
        />
        <PontInputComponent
          {...register('firstName', {
            required: 'Kotelezo!',
            maxLength: { value: 20, message: 'Max 20!' },
          })}
          label={'First name'}
          errorMessage={errors['firstName']?.message}
          required
        />
        <PontInputComponent
          {...register('lastName', { required: 'Kotelezo!' })}
          label={'Last name'}
          errorMessage={errors['lastName']?.message}
          required
        />
        <PontSelectComponent
          {...register('sex', { required: 'Kotelezo!' })}
          options={GENDER_OPTIONS}
          errorMessage={errors['sex']?.message}
          required
        />
        <PontInputComponent
          {...register('email', {
            required: 'Kotelezo!',
            pattern: {
              value: emailPattern,
              message: 'Invalid email address',
            },
          })}
          type={'email'}
          label={'email'}
          errorMessage={errors['email']?.message}
          required
        />
        <PontInputComponent
          {...register('password', { required: 'Kotelezo!' })}
          type={'password'}
          label={'password'}
          errorMessage={errors['password']?.message}
          required
        />
        <PontInputComponent
          {...register('passwordAgain', {
            required: 'Kotelezo!',
            validate: validatePwAgain,
          })}
          type={'password'}
          label={'password again'}
          errorMessage={errors['passwordAgain']?.message}
          required
        />
        <PontCheckboxComponent
          {...register('accept', { required: 'Kotelezo!' })}
          label={'Do you agree with the terms?'}
          errorMessage={errors['accept']?.message}
          required
        />
        <PontRadioComponent
          {...register('acceptRadio', { required: 'Kotelezo!' })}
          label={'Are you sure? (Now with radio button!)'}
          errorMessage={errors['acceptRadio']?.message}
          required
        />
        <PontButtonComponent type={'submit'}>Submit</PontButtonComponent>
      </form>
    </>
  );
};

export default ComponentBasicContainer;
