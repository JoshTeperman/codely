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

puts 'Creating Admin Challenge...'
admin.challenges.create!(
  description: 'Something Something Something Something',
  name: 'Test Challenge',
  language: 'Ruby'
)

puts 'Finished Seeding'