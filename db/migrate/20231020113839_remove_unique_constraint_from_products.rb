class RemoveUniqueConstraintFromProducts < ActiveRecord::Migration[7.0]
  def change
    remove_index :products, [:name, :group_id] if index_exists?(:products, [:name, :group_id])

  end
end
