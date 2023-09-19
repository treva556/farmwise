class User < ApplicationRecord
    enum role: [:user, :seller, :admin]
  
  # ... Other user-related attributes and validations

  has_secure_password

  # ... Other user-related associations and methods
end
