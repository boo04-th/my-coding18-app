import React from "react"; // Importing React to Create React Component

// Creating a new component called Greetings
function Greetings ({name}){
    return(
        <div>
         <h3>Hello,{name}!</h3>
         <p>Please take a look at our drinks</p>       
         </div>
    );
}
export default Greetings; // Exporting the Greetings component so it can be used in app.jsx