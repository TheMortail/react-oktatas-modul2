import { FC } from 'react';

import { PontButtonType } from './types';
import classes from './PontButtonComponent.module.css';
const PontButtonComponent: FC<PontButtonType> = (props) => {
  return <button className={classes.PontButton} {...props}></button>;
};

export default PontButtonComponent;
