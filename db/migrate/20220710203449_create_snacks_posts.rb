class CreateSnacksPosts < ActiveRecord::Migration[6.1]
  def change
    create_table :snacks_posts do |t|
      t.string :title
      t.text :content
      t.integer :xp, default: 0
      t.integer :views, default: 0
      t.references :user, null: false, foreign_key: true


      t.timestamps
    end
  end
end
