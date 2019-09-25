class CreateChallenges < ActiveRecord::Migration[5.2]
  def change
    create_table :challenges do |t|
      t.string :description
      t.string :name
      t.string :language

      t.timestamps
    end
  end
end
