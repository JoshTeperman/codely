class Schema < GraphQL::Schema
  query(Objects::RootQueryObject)
  query(Objects::RootMutationObject)
end
