

Rails.application.routes.draw do
  resources :users, only: [:index, :show, :update, :destroy]
  post '/register', to: 'users#register'
post '/login', to: 'users#login'

  resources :categories, param: :slug, only: [:index, :show] do
    resources :subcategories, param: :slug, only: [:index, :show] do
      resources :products, param: :slug, only: [:index, :show]
    end
  end

  # :create, :update, :destroy

  root 'categories#index', format: 'json'
end