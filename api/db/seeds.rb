# # Create users
# users = User.create([
#   { username: 'user1', email: 'user1@example.com', password: 'password' },
#   { username: 'user2', email: 'user2@example.com', password: 'password' },
#   # Add more users as needed
# ])

# Create Categories
Category.create(name: 'Animal Produce', slug: 'animalproduce')

# Create Subcategories
animal_produce = Category.find_by(slug: 'animalproduce')
Subcategory.create(name: 'Meat', category: animal_produce, slug: 'meat')
Subcategory.create(name: 'Manure', category: animal_produce, slug: 'manure')

# Create Groups
meat = Subcategory.find_by(slug: 'meat')
Group.create(name: 'Chicken Meat', subcategory: meat, slug: 'chicken-meat')

# # # Ensure at least one user exists before creating the product
# # user = User.first

# # Create Products
# chicken_meat_group = Group.find_by(slug: 'chicken-meat')
# Product.create(
#   name: 'Fresh Chicken Breast',
#   price: 10,
#   description: 'Premium quality chicken breast',
#   image: 'chicken-breast.jpg',
#   location: 'Farm A',
#   user: user, # Set the product's user association
#   category: animal_produce,
#   group: chicken_meat_group,
#   slug: '1'
# )

# puts 'Seed data created successfully!'





# # user = User.create(name: 'John Doe',email: 'johndoe@example.com',password: 'your_password_here',location: 'New York',phone_number: '123-456-7890',username: 'johndoe123')

# Find the user you created in the Rails console
user = User.find_by(username: 'johndoe123') # Replace 'johndoe123' with the actual username you used

if user
  # Create Categories, Subcategories, and Groups (skip this if already created)
  # ...

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
else
  puts 'User not found. Please make sure the user exists with the correct username.'
end