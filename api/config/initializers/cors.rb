
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3001' # Replace with the actual domain of your React app
    resource '/register', headers: :any, methods: [:post]
    resource '/login', headers: :any, methods: [:post]
    resource '/users.json', headers: :any, methods: [:get]

    resource '/categories.json', headers: :any, methods: [:get]
    resource '/categories/categorySlug/subcategory.json', headers: :any, methods: [:get]
    resource '/categories/:category_slug/subcategories.json', headers: :any, methods: [:get] # Add this line to allow the specific route
    resource '/categories/:category_slug/subcategories/:subcategory_slug/groups.json', headers: :any, methods: [:get] # Add this line to allow the specific route
    resource '/categories/:categorySlug/subcategories/:subcategorySlug/groups.json', headers: :any, methods: [:get] # Add this line to allow the specific route
    

    # Add other routes as needed
  end
end



