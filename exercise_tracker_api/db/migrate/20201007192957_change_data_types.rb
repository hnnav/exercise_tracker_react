class ChangeDataTypes < ActiveRecord::Migration[6.0]
  def change
    change_table :work_outs do |t|
      t.change :date, :string
      t.change :duration, :string
    end
  end
end
