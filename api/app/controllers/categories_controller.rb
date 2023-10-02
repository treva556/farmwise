# app/controllers/categories_controller.rb
class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :edit, :update, :destroy]

  def index
    @categories = Category.all

    respond_to do |format|
      format.html # Render HTML view if the request format is HTML
      format.json { render json: @categories } # Render JSON for other formats like JSON
    end
  end

  def show
    @category = Category.find_by(slug: params[:slug])

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