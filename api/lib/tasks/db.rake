namespace :db do
  desc "Remove all seed data"
  task remove_seed_data: :environment do
    # Remove all seed data here
    User.delete_all
    Category.delete_all
    Subcategory.delete_all
    Product.delete_all

    puts "All seed data removed."
  end
end