import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, wait } from '@testing-library/react';

import Challenges from '../Challenges'
import { GET_CHALLENGES } from '../graphql/queries/getChallenges';

const mocks = [
  {
    request: {
      query: GET_CHALLENGES,
    },
    result: {
      data: {
        challenges: [
          {
            id: "1",
            name: "Test Challenge",
            description: "Admin Challenge",
            language: "Ruby"
          },
          {
            id: "2",
            name: "Random Challenge",
            description: "Another Admin Challenge",
            language: "Ruby"
          },
          {
            id: "3",
            name: "Another Random Challenge",
            description: "Yet Another Admin Challenge",
            language: "Javascript"
          }
        ]
      }  
    }
  },
]

describe('Challenges', () => {
  let renderedChallenges;

  beforeEach(() => {
    renderedChallenges = render(
      <MockedProvider mocks={mocks}>
        <Challenges />
      </MockedProvider>
    )
  })
  describe('When the query returns a response', () => {
    describe('When the status is loading', () => {
      it('Should show a Loading message', () => {
        expect(renderedChallenges.getByText('Loading...')).tobeInTheDocument();
      })
    })
    describe('Once the data loads', () => {
      // TODO: Assert DOM tree includes Challenge component rather than Challenge name
      it('It should render Challenges', async () => {
        await wait(() => {
          expect(renderedChallenges.getByText('Test Challenge')).tobeInTheDocument();
        })
      })
    })
  })
})
