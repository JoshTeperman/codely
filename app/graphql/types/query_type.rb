module Types
  class QueryType < BaseObject
    field :admin, AdminType, 'All the data for admin user', null: false

    def admin
      return user if user.role == 'admin'
    end

    private

    def user
      context.fetch(:user)
    end
  end

end
