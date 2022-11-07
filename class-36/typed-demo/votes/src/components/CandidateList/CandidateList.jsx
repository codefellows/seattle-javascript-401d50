import { connect } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container'

function CandidateList(props) {

  return (
    <Container style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <h2>Candidates:</h2>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {props.candidates.map(candidates => (
          <ListItem>
            <ListItemText>{candidates.name} : <span>{candidates.votes}</span></ListItemText>
          </ListItem>
        ))}
      </List>
      <h4>Total Votes: {props.totalVotes}</h4>
    </Container>
  )
}

// places an object onto props, can read from store "state"
const mapStateToProps = (state) => ({
  candidates: state.candidates,
  totalVotes: state.totalVotes
});

export default connect(mapStateToProps)(CandidateList);
