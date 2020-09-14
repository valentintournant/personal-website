class CreateExercises < ActiveRecord::Migration[6.0]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :description
      t.string :category
      t.integer :time
      t.integer :number

      t.timestamps
    end
  end
end
