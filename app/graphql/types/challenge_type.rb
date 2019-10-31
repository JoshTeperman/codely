module Types
  class ChallengeType < Types::BaseObject
    field :description, Types::StringType, null: true
    field :name, Types::StringType, null: true
    field :language, Types::StringType, null: true
  end
end
