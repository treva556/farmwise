


Rails.application.routes.draw do
  resources :users, only: [:index, :show, :update, :destroy]
  post '/register', to: 'users#register'
  post '/login', to: 'users#login'

  resources :categories, param: :slug, only: [:index, :show, :create, :update, :destroy] do
    resources :subcategories, param: :slug, only: [:index, :show, :create, :update, :destroy] do
      resources :groups, param: :group_slug, only: [:index, :show, :create, :update, :destroy] do
        resources :products, param: :slug, only: [:index, :show, :create, :update, :destroy]
      end
    end
  end

  root 'categories#index', format: 'json'
end
