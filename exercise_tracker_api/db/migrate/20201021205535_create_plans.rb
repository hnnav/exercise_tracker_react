class CreatePlans < ActiveRecord::Migration[6.0]
  def change
    create_table :plans do |t|
      t.integer :goal
      t.string :cut_off

      t.timestamps
    end
  end
end
