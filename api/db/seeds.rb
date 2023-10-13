# Create Categories
categories = Category.create([
  { name: 'Farm Produce', slug: 'farm-produce' },
  { name: 'Equipments and Services', slug: 'equipments-services' }
])

# Create Subcategories
subcategories_farm_produce = categories[0].subcategories.create([
  { name: 'Fertilizers', slug: 'fertilizers' },
  { name: 'Crops', slug: 'crops' }
])

subcategories_equipments = categories[1].subcategories.create([
  { name: 'Services', slug: 'services' },
  { name: 'Equipments', slug: 'equipments' }
])

# Create Groups
groups_fertilizers = subcategories_farm_produce[0].groups.create([
  { name: 'Organic Fertilizers', slug: 'organic-fertilizers' },
  { name: 'Inorganic Fertilizers', slug: 'inorganic-fertilizers' }
])

groups_services = subcategories_equipments[0].groups.create([
  { name: 'Consulting', slug: 'consulting' },
  { name: 'Maintenance', slug: 'maintenance' }
])

# Create Products
products_organic_fertilizers = groups_fertilizers[0].products.create([
  { name: 'Natural Plant Fertilizer', slug: 'natural-plant-fertilizer' },
  { name: 'Compost Fertilizer', slug: 'compost-fertilizer' }
])

products_consulting = groups_services[0].products.create([
  { name: 'Agricultural Consulting Service', slug: 'agricultural-consulting-service' },
  { name: 'Soil Testing Service', slug: 'soil-testing-service' }
])

puts 'Seed data has been created successfully.'