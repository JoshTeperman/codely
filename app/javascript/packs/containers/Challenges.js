import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_CHALLENGES } from './graphql/queries/getChallenges';

import Challenge from '../components/Challenge';

const Challenges = () => {
  const [challenges, setChallenges] = useState(null)
  const { loading, error, data } = useQuery(GET_CHALLENGES)
  
  useEffect(() => {
    if (!loading && data) {
      setChallenges(data.challenges)
    }
  }, [loading, data, error])
  
  return (
    <>
      <h1>Challenges</h1>
      {loading && <h3>...Loading</h3>}
      {challenges && challenges.map(challenge => <Challenge key={challenge.id} challenge={challenge} />)}
      <Link to="/challenges/new">New Challenge</Link>
    </>
  )
}

export default Challenges;