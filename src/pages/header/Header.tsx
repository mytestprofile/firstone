import style from './Header.module.css';
import { Nav } from './nav/Nav';


export const Header = () => {

 return (
  <header >
      <div className={style.header}>
          <h1>Kovalenko Blades</h1>
         <Nav/>
      </div>
  </header>
 );
};