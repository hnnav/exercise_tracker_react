# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Plan.delete_all
# WorkOut.delete_all
plan = Plan.create(name: 'Get in shape for christmas', goal: 10, cut_off: '12/2020')
workout = WorkOut.create(date: '09/2020', workout_type: 'Running', duration: 12)
