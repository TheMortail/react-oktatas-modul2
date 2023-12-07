import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import PontInputComponent from '../../components/PontInputComponent';
import PontButtonComponent from '../../components/PontButtonComponent';
import CardComponent from '../../components/CardComponent';
import {
  FieldArrayFormValues,
  fieldArrayValidationSchema,
} from './FieldArrayComponentValidation.schema';
import TotalComponent from '../../components/TotalComponent';

const FieldArrayContainer = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldArrayFormValues>({
    defaultValues: {
      cart: [{ name: 'test', quantity: 1, price: 23 }],
    },
    resolver: zodResolver(fieldArrayValidationSchema),
    mode: 'onBlur',
  });
  const { fields, append, remove } = useFieldArray({
    name: 'cart',
    control,
  });

  const onSubmit: SubmitHandler<FieldArrayFormValues> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  const handleDelete = (index: number): void => {
    remove(index);
  };

  const handleAppend = (): void => {
    append({
      name: '',
      quantity: 0,
      price: 0,
    });
  };

  return (
    <>
      <h2>Field Array</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => {
          return (
            <CardComponent title={`#${index} id: ${field.id}`} key={field.id}>
              <section className={'section'} key={field.id}>
                <PontInputComponent
                  label={'name'}
                  {...register(`cart.${index}.name` as const)}
                  errorMessage={errors?.cart?.[index]?.name?.message}
                />
                <PontInputComponent
                  label={'quantity'}
                  type="number"
                  {...register(`cart.${index}.quantity` as const, {
                    valueAsNumber: true,
                    required: true,
                  })}
                  errorMessage={errors?.cart?.[index]?.quantity?.message}
                />
                <PontInputComponent
                  label={'value'}
                  type={'number'}
                  {...register(`cart.${index}.price` as const, {
                    valueAsNumber: true,
                    required: true,
                  })}
                  errorMessage={errors?.cart?.[index]?.price?.message}
                />

                <PontButtonComponent
                  type="button"
                  onClick={() => handleDelete(index)}>
                  DELETE
                </PontButtonComponent>
              </section>
            </CardComponent>
          );
        })}

        <TotalComponent control={control} />

        <button type="button" onClick={handleAppend}>
          APPEND
        </button>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FieldArrayContainer;
