Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  devise_for :users

  get '/*other', to: 'challenges#index', default: { other: 'challenges'}

  root to: 'challenges#index'
end
