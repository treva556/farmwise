


class Subcategory < ApplicationRecord
  belongs_to :category
  has_many :groups, dependent: :destroy
  has_many :products, through: :groups

end




