

class ProductsController < ApplicationController
  before_action :set_category
  before_action :set_product, only: [:show, :edit, :update, :destroy]

  def index
    if params[:subcategory_slug].present?
      subcategory = @category.subcategories.find_by(slug: params[:subcategory_slug])
      @products = subcategory&.products || []
    elsif params[:category_slug].present?
      category = Category.find_by(slug: params[:category_slug])
      @products = category&.products || []
    else
      @products = Product.all
    end
  
    render json: @products
  end

  def show
    @product = @group.products.find_by(slug: params[:slug])
    render_product_not_found unless @product
  end

  # Implement other controller actions as needed (create, update, destroy)

  private

  def set_category
    if params[:subcategory_slug].present?
      @subcategory = Subcategory.find_by(slug: params[:subcategory_slug])
      @category = @subcategory&.category
    elsif params[:category_slug].present?
      @category = Category.find_by(slug: params[:category_slug])
    else
      @category = Category.find_by(slug: 'default') # Replace with your default category
    end
  
    render json: { error: 'Category not found' }, status: :not_found unless @category
  end
  
  def set_product
    Rails.logger.debug("Params: #{params.inspect}")
  
    # Find product by slug within the category
    @product = @category.products.find_by(slug: params[:slug])
  
    unless @product
      render json: { error: 'Product not found' }, status: :not_found
    end
  end

  def product_params
    params.require(:product).permit(:name, :price, :description, :image, :location, :user_id, :subcategory_id)
  end
end