admin = User.create!(
  email: 'admin@admin.com', 
  password: 'password', 
  password_confirmation: 'password',
  role: 'admin',
  username: 'Admin User'
)

administrator_users = Team.create!(
  name: 'Administrator Users',
  location: 'Australia'
)

admin.challenges.create!(
  description: 'Something Something Something Something',
  name: 'Test Challenge',
  language: 'Ruby'
)