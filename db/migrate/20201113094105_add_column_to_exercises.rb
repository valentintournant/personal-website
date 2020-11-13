class AddColumnToExercises < ActiveRecord::Migration[6.0]
  def change
    add_column :exercises, :language, :string
  end
end
