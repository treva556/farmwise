

Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'http://localhost:3000.com' # Replace with the actual domain of your React app
      resource '/register', headers: :any, methods: [:post]
      # Add other routes as needed
    end
  end