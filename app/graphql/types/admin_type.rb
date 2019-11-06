module Types
  class AdminType < BaseObject
    field :id, ID, 'The UUID of the admin user', null: false
    field :challenges, [ChallengeType], 'All challenges', null: false
  end
end
