

users = User.create([
  { username: 'user1', email: 'user1@example.com', password: 'password' },
  { username: 'user2', email: 'user2@example.com', password: 'password' },
  # Add more users as needed
])

# Create categories
categories = Category.create([
  { name: 'Category 1' },
  { name: 'Category 2' },
  # Add more categories as needed
])

# Create subcategories
subcategories = Subcategory.create([
  { name: 'Subcategory 1', category: categories.first },
  { name: 'Subcategory 2', category: categories.second },
  # Add more subcategories as needed
])

# Create products
products = Product.create([
  { name: 'Product 1', description: 'Description for Product 1', price: 10, image: 'product1.jpg', location: 'Location 1', user: User.first, subcategory: subcategories.first, category: categories.first },
  { name: 'Product 2', description: 'Description for Product 2', price: 15, image: 'product2.jpg', location: 'Location 2', user: User.second, subcategory: subcategories.second, category: categories.second },
  # Add more products as needed
])

puts 'Seed data created successfully!'