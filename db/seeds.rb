# exercises
puts "destroy exercises"
Exercise.destroy_all

# exercises-JS
puts "create exercise"

exercise_1_js = Exercise.create!(
  name: "Drum Kit",
  description: "Creation of a virtual drum kit that produces a sound when you press the associated key!",
  category: "Javascript",
  time: 20,
  number: 1,
)

exercise_1_js = Exercise.create!(
  name: "Strings Project",
  description: "Creation of a name variations table that shows you some variations of the name you enter.",
  category: "Javascript",
  time: 10,
  number: 2,
)

exercise_1_js = Exercise.create!(
  name: "Arrays project",
  description: "Creation of a Grade statistics app.It's a web app that allows you to enter the grades of your students",
  category: "Javascript",
  time: 30,
  number: 3,
)

puts "You have done #{Exercise.count} exercise"
