# Find the subcategories you want to work with
subcategory_fertilizers = Subcategory.find_by(name: 'Fertilizers')

# Create groups under the subcategory
group_organic_fertilizers = subcategory_fertilizers.groups.create(
  name: 'Organic Fertilizers',
  slug: 'organic-fertilizers'
)

# Create products under the group
product1 = group_organic_fertilizers.products.create(
  name: 'Product 1 Name',
  slug: 'product-1-slug'
)

product2 = group_organic_fertilizers.products.create(
  name: 'Product 2 Name',
  slug: 'product-2-slug'
)

puts 'Seed data has been created successfully.'