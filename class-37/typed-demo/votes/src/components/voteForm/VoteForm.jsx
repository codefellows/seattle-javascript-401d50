import { useDispatch, useSelector } from 'react-redux';
import { vote } from '../../store/candidates';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


function VoteForm() {

  // using hooks from react-redux, instead
  let dispatch = useDispatch();
  let candidates = useSelector(state => state.candidates);
  console.log(candidates);
  return (
    <Container>
      {candidates.map(candidate => (
        <Button onClick={() => dispatch(vote(candidate.name))}>{candidate.name}</Button>
      ))}
    </Container>
  )
}

export default VoteForm;
