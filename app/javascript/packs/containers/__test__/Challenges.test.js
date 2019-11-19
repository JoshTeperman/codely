import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, act } from '@testing-library/react';

import Challenges from '../Challenges'
import { GET_CHALLENGES } from '../graphql/queries/getChallenges';

async function wait(ms = 0) {
  await act(() => new Promise(resolve => setTimeout(resolve, ms)));
}

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
  let renderChallenges;

  beforeEach(() => {
    renderChallenges = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Challenges />
      </MockedProvider>
    );
  });

  it("should have 'Challenges' Heading", () => {
    expect(renderChallenges.getByText('Challenges')).toBeInTheDocument();

  });

  describe('When a request is made to the server and a response is returned', () => {
    it('should show the Loader', () => {
      expect(renderChallenges.getByText('...Loading')).toBeInTheDocument();
    })

    it('should show the Challenges data', async () => {
      await wait(0)
      
      expect(renderChallenges.container.textContent).toMatch('Test Challenge')
      expect(renderChallenges.container.textContent).toMatch('Random Challenge')
      expect(renderChallenges.container.textContent).toMatch('Yet Another Admin Challenge')
    })
  })
})
