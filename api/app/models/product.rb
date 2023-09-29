class Product < ApplicationRecord

  validates :name, presence: true
  validates :price, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  validates :description, presence: true
  validates :image, presence: true
  validates :location, presence: true
  validates_presence_of :user_id, :category, :subcategory


  belongs_to :user

end
