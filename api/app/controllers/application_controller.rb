


class ApplicationController < ActionController::Base
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
end
