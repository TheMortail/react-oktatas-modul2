import { SubmitHandler, useForm } from 'react-hook-form';
import { defaultFormValues, FormValues } from './types';
import { GENDER_OPTIONS } from '../../common/constants';

const RHFContainer: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: defaultFormValues,
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormValues> = (formValues) => {
    alert(JSON.stringify(formValues, null, 2));
  };

  return (
    <div
      style={{
        width: 500,
        margin: '0 auto',
      }}>
      <h2>React-Hook-Form</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <input
          type={'text'}
          placeholder={'First Name'}
          {...register('firstName', { required: 'Kotelezo' })}
        />
        {errors['firstName']?.message && <p>{errors['firstName']?.message}</p>}
        <input
          type={'text'}
          placeholder={'Last Name'}
          {...register('lastName', { required: 'Kotelezo' })}
        />
        {errors['lastName']?.message && <p>{errors['lastName']?.message}</p>}
        <input
          type={'number'}
          placeholder={'Age'}
          {...register('age', {
            min: { value: 18, message: 'Csak felnott lehet!' },
          })}
        />
        {errors['age']?.message && <p>{errors['age']?.message}</p>}
        <select {...register('gender', { required: 'Kotelezo' })}>
          <option value={''}></option>
          {GENDER_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors['gender']?.message && <p>{errors['gender']?.message}</p>}
        <label htmlFor={'accept'}>Please accept the terms</label>
        <input
          id={'accept'}
          type={'checkbox'}
          placeholder={'Accept'}
          {...register('accept')}></input>
        {errors['accept']?.message && <p>{errors['accept']?.message}</p>}
        <button type={'submit'}>Register</button>
      </form>
    </div>
  );
};

export default RHFContainer;
