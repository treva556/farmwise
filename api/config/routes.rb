

Rails.application.routes.draw do
  resources :users, only: [:index, :show, :update, :destroy]

  resources :categories, param: :slug, only: [:index, :show] do
    resources :subcategories, param: :slug, only: [:index, :show] do
      resources :products, param: :slug, only: [:show, :update, :destroy]
    end
  end

  resources :products, only: [:index, :show, :create, :update, :destroy]

  root 'categories#index', format: 'json'
end