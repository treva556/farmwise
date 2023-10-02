

# app/controllers/products_controller.rb
class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy]

  def index
    if params[:subcategory_id].present?
      @products = Product.where(subcategory_id: params[:subcategory_id])
    elsif params[:category_id].present?
      @products = Product.joins(:subcategory).where(subcategories: { category_id: params[:category_id] })
    else
      @products = Product.all
    end

    respond_to do |format|
      format.json { render json: @products }
    end
  end

  def show
    @category = Category.find_by(slug: params[:slug])

    respond_to do |format|
      format.json { render json: @product }
    end
  end

  # Implement other controller actions as needed (create, update, destroy)
  def create
    @product = Product.new(product_params)
    if @product.save
      respond_to do |format|
        format.json { render json: @product, status: :created }
      end
    else
      respond_to do |format|
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    if @product.update(product_params)
      respond_to do |format|
        format.json { render json: @product, status: :ok }
      end
    else
      respond_to do |format|
        format.json { render json: @product.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @product.destroy
    respond_to do |format|
      format.json { head :no_content, status: :ok }
    end
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:name, :price, :description, :image, :location, :user_id, :subcategory_id)
  end
end