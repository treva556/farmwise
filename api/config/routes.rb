Rails.application.routes.draw do
  # Users routes
  resources :users, only: [:new, :create, :edit, :update, :show]
  
  # Nested routes for categories, subcategories, and products
  resources :categories do
    resources :subcategories do
      resources :products, only: [:index, :create, :new, :edit, :show, :update, :destroy]
    end
  end

  # Non-nested routes for products
  resources :products, only: [:index, :show, :create, :update, :destroy]

  # Route for listing all categories (non-nested)
  get '/category', to: 'categories#index'

  # Define the root path route ("/")
  # root "controller_name#action_name"
end