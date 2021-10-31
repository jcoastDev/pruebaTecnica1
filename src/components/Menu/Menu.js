import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/myList">My List</Link>
      </li>
    </ul>
  );
}
