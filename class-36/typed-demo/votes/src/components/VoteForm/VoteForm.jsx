import { connect } from 'react-redux';
import { vote } from '../../store/votes.js';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function VoteForm(props) {

  const handleForm = (e, name) => {
    e.preventDefault();
    props.vote(name);
  }

  return (
    <form>
      {props.candidates.map(candidate => (
        <Box component="span" sx={{ p: 2 }}>
          <Button variant="outlined" onClick={(e) => handleForm(e, candidate.name)}>{candidate.name}</Button>
        </Box>
      ))}
    </form>
  )
}

const mapStateToProps = state => ({
  candidates: state.candidates,
});

const mapDispatchToProps = {
  vote,
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteForm);
