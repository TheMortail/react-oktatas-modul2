import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import PontInputComponent from '../../components/PontInputComponent';
import PontButtonComponent from '../../components/PontButtonComponent';
import PontCheckboxComponent from '../../components/PontCheckboxComponent';
import PontSelectComponent from '../../components/PontSelectComponent';
import { GENDER_OPTIONS, PET_OPTIONS } from '../../common/constants';
import {
  schemaFormDefaultValue,
  validationSchema,
  ValidationSchema,
} from './ZodContainer.schema';
const ZodContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    defaultValues: schemaFormDefaultValue,
    resolver: zodResolver(validationSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <h2>Zod</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PontInputComponent
          {...register('company')}
          label={'Company'}
          errorMessage={errors['company']?.message}
          required
        />
        <PontInputComponent
          {...register('firstName')}
          label={'First name'}
          errorMessage={errors['firstName']?.message}
          required
        />
        <PontInputComponent
          {...register('lastName')}
          label={'Last name'}
          errorMessage={errors['lastName']?.message}
          required
        />
        <PontSelectComponent
          {...register('sex')}
          options={GENDER_OPTIONS}
          errorMessage={errors['sex']?.message}
          label={'Sex:'}
          nullable
          required
        />
        <PontInputComponent
          {...register('email')}
          type={'email'}
          label={'email'}
          errorMessage={errors['email']?.message}
          required
        />

        <PontSelectComponent
          {...register('animal')}
          options={PET_OPTIONS}
          errorMessage={errors['animal']?.message}
          label={'Allat:'}
          nullable
          required
        />
        <PontInputComponent
          {...register('favoriteAnimal')}
          label={'favorite animal'}
          errorMessage={errors['favoriteAnimal']?.message}
          required
        />

        <PontInputComponent
          {...register('password')}
          type={'password'}
          label={'password'}
          errorMessage={errors['password']?.message}
          required
        />
        <PontInputComponent
          {...register('passwordAgain')}
          type={'password'}
          label={'password again'}
          errorMessage={errors['passwordAgain']?.message}
          required
        />
        <PontCheckboxComponent
          {...register('accept')}
          label={'Do you agree with the terms?'}
          errorMessage={errors['accept']?.message}
          required
        />
        <PontButtonComponent type={'submit'}>Submit</PontButtonComponent>
      </form>
    </>
  );
};

export default ZodContainer;
