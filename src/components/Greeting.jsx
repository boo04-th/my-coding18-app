import React from 'react'; // Importing React to Create React Component

// Creating a new component called Greetings
function Greeting ({name}){
    return(
        <div>
            <h2>Hello from the Greeting Component!</h2> 
            <p>This is your first custom component in React.</p>
        </div>
    );
}
export default Greeting; // Exporting the Greetings component so it can be used in app.jsx