class Chatroom < ApplicationRecord
  validates :name, presence: true
  # you should more validations,
  # accordingly with your business logic
  has_many :messages
end
