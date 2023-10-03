


Rails.application.routes.draw do
  resources :categories, param: :slug, only: [:index, :show] do
    resources :subcategories, param: :slug, only: [:index, :show] do
      resources :products, param: :slug, only: [:show, :update, :destroy] 
      resources :users, only: [:index, :show]

        
    end
  end

  resources :products, only: [:index, :show, :create, :update, :destroy]

  root 'categories#index', format: 'json'
end