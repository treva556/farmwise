


class Category < ApplicationRecord
    has_many :subcategories, dependent: :destroy
    has_many :groups, through: :subcategories
  has_many :products, through: :groups
end