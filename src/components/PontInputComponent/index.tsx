import { forwardRef, memo } from 'react';

import { PontInputType } from './types';

const PontInputComponent = forwardRef<HTMLInputElement, PontInputType>(
  (props, ref) => {
    const {
      name,
      id,
      onChange,
      onBlur,
      label = '',
      errorMessage = '',
      type = 'text',
      disabled = false,
      required = false,
    } = props;
    return (
      <>
        <div className="form-element input-container">
          <input
            className={errorMessage ? 'error' : ''}
            ref={ref}
            disabled={disabled}
            type={type}
            name={name}
            id={id}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={`${label} ${required ? '*' : ''}`}
          />
          {errorMessage && <p className={'errorText'}>{errorMessage}</p>}
        </div>
      </>
    );
  },
);

const PlainTextFieldComponent = memo(PontInputComponent);
export default PlainTextFieldComponent;
