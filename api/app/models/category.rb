


class Category < ApplicationRecord
  has_many_attached :images # Use has_many_attached for multiple images
  mount_uploader :image, ImageUploader


    has_many :subcategories, dependent: :destroy
    has_many :groups, through: :subcategories
  has_many :products, through: :groups
end