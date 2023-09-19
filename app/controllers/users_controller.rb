class UsersController < ApplicationController
    attr_reader :user, :record

    def initialize(user, record)
      @user = user
      @record = record
    end
  
    def update?
      user.admin? || user == record
    end
  
    # Define other authorization rules based on your application's needs
end
