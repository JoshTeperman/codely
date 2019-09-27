## Architecture

### Backend
Rails API <br>
Postgres Database <br>
Code Snippets <br>
Possibly store Repl.it or GitHUB Gists urls <br>
Serialize JSON responses, send send to React Client <br>
JWT & Devise Authentication

### Frontend
React Client <br>
GraphQL API with Apollo <sd
JWT Authentication & Cookies 

## User Stories
As a _Guest User_, I want to be able to:

- View everything that a normal user can
- Sign up for an account

As a _Normal User_, I want to be able to:

__Profile and Setup__
- Create a Profile with Avatar, bio
- Login with username, email address, Google Authentication or Github Authentication
- Select the languages I am trying to learn, and be able to view a dashboard with all of the available challenges for that language that I have not completed yet
- View and edit Profile Settings

__Challenges and Solutions__
- View all of the challenges on the site and be able to filter them based on author, language, group, or difficulty level
- Add challenges I want to attempt to a list so that I can keep track of them as 'unsolved'
- Bookmark challenges that I like. I should be able to see them in this list whether I have solved them or not
- Add my own private notes to challenges.
- Add public comments to challenges
- 'Reply' to comments > comment on comments, same thing as tagging users in comments
- Like comments
- View a list of who has completed each challenge, the number of people who have completed the challenge, the number of likes of each challenge, and who has liked the challenge
- Unlock and view a list of Solutions once I have completed a challenge
- Upvote solutions to challenges

- Create private groups with friends
  - I can invite new friends to join the group (they'll receive notification and can accept / reject)
  - We can view a mini leaderboard
  - We can get notifications when friends complete solutions / create new challenges
- Click 'view solution' to a challenge, and be given a flash message "are you certain etc" if I still have not submitted a solution

__Notifications__
- Turn off notifications
- Notification after signing up
- Notification after gaining points for completing a challenge, + total number of challenges completed
- Notification when completing a challenge in more than one language
- Notificatin after gaining points for a solution being upvoted
- Notification when gaining a rank
- Congratulations when completing a group of challenges
- Notification when someone tags you in a comment (can't tag someone in a Solution comment if they haven't completed the Challenge)
- Notification when someone likes your comment


As a __Challenge Creator__, I want to be able to:
- Create new challenges
- Create groups of challenges (eg: Matt's Ruby Fundamentals)
- Add personalised messages for completing a group of challenges eg: 'Congratulations' etc
- Decide whether my challenges should require Solutions to pass tests to be considered completed

## Functionality
- Syntax Highlighting
  - Native Syntax Highlighting using a Gem of some kind
  - Embedding <Gists, Repl.it>
- Comment on Solutions, Challenges, Comment on Comments
- Leaderboards of some kind (number of completed challenges)
- Upvote best solutions
- 'Save' Solutions, 'Save' Challenges > easy exporting of some kind, turn into Gist?
- Slack Group

## Bucket List Functionality
- Difficulty level indicators for challenges
  - Peer review for new challenges: Submitted challenges are given a 'pending' status until they have passed a certain review process. For example, challenge must be successfult completed by x users, who each submit their assessment of the difficulty level, the average of which becomes the difficult level of the challenge when it completes review.
- Flag challenges which are deemed to be the wrong difficulty level: Certain number of flags are required for review by administrator
- Flag errors / bugs > reviewed by administrator. If bug is confirmed the challenge is taken down or status is changed.
- Passing challenges of a certain level of difficulty give different level of reward
- Users can create mini-competitions: Decide which challenge, deadline, vote on a winner etc.
- Groups for users (eg CoderAcademy 2019 cohort etc)
- 'Follow' other users / create your own leaderboards to track each other

## Possible difficulties:
- Maintaining code integrity of old challenges (who is responsible? Can the community reliably manage code?)
- Embedding code with Gists will probably force people to do the work of creating the Gist and uploading - not very user friendly

# Research
### Embedding Gists
http://robertgreiner.com/2012/04/using-github-as-a-syntax-highlighter/
<!-- <script src="https://gist.github.com/<gist_id>.js"> </script> -->
https://gist-it.appspot.com/
<!-- Take a github file url and prefix it with http://gist-it.appspot.com and embed the result within a <script> tag: -->
<!-- <script src="http://gist-it.appspot.com/http://github.com/$file"></script> -->
https://gist.github.com/benbalter/5555251

## Syntax Highlighting
- React Syntax Highlighter <br>
https://github.com/conorhastings/react-syntax-highlighter/tree/e3e333ccf6404c859a62f3d1c518dc7e03c2506a
- Prism <br>
https://prismjs.com/
- Markdown with React-Markdown<br>
https://medium.com/young-developer/react-markdown-code-and-syntax-highlighting-632d2f9b4ada

## In-browser Code Editor
- CodeMirror <br>
https://codemirror.net/
- MDXJS <br>
https://mdxjs.com/guides/live-code
- Ace <br>
https://ace.c9.io/#nav=embedding

### Authentication
- devise-token-auth https://github.com/lynndylanhurley/devise_token_auth
- jwt
