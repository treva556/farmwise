
class SubcategoriesController < ApplicationController
    before_action :set_category
    before_action :set_subcategory, only: [:show, :edit, :update, :destroy]
  
    def index
      @subcategories = @category.subcategories
      # respond with @subcategories as needed
    end
  
    def show
      # respond with @subcategory as needed
    end
  
    # Define other actions: new, create, edit, update, destroy
  
    private
  
    def set_category
      @category = Category.find(params[:category_id])
    end
  
    def set_subcategory
      @subcategory = @category.subcategories.find(params[:id])
    end
  
    # Define strong parameters as needed
  end