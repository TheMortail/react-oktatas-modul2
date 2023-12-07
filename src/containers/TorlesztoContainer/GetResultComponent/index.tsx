import { memo, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormContextFormValues } from '../types';
import CardComponent from '../../../components/CardComponent';
import PontButtonComponent from '../../../components/PontButtonComponent';

const GetResult = () => {
  const [fakeLoading, setFakeLoading] = useState<boolean>(false);

  const { getValues } = useFormContext<FormContextFormValues>();
  const { loanAmount, thm, loanTermMonths } = getValues();

  const handleFakeLoading = () => {
    setFakeLoading(true);
    setTimeout(() => {
      setFakeLoading(false);
    }, 2000);
  };

  const calculate = useMemo((): number => {
    let monthlyInterestRate = thm / 12 / 100;
    return (
      (loanAmount *
        (monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, loanTermMonths))) /
      (Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1)
    );
  }, [loanAmount, thm, loanTermMonths]);

  return (
    <CardComponent title={'getValues'}>
      {!fakeLoading ? (
        <>
          <p>
            {loanAmount}
            {thm}
            {loanTermMonths} = {calculate}
          </p>
          <PontButtonComponent onClick={handleFakeLoading}>
            Calculate
          </PontButtonComponent>
        </>
      ) : (
        <p>Acquiring world control...</p>
      )}
    </CardComponent>
  );
};
const GetResultComponent = memo(GetResult);
export default GetResultComponent;
