# exercises
puts "destroy exercises"
Exercise.destroy_all

# exercises-
puts "create exercise"

exercise_1_js = Exercise.create!(
  name: "Drum Kit",
  description: "Creation of a virtual drum kit that produces a sound when you press the associated key!",
  category: "Javascript",
  time: 20,
  number: 1,
  language: "js"
)

exercise_2_js = Exercise.create!(
  name: "Strings Project",
  description: "Creation of a name variations table that shows you some variations of the name you enter",
  category: "Javascript",
  time: 10,
  number: 2,
  language: "js"
)

exercise_3_js = Exercise.create!(
  name: "Arrays project",
  description: "Creation of a Grade statistics app.It's a web app that allows you to enter the grades of your students",
  category: "Javascript",
  time: 30,
  number: 3,
  language: "js"
)

exercise_4_js = Exercise.create!(
  name: "Inventory project",
  description: "Creation of an inventory to practice classes. The aim is to better organize my code by grouping similar functionalities into a single class",
  category: "Javascript",
  time: 15,
  number: 4,
  language: "js"
)

puts "You have done #{Exercise.count} exercise"

# projetcs
puts "destroy projects"
Project.destroy_all

# project
puts "create project"

project_1_ruby = Project.create!(
  name: "Papel",
  description: "Papel, Make your receipts usefull again! Papel is a revolutionary platform allowing you to store, manage and share your receipts!",
  category: "Ruby",
  time: 2,
  language: "ruby",
  url: "https://papel-app.herokuapp.com/"
)

project_2_ruby = Project.create!(
  name: "Alpha Blog",
  description: "Alpha blog is a simple web app where you can create, read and delete articles!",
  category: "Ruby",
  time: 3,
  language: "ruby",
  url: "https://alpha-blog-vt.herokuapp.com/login/"
)

project_3_ruby = Project.create!(
  name: "Message Me",
  description: "Message Me is a simple web app where you can create a chat with people in real time!",
  category: "Ruby",
  time: 3,
  language: "ruby",
  url: "https://alpha-blog-vt.herokuapp.com/login/"
)

project_3_ruby = Project.create!(
  name: "Finance Tracker",
  description: "Finance tracker is an application that allows you to follow your favorite stocks!
                Thanks to the IEX Cloud API you can follow the evolution of prices in direct time. Also, add your friends and track their stocks too!",
  category: "Ruby",
  time: 3,
  language: "ruby",
  url: "https://finance-tracker-app-vt.herokuapp.com/users/sign_in"
)

puts "You have done #{Project.count} project"






