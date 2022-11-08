import { useEffect, useState } from 'react';

function useCurrentLeader(candidates) {
  const [leader, setLeader] = useState({ name: 'No Leader', votes: 0 });

  useEffect(() => {
    console.log('Here our the new candidates :', candidates);
    candidates.forEach(candidate => {
      if (candidate.votes > leader.votes) {
        setLeader(candidate);
      }
    });
  }, [candidates, leader.votes]);

  return leader;
}

export default useCurrentLeader;
