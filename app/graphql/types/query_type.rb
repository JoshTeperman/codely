module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :challenges, [Types::ChallengeType], null: false,
      description: "All of the Challenges in the database"

    def challenges
      Challenge.all
    end
  end
end
