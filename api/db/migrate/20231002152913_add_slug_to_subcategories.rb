class AddSlugToSubcategories < ActiveRecord::Migration[7.0]
  def change
    add_column :subcategories, :slug, :string
  end
end
