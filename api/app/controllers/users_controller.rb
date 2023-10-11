







class UsersController < ApplicationController

  # skip_before_action :verify_authenticity_token, only: [:register]
  skip_before_action :verify_authenticity_token, only: [:login]


  before_action :set_user, only: [:show, :update, :destroy]
  before_action :authorize_user, only: [:update, :destroy]


  def register

    begin

    Rails.logger.debug("Register action triggered")
    Rails.logger.debug("Received parameters: #{params.inspect}")
  
    user = User.create(user_params)
    if user.valid?
      token = user.generate_jwt
      render json: { token: token, message: 'Registration successful' }, status: :created
    else
      Rails.logger.debug("Validation errors: #{user.errors.full_messages.join(', ')}")
      render json: { error: user.errors.full_messages }, status: :unprocessable_entity
    end
     rescue StandardError => e
    render json: { error: e.message }, status: :internal_server_error
     end
  end




  # def create



  def login



    Rails.logger.debug("Login action triggered")

    user = User.find_by(email: params[:email])
    Rails.logger.debug("user found: #{user.inspect}")

    if user && user.authenticate(params[:password])
      token = user.generate_jwt
      render json: { token: token }
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  # GET /users
  def index
    @users = User.all
    render json: @users
  end

  # GET /users/:id
  def show
    render json: @user
  end

  # PATCH/PUT /users/:id
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/:id
  def destroy
    @user.destroy
    head :no_content
  end

  def parse_json
    request.format = :json
  end


  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:location, :email, :phone_number, :name, :password, :password_confirmation)
  end

  def authorize_user
    unless current_user.admin? || current_user == @user
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end
end





