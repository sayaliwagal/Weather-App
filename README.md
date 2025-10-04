Weather App 🌤️

1. Project Description

This is a responsive, single-page Weather App built with React that allows users to search for any city and view current weather conditions as well as a 5-day forecast. It fetches weather data from the OpenWeatherMap API and provides a clean, user-friendly interface.


🌐 Live Demo

🔗 https://weather-app-gold-theta-51.vercel.app/

- Core Features:

* Search for any city and get current weather.

* View temperature, humidity, pressure, wind speed, and "feels like" information.

* 5-day forecast with daily weather conditions.

* Loading indicators while fetching data.

* Error handling for invalid or non-existing cities.

* Saves the last searched city in localStorage to load automatically on refresh.

* State management using React Context API for cleaner code and global access to weather data.

* Responsive UI suitable for mobile and desktop screens.

2. Setup and Run Locally

* Prerequisites

Node.js v16+ installed

npm or yarn

* Steps

* Clone the repository

git clone https://github.com/sayaliwagal/Weather-App
cd Weather-App


* Install dependencies

npm install
#### or
yarn install


* Set up environment variables

Create a .env file in the root directory.

* Add your OpenWeatherMap API key:

VITE_WEATHER_API_KEY=your_api_key_here


* Run the development server

npm run dev
#### or
yarn dev


* Open the app in your browser at http://localhost:5173.

3. Running Test Cases
Note: This app currently does not include automated test cases.

* To manually test the application:

* Run the development server (npm run dev or yarn dev).

* Search for a city and ensure that:

* Current weather data is displayed correctly.

* Forecast data shows 5 days.

* Loading spinner appears while fetching data.

* Errors display when entering an invalid city.

* Refresh the page and verify that the last searched city is loaded automatically from localStorage.

4. Assumptions & Design Choices

* State Management: Used React Context API instead of prop drilling for cleaner code and better scalability.

* LocalStorage: Stores the last searched city to automatically display it on page refresh.

* Custom Hooks: useCallApi used to fetch both current weather and forecast data.

* Forecast Display: Shows one data entry per day (around 12:00) for clarity.

* Responsive Design: Tailwind CSS is used for responsive layouts and components.

* Icons: OpenWeatherMap icons are used for weather conditions; custom icons are used for metrics like humidity, wind speed, and pressure.

* Loading & Error States: Loading spinner and error messages enhance user experience during API calls.

5. Feature Enhancements

* Hourly Forecast & Dynamic Backgrounds: Add an hourly weather view and change the app’s background based on current weather conditions for better user experience.

* Automated Test Cases: Implement unit and integration tests (using Jest and React Testing Library) to ensure components, API calls, and state management work correctly.