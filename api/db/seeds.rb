# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# Create sellers
User.create(name: 'Seller 1', email: 'seller1@example.com', location: 'County 1', phone_number: '123456789', password: 'password123')
User.create(name: 'Seller 2', email: 'seller2@example.com', location: 'County 2', phone_number: '987654321', password: 'password456')

# Create products associated with sellers
seller1 = User.find_by(name: 'Seller 1')
seller1.products.create(name: 'Product 1', price: 10, description: 'Description 1', image: 'image1.jpg', location: 'County 1')
seller1.products.create(name: 'Product 2', price: 20, description: 'Description 2', image: 'image2.jpg', location: 'County 1')

seller2 = User.find_by(name: 'Seller 2')
seller2.products.create(name: 'Product 3', price: 15, description: 'Description 3', image: 'image3.jpg', location: 'County 2')
seller2.products.create(name: 'Product 4', price: 25, description: 'Description 4', image: 'image4.jpg', location: 'County 2')