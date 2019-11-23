import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_CHALLENGES } from './graphql/queries/getChallenges';

import Challenge from '../components/Challenge';

const Challenges = ({match, history}) => {
  const [challenges, setChallenges] = useState(null)
  const { loading, error, data } = useQuery(GET_CHALLENGES)
  useEffect(() => {
    if (!loading && data) {
      setChallenges(data.challenges)
    }
  }, [loading, data, error])

  console.log({match});
  return (
    <>
      <h1>Challenges</h1>
      {loading && <h3>...Loading</h3>}
      {challenges && challenges.map(challenge => <Challenge key={challenge.id} challenge={challenge} />)}
      <Link to={{pathname:"/", state: {joshState: "Josh's State"}}} >Home</Link>
      <Link to="/about">About</Link>
      <Link to="/challenges">View All Challenges</Link>
      <button onClick={() => history.push('/')}>click me</button>
    </>
  )
}

export default Challenges;
