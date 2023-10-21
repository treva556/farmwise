


#  below is procuct controller and product model


class Product < ApplicationRecord

  has_many_attached :images

  validates :name, presence: true
  # : true, uniqueness: { scope: :group_id }

  validates :price, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  validates :description, presence: true
  validates :images, presence: true
  validates :location, presence: true


  belongs_to :user
  belongs_to :category
  belongs_to :subcategory

  belongs_to :group
end





