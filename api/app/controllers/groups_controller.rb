


class GroupsController < ApplicationController
    before_action :set_group, only: [:show, :update, :destroy]
  
    # GET /groups
    def index
      @groups = Group.all
      render json: @groups
    end
  
    # GET /groups/:id
    def show
      @group = @subcategory.groups.find_by(slug: params[:group_slug])
      render_group_not_found unless @group
      render json: @group # Explicitly respond with JSON
    end

    def render_group_not_found
      render json: { error: 'Group not found' }, status: :not_found
    end
  
    # POST /groups
    def create
      @group = Group.new(group_params)
  
      if @group.save
        render json: @group, status: :created
      else
        render json: @group.errors, status: :unprocessable_entity
      end
    end
  
    # PUT/PATCH /groups/:id
    def update
      if @group.update(group_params)
        render json: @group
      else
        render json: @group.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /groups/:id
    def destroy
      @group.destroy
      head :no_content
    end
  
    private
  
    def set_group
      @subcategory = Subcategory.find_by(slug: params[:subcategory_slug])
      render_subcategory_not_found unless @subcategory
  
      @group = @subcategory.groups.find_by(slug: params[:group_slug])
      render_group_not_found unless @group
    end
  
    def group_params
      params.require(:group).permit(:name, :slug, :subcategory_id)
    end
  end




