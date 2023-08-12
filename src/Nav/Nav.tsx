import { NavLink } from 'react-router-dom';
import leaf from '../assets/leaf2.png'
import './Nav.css'

const Nav = () => (
  <div>
    <nav className='navbar'>
      <NavLink to="/"><img src={leaf} width="20" alt="leaf" /></NavLink>
      <NavLink to="/about">About Leaf</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/resources">Resources</NavLink>
      <NavLink to="/tech">About this site</NavLink>
    </nav>
  </div>
);

export default Nav
