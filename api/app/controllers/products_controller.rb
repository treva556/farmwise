class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy]
  before_action :set_category, only: [:index]
  before_action :set_subcategory, only: [:index]

  def index
    if @subcategory
      @products = Product.where(subcategory: @subcategory)
    elsif @category
      @products = Product.where(category: @category)
    else
      @products = Product.all
    end

    respond_to do |format|
      format.json { render json: @products }
    end
  end

  def show
    respond_to do |format|
      format.json { render json: @product }
    end
  end

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

  def set_category
    @category = Category.find_by(id: params[:category_id])
  end

  def set_subcategory
    @subcategory = Subcategory.find_by(id: params[:subcategory_id])
  end

  def product_params
    params.require(:product).permit(:name, :price, :description, :image, :location, :category_id, :subcategory_id)
  end
end