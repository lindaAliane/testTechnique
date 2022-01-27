class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :nom
      t.string :description
      t.date :dateD
      t.date :dateF

      t.timestamps
    end
  end
end
