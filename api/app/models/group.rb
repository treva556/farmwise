





class Group < ApplicationRecord

  belongs_to :subcategory
    has_many :products, dependent: :destroy

end
