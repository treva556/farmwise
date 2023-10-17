


class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

    def authorize_admin
        unless current_user.admin?
          render json: { error: 'Access Denied' }, status: :forbidden
        end
      end
    
      def authorize_seller
        unless current_user.seller?
          render json: { error: 'Access Denied' }, status: :forbidden
        end
      end
      def options
        head :no_content, content_type: 'text/plain'
      end
end
