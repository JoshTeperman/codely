module Objects
  class RootMutationObject < BaseObject
    field :create_challenge, mutations: Mutations::CreateChallengeMutation
  end
end
