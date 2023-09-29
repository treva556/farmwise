class CategoriesController < ApplicationController
    before_action :set_category, only: [:show, :edit, :update, :destroy]

    def index
      @categories = Category.all
      respond_to do |format|
        format.json { render json: @categories }
      end
    end
  
    def show
      respond_to do |format|
        format.json { render json: @category }
      end
    end
  
    # Implement other controller actions as needed (create, update, destroy)
    
    private
  
    def set_category
      @category = Category.find(params[:id])
    end
end
