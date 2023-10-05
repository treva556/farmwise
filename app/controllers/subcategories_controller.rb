

class SubcategoriesController < ApplicationController
  before_action :set_category
  before_action :set_subcategory, only: [:show, :edit, :update, :destroy]

  def index
    @subcategories = @category.subcategories
    render json: @subcategories
  end

  def show
    render json: @subcategory
  end

  def create
    @subcategory = @category.subcategories.build(subcategory_params)

    if @subcategory.save
      render json: @subcategory, status: :created
    else
      render json: @subcategory.errors, status: :unprocessable_entity
    end
  end

  def update
    if @subcategory.update(subcategory_params)
      render json: @subcategory
    else
      render json: @subcategory.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @subcategory.destroy
    head :no_content
  end

  private

  def subcategory_params
    params.require(:subcategory).permit(:name) # Add other permitted parameters here
  end

  def set_category
    @category = Category.find_by(slug: params[:category_slug])
    render json: { error: 'Category not found' }, status: :not_found unless @category
  end

  def set_subcategory
    @subcategory = @category.subcategories.find_by(slug: params[:slug])
    render json: { error: 'Subcategory not found' }, status: :not_found unless @subcategory
  end
end