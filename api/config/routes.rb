
# config/routes.rb
Rails.application.routes.draw do
  resources :categories, param: :slug, only: [:index, :show] do
    resources :subcategories, param: :slug, only: [:index, :show, :create, :update, :destroy]

      resources :products, param: :slug, only: [:show, :update, :destroy]
    end
  

  resources :products, only: [:index, :show, :create, :update, :destroy]

  get '/category', to: 'categories#index', format: 'json'

  root 'categories#index' # Set the root path to the categories#index action
end