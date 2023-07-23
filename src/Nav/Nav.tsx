import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => (
  <div>
    <ul className='navbar'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/about">About Leaf</Link></li>
      <li><Link to="/tech">About this site</Link></li>
    </ul>
  </div>
);

export default Nav
