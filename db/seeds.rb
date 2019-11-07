puts 'Destroying Records...'
User.destroy_all
Challenge.destroy_all

puts 'Starting Seed...'

puts 'Creating Admin User...'
admin = User.create!(
  email: 'admin@admin.com',
  password: 'password',
  password_confirmation: 'password',
  role: 'admin',
  username: 'Admin User'
)

puts 'Creating Admin Challenges...'
admin.challenges.create!(
  description: 'Admin Challenge',
  name: 'Test Challenge',
  language: 'Ruby'
)
admin.challenges.create!(
  description: 'Another Admin Challenge',
  name: 'Random Challenge',
  language: 'Ruby'
)
admin.challenges.create!(
  description: 'Yet Another Admin Challenge',
  name: 'Another Random Challenge',
  language: 'Javascript'
)

puts 'Finished Seeding'
