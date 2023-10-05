

# Create users
users = User.create([
  { username: 'user1', email: 'user1@example.com', password: 'password' },
  { username: 'user2', email: 'user2@example.com', password: 'password' },
  # Add more users as needed
])

# Create categories with slugs
categories = Category.create([
  { name: 'Animal Produce', slug: 'animalproduce' },
  { name: 'Plant Produce & Inputs', slug: 'plantproduce' },
  # Add more categories as needed
])

# Create subcategories with slugs and their respective categories
subcategories = Subcategory.create([
  { name: 'Meat', slug: 'meat', category: categories.first },
  { name: 'Manure', slug: 'manure', category: categories.first },
  { name: 'Fertilizers', slug: 'fertilizers', category: categories.second },
  # Add more subcategories as needed
])

# Create products with slugs, descriptions, and their respective subcategories and categories
products = Product.create([
  { name: 'Chicken Meat', slug: 'chicken-meat', description: 'Description for Chicken Meat', price: 10, image: 'product1.jpg', location: 'Location 1', user: users.first, subcategory: subcategories.first, category: categories.first },
  { name: 'Chicken Manure', slug: 'chicken-manure', description: 'Description for Chicken Manure', price: 15, image: 'product2.jpg', location: 'Location 2', user: users.second, subcategory: subcategories.second, category: categories.first },
  { name: 'NPK Fertilizer', slug: 'npk-fertilizer', description: 'Description for NPK Fertilizer', price: 20, image: 'product3.jpg', location: 'Location 3', user: users.first, subcategory: subcategories.third, category: categories.second },
  # Add more products as needed
])

puts 'Seed data created successfully!'


