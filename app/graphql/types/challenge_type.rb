module Types
  class ChallengeType < Types::BaseObject
    field :id, ID, 'The UUID of the Challenge', null: true
    field :description, String, 'The description of the Challenge', null: true
    field :name, String, 'The name of the Challenge', null: true
    field :language, String, 'The language of the Challenge', null: true
  end
end
