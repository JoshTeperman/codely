Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  devise_for :users

  get '/challenges', to: 'challenges#index'
  get '/challenges/*other', to: 'challenges#index'

  root to: 'challenges#index'
end
