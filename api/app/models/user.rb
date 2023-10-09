

class User < ApplicationRecord
    enum role: [:user, :seller, :admin]
  
  # ... Other user-related attributes and validations

  has_secure_password

  mount_uploader :image, ImageUploader

  def generate_jwt
    payload = { user_id: id }
    JWT.encode(payload, Rails.application.secrets.secret_key_base, 'HS256')
  end
  

  # Define a has_many association for products
  has_many :products

  # ... Other user-related associations and methods

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true # Add a minimum length requirement here

end

