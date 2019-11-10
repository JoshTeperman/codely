import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { GET_CHALLENGES } from './graphql/queries/getChallenges';

import Challenge from '../components/Challenge';

const Challenges = () => {
  const { loading, error, data } = useQuery(GET_CHALLENGES)

  if (loading) return <h3>...Loading</h3>
  if (error) return <p>`Error: ${error}`</p>

  const { challenges } = data

  return challenges.map(challenge => <Challenge key={challenge.id} challenge={challenge} />)
}

export default Challenges;