# curlFriend App
A workout planning mobile app based around crowdsourced user exercises. Users are able to build workouts of several exercises, and then see the cumulative effect heat-mapped onto the muscles of a 3D rendered mannequin. 

Front End
The front end is a mobile app for ios and android built using react native and expo. It makes calls to a server for workouts, muscles, exercises and users. The App allows users to build their own custom workouts either through specifically targetting specific muscles, or by search for exercises for generically. Once this workout is build the user is then able to take the app with them to the gym in which the specific companion page will guide them through their workout. All exercises are saved on our own database allowing the user to recall a previous workout for them to complete. curlFriend also uses Firebase Authentication to allow users to Login.

Back End
Here is a link to the Back End Repo/ReadMe for curlFriend - https://github.com/charlie-wild/Workout-Planner-BE

Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
You will need to download the expo app to run the game locally on a phone. You will also need to install the prerequisites for running and testing the application by running the following on the command line.

$ npm install
Versions
   "axios": "^0.18.0",
		"expo": "^32.0.0",
		"expo-graphics": "^1.0.2",
		"expo-three": "^3.0.0-alpha.6",
		"firebase": "^5.8.0",
		"moment": "^2.24.0",
		"native-base": "^2.10.0",
		"react": "16.5.0",
		"react-native": "https://github.com/expo/react-native/archive/sdk-32.0.0.tar.gz",
		"react-native-calendars": "^1.21.0",
		"react-native-dropdown-menu": "^2.0.0",
		"react-native-elements": "^0.19.1",
		"react-native-fontawesome": "^6.0.1",
		"react-native-form-builder": "^1.0.16",
		"react-native-material-dropdown": "^0.11.1",
		"react-native-panel": "^1.0.4",
		"react-native-simple-radio-button": "^2.7.3",
		"react-native-vector-icons": "^6.2.0",
		"react-navigation": "^3.0.9",
		"three": "^0.100.0"
    
Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open the expo app and scan the QR code to view the project on android or ios. The page will reload if you make edits.

Hosting
The front end is not currently deployed, however it can be run locally using the instructions above. The back end can be found on https://nc-project-be.herokuapp.com/api
