class ChangeDurationTypeToNumber < ActiveRecord::Migration[6.0]
  def change
    change_table :work_outs do |t|
      t.change :duration, :integer
    end
  end
end
