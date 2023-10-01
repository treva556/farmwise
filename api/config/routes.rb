Rails.application.routes.draw do
  resources :users, only: [:new, :create, :edit, :update, :show]
  
  resources :categories do
    resources :subcategories do
      resources :products, only: [:index, :create, :new, :edit, :show, :update, :destroy]
    end
  end

  # Add non-nested routes for products if necessary
  resources :products, only: [:index, :show, :create, :update, :destroy]

  get '/category', to: 'categories#index'


  # Define the root path route ("/")
  # root "controller_name#action_name"
end