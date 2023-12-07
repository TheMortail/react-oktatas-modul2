import { FC } from 'react';

import { CardProps } from './types';
import classes from './CardComponent.module.css';

const CardComponent: FC<CardProps> = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>
        <h3>{props.title}</h3>
      </div>
      <div className={classes.cardContent}>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default CardComponent;
