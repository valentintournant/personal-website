class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :description
      t.string :category
      t.integer :time
      t.string :language

      t.timestamps
    end
  end
end
