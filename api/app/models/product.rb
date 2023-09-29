class Product < ApplicationRecord
  validates :name, presence: true
  validates :price, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  validates :description, presence: true
  validates :image, presence: true
  validates :location, presence: true

  belongs_to :user
  belongs_to :category

  belongs_to :subcategory
end