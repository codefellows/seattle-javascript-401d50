// import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useCurrentLeader from '../../hooks/useCurrentLeader';

function CandidateDisplay() {

  const candidates = useSelector(state => state.candidates);
  const totalVotes = useSelector(state => state.totalVotes);
  // const [leader, setLeader] = useState({name: 'No Leader', votes: 0});

  const leader = useCurrentLeader(candidates);
  // useEffect(() => {
  //   console.log('Here our the new candidates :', candidates);
  //   candidates.forEach(candidate => {
  //     if (candidate.votes > leader.votes) {
  //       setLeader(candidate);
  //     }
  //   });
  // }, [candidates, leader.votes]);

  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Current leader {leader.name}
      </Typography>
      <Typography variant="p">Total Votes: {totalVotes}</Typography>
    </Container>
  )
}

export default CandidateDisplay;
