import { useMemo } from 'react';
import { useWatch } from 'react-hook-form';
import CardComponent from '../../../components/CardComponent';

const ResultComponent = () => {
  const [loanAmount, thm, loanTermMonths]: [number, number, number] = useWatch({
    name: ['loanAmount', 'thm', 'loanTermMonths'],
  });

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
    <CardComponent title={'RuseWatch'}>
      <p>
        {loanAmount}
        {thm}
        {loanTermMonths} = {calculate}
      </p>
    </CardComponent>
  );
};

export default ResultComponent;
