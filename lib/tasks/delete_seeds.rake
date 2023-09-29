namespace :db do
    desc "Delete seeds"
    task delete_seeds: :environment do
      Product.destroy_all
      Subcategory.destroy_all
      Category.destroy_all
      User.destroy_all
  
      puts "Seeds deleted successfully!"
    end
  end