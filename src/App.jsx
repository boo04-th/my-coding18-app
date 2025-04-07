import React from "react"; //This is the main component of the React app. It shows logos, a counter button, and the Greeting component
import Greetings from "./components/Greetings"; //Greeting component is imported from the components folder

function App() { //This is the main function that defines the App component
  return (
    <div>
      <h1>Welcome to Our Shop</h1>
      <p>
      <Greetings name="Hien Tran" />
      <Greetings name="Matcha latte with Isuzu powder" price="$5" />
      <Greetings name="Matcha latte with Unkaku powder" price="$7" />
      <Greetings name="Matcha latte with Wako powder" price="$9" /></p>
    </div>
  );
}

export default App; //Exporting the App component so it can be used in other files