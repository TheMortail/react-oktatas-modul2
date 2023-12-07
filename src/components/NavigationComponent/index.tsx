import { NavLink, Outlet } from 'react-router-dom';
import classes from './NavigationComponent.module.css';

const NavigationComponent = () => {
  return (
    <>
      <nav className={classes.navRoot}>
        <ul className={classes.navLinks}>
          <li>
            <NavLink to="/native">Native</NavLink>
          </li>
          <li>
            <NavLink to="/rhf">RHF</NavLink>
          </li>
          <li>
            <NavLink to="/rhfc">RHFComp</NavLink>
          </li>
          <li>
            <NavLink to="/zod">Zod</NavLink>
          </li>
          <li>
            <NavLink to="/fieldArray">FieldArray</NavLink>
          </li>
          <li>
            <NavLink to="/torleszto">Torleszto</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavigationComponent;
