class AddGroupIdToProducts < ActiveRecord::Migration[7.0]
  def change
    add_reference :products, :group, foreign_key: true
  end
end
