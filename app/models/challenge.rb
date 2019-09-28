class Challenge < ApplicationRecord
  belongs_to :user

  validates :description, presence: true
  validates :name, presence: true
  validates :language, presence: true
end
