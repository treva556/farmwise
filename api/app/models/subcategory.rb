


class Subcategory < ApplicationRecord
  belongs_to :category
  has_many :groups, dependent: :destroy

end




