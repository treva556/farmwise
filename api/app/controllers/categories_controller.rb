
# app/controllers/categories_controller.rb

class CategoriesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :show, :destroy] # Add other actions if needed


  before_action :set_category, only: [:show, :edit, :update, :destroy]

  def index
    @categories = Category.all

    respond_to do |format|
      format.html # Render HTML view if the request format is HTML
      format.json { render json: @categories } # Render JSON for other formats like JSON
    end
  end

 
  def create
    puts "Received image data: #{params[:category][:image]}"

    category = Category.new(category_params)
    
    if category_params[:image].present?
      uploaded_io = category_params[:image]
      filename = File.basename(uploaded_io.original_filename)
      category.image = "/uploads/category/image/#{category.id}/#{filename}"
      # Save the file to the appropriate directory
      File.open(Rails.root.join('public', 'uploads', 'category', 'image', category.id.to_s, filename), 'wb') do |file|
        file.write(uploaded_io.read)
      end
    else
      category.image = '/images/fallback/default.png'
    end
  
    if category.save
      # Send the complete image URL in the response
      category_data = category.attributes
      category_data['image'] = category.image
      render json: category_data, status: :created
    else
      render json: { errors: category.errors.full_messages }, status: :unprocessable_entity
    end
  end



  def show
    @category = Category.find_by(slug: params[:slug])
    
    respond_to do |format|
      format.json do
        category_data = @category.attributes
        # Check if category.image is an ActionDispatch::Http::UploadedFile object
        if @category.image.is_a?(ActionDispatch::Http::UploadedFile)
          category_data['image'] = @category.image.original_filename
        end
        render json: category_data
      end
    end
  end


  def destroy
    @category.destroy
    render json: { message: 'Category deleted successfully' }, status: :ok
  end
  # Implement other controller actions as needed (create, update, destroy)

  private

  def set_category
    @category = Category.find_by(slug: params[:slug])
    render json: { error: 'Category not found' }, status: :not_found unless @category


  end

  def category_params
    params.require(:category).permit(:name, :slug, :image)
  end
end









# def
#iii
#3ee
