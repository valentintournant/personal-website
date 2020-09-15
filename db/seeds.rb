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

exercise_2_js = Exercise.create!(
  name: "test",
  description: "Creation of a virtual drum kit that produces a sound when you press the associated key!",
  category: "Javascript",
  time: 20,
  number: 1,
)

exercise_3_js = Exercise.create!(
  name: "test",
  description: "Creation of a virtual drum kit that produces a sound when you press the associated key!",
  category: "Javascript",
  time: 20,
  number: 1,
)

puts "You have done #{Exercise.count} exercise"
