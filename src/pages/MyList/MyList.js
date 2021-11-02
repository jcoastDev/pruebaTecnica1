import './MyList.css';
import ComentsContext from '../../context/comentsContext';
import { useContext } from 'react';
import ComentCard from '../../components/ComentCard/ComentCard';

export default function MyList() {
  const { coments } = useContext(ComentsContext);

  return (
    <ul>
      {coments.map((coment) => (
        <ComentCard coment={coment} />
      ))}
    </ul>
  );
}
