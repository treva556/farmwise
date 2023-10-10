# Create users
users = User.create([
  { username: 'user1', email: 'user1@example.com', password: 'password' },
  { username: 'user2', email: 'user2@example.com', password: 'password' },
  # Add more users as needed
])

# Create Categories
Category.create(name: 'Animal Produce', slug: 'animalproduce')

# Create Subcategories
animal_produce = Category.find_by(slug: 'animalproduce')
Subcategory.create(name: 'Meat', category: animal_produce, slug: 'meat')
Subcategory.create(name: 'Manure', category: animal_produce, slug: 'manure')

# Create Groups
meat = Subcategory.find_by(slug: 'meat')
Group.create(name: 'Chicken Meat', subcategory: meat, slug: 'chicken-meat')

# Ensure at least one user exists before creating the product
user = User.first

# Create Products
chicken_meat_group = Group.find_by(slug: 'chicken-meat')
Product.create(
  name: 'Fresh Chicken Breast',
  price: 10,
  description: 'Premium quality chicken breast',
  image: 'chicken-breast.jpg',
  location: 'Farm A',
  user: user, # Set the product's user association
  category: animal_produce,
  group: chicken_meat_group,
  slug: '1'
)

puts 'Seed data created successfully!'