import { forwardRef } from 'react';
import { PontRadioType } from './types';

const PontRadioComponent = forwardRef<HTMLInputElement, PontRadioType>(
  (props, ref) => {
    const {
      name,
      id,
      onChange,
      onBlur,
      label = '',
      errorMessage = '',
      disabled = false,
      required = false,
    } = props;
    return (
      <>
        <div className="checkbox-container">
          <input
            ref={ref}
            id={id || name}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            type="radio"
            disabled={disabled}
            className="hidden-checkbox"
          />
          <label htmlFor={id || name} className="custom-checkbox-label"></label>
          <span className="label-text">{`${label} ${
            required ? '*' : ''
          }`}</span>
        </div>
        {errorMessage && <p className={'errorText'}>{errorMessage}</p>}
      </>
    );
  },
);

export default PontRadioComponent;
