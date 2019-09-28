class Team < ApplicationRecord
  validates :name, presence: true
  validates :location, presence: true

  has_many :users
end
