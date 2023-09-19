class User < ApplicationRecord
    enum role: [:user, :seller, :admin]
  
  # ... Other user-related attributes and validations

  has_secure_password

  mount_uploader :image, ImageUploader


  # Define a has_many association for products
  has_many :products

  # ... Other user-related associations and methods
end
