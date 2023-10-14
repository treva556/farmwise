class RemoveSubcategoryIdFromProducts < ActiveRecord::Migration[7.0]
  def change
    # Remove the foreign key constraint first
    remove_foreign_key :products, :subcategories if foreign_key_exists?(:products, :subcategories)
    
    # Now, remove the column
    remove_column :products, :subcategory_id
  end
end