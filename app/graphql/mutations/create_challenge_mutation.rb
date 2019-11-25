module Objects
  module Mutations
    class CreateChallengeMutation < RootMutationObject
      INVALID_ERROR = 'Could not create Challenge'
      argument :name, String, 'The name of the Challenge', required: true
      argument :description, String, 'A description of the Challenge, including instructions, success criteria, tests, and any other relavent information', required: true
      argument :language, String, 'The programming language the Challenge Solution should be written in', required: true

      # field :challenge, Objects::ChallengeObject, 'The new challenge'

      def resolve(**args)
        challenge = Challenge.new(name: args[:name], description: args[:description], language: args[:language])
        challenge.save

        return INVALID_ERROR if challenge.errors

        { challenge: challenge }
      end
    end
  end
end
