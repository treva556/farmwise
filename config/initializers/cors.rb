




Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3001' # Replace with the actual domain of your React app
    # origins '*' # Allow all origins (for debugging purposes)
    resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options],
      credentials: true, # Include credentials (cookies, HTTP authentication) in CORS requests
      expose: ['Vary: Origin'] # Expose additional headers if needed


    resource '/register', headers: :any, methods: [:post]
    resource '/login', headers: :any, methods: [:post]
    resource '/users.json', headers: :any, methods: [:get]

    resource '/categories.json', headers: :any, methods: [:get]
    resource '/categories/categorySlug/subcategory.json', headers: :any, methods: [:get]
    resource '/categories/:category_slug/subcategories.json', headers: :any, methods: [:get] # Add this line to allow the specific route
    resource '/categories/:category_slug/subcategories/:subcategory_slug/groups.json', headers: :any, methods: [:get] # Add this line to allow the specific route
    resource '/categories/:categorySlug/subcategories/:subcategorySlug/groups.json', headers: :any, methods: [:get] # Add this line to allow the specific route
    resource '/categories/:category_slug/subcategories/:subcategory_slug/groups/:group_slug/products', headers: :any, methods: [:get, :post, :put, :patch, :delete]
    resource '/categories/:categorySlug/subcategories/:subcategorySlug/groups/:group_slug/products', headers: :any, methods: [:get, :post, :put, :patch, :delete]
    resource '/categories/:categorySlug/subcategories/:subcategorySlug/groups/:groupSlug/products', headers: :any, methods: [:get, :post, :put, :patch, :delete]

    # Add other routes as needed
  end
end
