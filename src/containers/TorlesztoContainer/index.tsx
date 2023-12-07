import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { FormContextFormValues } from './types';
import PontInputComponent from "../../components/PontInputComponent";
import ResultComponent from "./ResultComponent";
import GetResultComponent from "./GetResultComponent";

const defaultValues: FormContextFormValues = {
    loanAmount: 800000,
    thm: 14,
    loanTermMonths: 36,
};
const FormContextContainer = () => {
    const methods = useForm<FormContextFormValues>({
      defaultValues,
      mode: 'onChange',
    });

    const onSubmit: SubmitHandler<FormContextFormValues> = (data) => {
        alert(JSON.stringify(data, null, 2));
    };

    return (
        <FormProvider {...methods}>
            <h2>Torleszto</h2>

            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <PontInputComponent {...methods.register('loanAmount', { valueAsNumber: true })} type={'number'} label={'Loan amount'} />
                <PontInputComponent {...methods.register('thm', { valueAsNumber: true })} type={'number'} label={'THM'} disabled={true} />
                <PontInputComponent {...methods.register('loanTermMonths', { valueAsNumber: true })} type={'number'} label={'Loan term months'} />

                <ResultComponent />
                <GetResultComponent />

            </form>
        </FormProvider>
    );
};

export default FormContextContainer;
