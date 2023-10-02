

class SubcategoriesController < ApplicationController
  before_action :set_category
  before_action :set_subcategory, only: [:show, :edit, :update, :destroy]

  def index
    @subcategories = @category.subcategories
    render json: @subcategories
  end

  def show
    @category = Category.find_by(slug: params[:slug])

    # Logic to fetch and render a specific subcategory
    render json: @subcategory
  end

  def create
    # Logic to create a new subcategory
  end

  def update
    # Logic to update a subcategory
  end

  def destroy
    # Logic to delete a subcategory
  end

  private

  def set_category
    @category = Category.find(params[:category_id])
  end

  def set_subcategory
    @subcategory = @category.subcategories.find(params[:id])
  end
end