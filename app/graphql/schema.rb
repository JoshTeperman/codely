class Schema < GraphQL::Schema
  query(Objects::RootQueryObject)
end
