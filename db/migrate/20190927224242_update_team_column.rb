class UpdateTeamColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :role, :string, default: 'normal_user'
  end
end
