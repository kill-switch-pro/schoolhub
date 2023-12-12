## struture of the main site

# structure of fontend

public : A storage room for publicly accessible assests like HTML template , images and stylesheet

app.js : the controls center of react app , where you set up and manage everything

src : the core of your react app

index.js : the entry point connecting your app to the DOM

App.js : the main component defining the overall layout and routing

components : reusable building block for your UI , like buttons and card

containers : main views or page of your app, such as home or profile

context : central hubs for managing global app state, like user authentication

hooks : custom tool for handling common functionality , like api request or local state management

styles : definitions for CSS or SCSS to style your components

utils : Handy tools for task like data validation and date formatting

tests : Exams for your app to ensure it works correctly , including unit , integration, and e2e tests

node_modules : your toolbox filled with automatically installed dependencies for building your app

## struture of code

camel case (camelCase) for function and variable
use pascal case (PascalCase for component)
read about code spliting

using code spliting to help u load only needed component

const HomePage = React.lazy(() => import('./views/HomePage'));
const ProfilePage = React.lazy(() => import('./views/ProfilePage'));
const FriendsPage = React.lazy(() => import('./views/FriendsPage'));

# routing in react

# structure of fontend

public : A storage room for publicly accessible assests like HTML template , images and stylesheet

app.js : the controls center of react app , where you set up and manage everything

src : the core of your react app

index.js : the entry point connecting your app to the DOM

App.js : the main component defining the overall layout and routing

components : reusable building block for your UI , like buttons and card

containers : main views or page of your app, such as home or profile

context : central hubs for managing global app state, like user authentication

hooks : custom tool for handling common functionality , like api request or local state management

styles : definitions for CSS or SCSS to style your components

utils : Handy tools for task like data validation and date formatting

tests : Exams for your app to ensure it works correctly , including unit , integration, and e2e tests

node_modules : your toolbox filled with automatically installed dependencies for building your app

## struture of code

camel case (camelCase) for function and variable
use pascal case (PascalCase for component)
read about code spliting

using code spliting to help u load only needed component

const HomePage = React.lazy(() => import('./views/HomePage'));
const ProfilePage = React.lazy(() => import('./views/ProfilePage'));
const FriendsPage = React.lazy(() => import('./views/FriendsPage'));

change the class name to something more understandable

donot commit readme.md yet
remeber to delete the todo.md file

remeber anytime you need to find the file pth of any css file , just add some dummy component to the css file and rename the css file to jsx try linking the dummy component to the your the where u are looking for the path , this way the ide shows the direct file path

remeber the tutotrial to make a login page on your phone revisit again / install express js

make everything a component , what you think you will use again
it your projects not a big company project , do what u like dont forget to do it well

project will contain :

1. a custom timetable for student that would also alert them for incoming class ( web app version or even the app )
   => count down to exams and test
   =>if possible add an event of anonymous picture and video ( whistle blower)
   =>

2. sale and purchase of airtime/ data and examination pin ( jamb / waec / neco )

3. make it functionality like whatsapp , data anarchy

5) make it like twitter where every tweet is a tweet of a tweet

dont collect user data ( data privacy )

EVERYTHING SHOULD BE A COMPONENT

HOW TO CREATE A SOCIAL MEDIA APP

1. Set up your development environment:

   Install Node.js: Visit the official Node.js website and download the installer for your operating system.
   Install a package manager: npm (included with Node.js) or Yarn.
   Choose a suitable IDE or code editor for React development.

2. Create a new React project:

   Open your terminal or command prompt and navigate to the desired directory.
   Run the following command to create a new React project: npx create-react-app YourAppName
   Wait for the scaffolding of the project to complete.

3. Design the application architecture:

   Plan the structure and features of your social media app, such as user profiles, posts, comments, likes, etc.
   Define the components and their hierarchy based on the application requirements.

4. Implement the UI components:

   Create reusable UI components using React's built-in components and third-party libraries.
   Use CSS or a CSS-in-JS solution like styled components or CSS modules to style your components.
   Ensure a responsive design for different screen sizes.

5. Manage status:

   Choose a state management solution like Redux, MobX, or the React Context API.
   Define global state and reducers to handle the flow of data and updates between components.

react

6. Implement routing:

   Choose a routing library like React Router to handle navigation between different screens or pages in your app.
   Set routes for various views such as home feed, user profiles, post details, etc.

7. Integrate back-end functionality:

   Set up a back-end server using a technology stack of your choice (for example, Node.js, Express.js, MongoDB, etc.).
   Implement APIs for user authentication, user profiles, posts, comments, etc.
   Connect your React app to the backend using fetch or axios to make API requests.

8. Implement user authentication:

   Add user registration and login functionality.
   Use secure practices like password hashing and token-based authentication (JWT).
   Manage user sessions and authorization for protected routes.

9. Create a user profile and post roles:

   Create screens for user profiles, including profile pictures, usernames, followers, etc.
   Implement features like create, edit, and delete posts.
   Add functionality to like, comment, and share posts.

10. Implement real-time updates:

    Integrate a real-time messaging system using technologies like WebSockets or a service like Firebase Realtime Database.
    Enable real-time updates for new posts, comments, likes, and other user activity.

11. Test and debug:

    Test your app on different browsers and devices to ensure compatibility and responsiveness.
    Debug and fix any issues or errors that arise during testing.

react

12. Deploy and publish:

    Optimize your application performance for production.
    Build the application for deployment by building a production-ready package.
    Host your backend server and deploy your React app to a hosting provider.
    Register your app in the respective app stores if you plan to publish it as a mobile app.

remeber :

1. design the logo
2. forget abt design ,work on the functionality first
