

subcategories_equipments = Category.find_by(name: 'Equipments and Services').subcategories.create([
  { name: 'Services', slug: 'services' }
  # Add more subcategories for 'Equipments and Services' category as needed
])

puts 'Seed data has been created successfully.'