



class UsersController < ApplicationController

  skip_before_action :verify_authenticity_token, only: [:register]
  skip_before_action :verify_authenticity_token, only: [:login]


  before_action :set_user, only: [:show, :update, :destroy]
  before_action :authorize_user, only: [:update, :destroy]




  # def create

  def register
    user = User.new(user_params)
    if user.save
      token = user.generate_jwt
      render json: { user: user, token: token, message: 'Registration successful' }, status: :created
    else
      render json: { error: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def login
    user = User.find_by(email: params[:email])

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
    render json: { users: @users }  # Wrap users inside a key named "users"
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


