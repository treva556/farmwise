class UsersController < ApplicationController
    attr_reader :user, :record

    def initialize(user, record)
      @user = user
      @record = record
    end
  
    def update?
      user.admin? || user == record
    end

    def user_params
        params.require(:user).permit(:location, :email, :phone_number, :name, :image, :password, :password_confirmation)
      end
  
    # Define other authorization rules based on your application's needs
end
