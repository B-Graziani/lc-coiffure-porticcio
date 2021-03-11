# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Cleaning users..."
User.destroy_all

puts "Creating users..."
User1 = { email: "lc-coiffure-porticcio@hotmail.fr", password: "123456" }
User2 = { email: "benoit@hotmail.fr", password: "123456" }

users = []


[ User1, User2 ].each_with_index do |attributes, index|
  current_user = User.create!(attributes)
  users << current_user
end
puts "Created #{User.count} users"

