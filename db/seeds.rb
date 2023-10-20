



# Find the Group and User objects
organic_fertilizers_group = Group.find_by(name: "Organic Fertilizers")
james_user = User.find_by(email: "marktreva12@example.com")

# Create a product under the specified group and user
Product.create(
  name: "NPK Fertilizer",
  price: 20, # Set the price as per your requirement
  description: "Description of NPK Fertilizer goes here",
  location: "Nairobi, Kasarani",
  user: james_user,
  group: organic_fertilizers_group
)

# Save the product
# Product.last.save

puts 'Seed data has been created successfully.'


