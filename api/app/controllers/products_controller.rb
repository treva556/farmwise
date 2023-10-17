

class ProductsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create] # Add other actions if needed

  before_action :set_group, only: [:create]
  before_action :set_category, only: [:index, :show]

  def index
    @products = if params[:subcategory_slug].present?
                  subcategory = @category.subcategories.find_by(slug: params[:subcategory_slug])
                  subcategory&.products || []
                elsif params[:category_slug].present?
                  category = Category.find_by(slug: params[:category_slug])
                  category&.products || []
                else
                  Product.all
                end
  
    render json: @products
  end

  def create
    @product = @group.products.new(product_params)

    if @product.save
      render json: @product, status: :created
    else
      render json: { errors: @product.errors.full_messages, authenticity_token: form_authenticity_token }, status: :unprocessable_entity
    end
  end

  def authenticity_token
    render json: { authenticity_token: form_authenticity_token }
  end

  def show
    @product = @group.products.find_by(slug: params[:slug])
    render_product_not_found unless @product
  end

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
  
  def set_group
    @group = Group.find_by(slug: params[:group_slug])
    render json: { error: 'Group not found' }, status: :not_found unless @group
  end

  def product_params
    params.require(:product).permit(:name, :price, :description, :location, :user_id, :subcategory_id, images: [])
  end
end