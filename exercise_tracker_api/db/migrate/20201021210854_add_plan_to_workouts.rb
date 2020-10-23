class AddPlanToWorkouts < ActiveRecord::Migration[6.0]
  def change
    add_reference :work_outs, :plan, foreign_key: true
  end
end
