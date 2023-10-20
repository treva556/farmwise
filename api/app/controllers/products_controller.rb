

# product controller


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
    puts "Product Params: #{product_params}"

    @product = @group.products.new(product_params)
    @product.category = Category.find_by(slug: params[:category_slug])
    @product.subcategory = Subcategory.find_by(slug: params[:subcategory_slug])
    @product.group = Group.find_by(slug: params[:group_group_slug])

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
    puts "Group Group Slug: #{params[:group_group_slug]}"
    @group = Group.find_by(slug: params[:group_group_slug])
    if @group.nil?
      puts "Group not found!"
      render_group_not_found
    end
  end

  def product_params
    params.require(:product).permit(:name, :price, :description, :location, :category_id, :subcategory_id, :group_id, images: [])


  end
end


