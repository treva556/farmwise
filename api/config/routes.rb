# config/routes.rb
Rails.application.routes.draw do
  resources :categories, param: :slug, only: [] do
    resources :subcategories, param: :slug, only: [] do
      resources :products, param: :slug, only: [:show, :update, :destroy]
    end
  end

  resources :products, only: [:index, :show, :create, :update, :destroy]

  get '/category', to: 'categories#index'

  root 'controller_name#action_name' # Define your root path route
end
