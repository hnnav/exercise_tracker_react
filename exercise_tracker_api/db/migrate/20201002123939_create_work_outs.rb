class CreateWorkOuts < ActiveRecord::Migration[6.0]
  def change
    create_table :work_outs do |t|
      t.date :date
      t.string :workout_type
      t.time :duration

      t.timestamps
    end
  end
end
