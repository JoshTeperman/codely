class AddRoleToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :role, :string
    add_column :users, :username, :string
    add_column :users, :profile_image_url, :string
  end
end
