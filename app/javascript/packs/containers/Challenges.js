import React, { useEffect, useState } from 'react'
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
      {loading && <h3>...Loading</h3>}
      {challenges && challenges.map(challenge => <Challenge key={challenge.id} challenge={challenge} />)}
    </>
  )
}

export default Challenges;