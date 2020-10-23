class RemovePlansFromWorkouts < ActiveRecord::Migration[6.0]
  def change
    remove_column :work_outs, :plan_id
  end
end
