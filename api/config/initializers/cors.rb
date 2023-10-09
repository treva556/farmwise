




Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'http://localhost:3001' # Replace with the actual domain of your React app
      resource '/register', headers: :any, methods: [:post]
      resource '/login', headers: :any, methods: [:post]

      # Add other routes as needed
    end
  end


  