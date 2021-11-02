import './MyList.css';
import ComentsContext from '../../context/comentsContext';
import { useContext } from 'react';
import ComentCard from '../../components/ComentCard/ComentCard';

export default function MyList() {
  const { coments } = useContext(ComentsContext);

  return (
    <ul className="MyList">
      {coments.map((coment) => (
        <ComentCard key={coment.id} coment={coment} />
      ))}
    </ul>
  );
}
