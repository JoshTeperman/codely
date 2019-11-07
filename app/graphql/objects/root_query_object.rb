module Objects
  class RootQueryObject < BaseObject
    field :challenges, [ChallengeObject], 'All challenges', null: false

    def challenges
      Challenge.all
    end
  end
end
