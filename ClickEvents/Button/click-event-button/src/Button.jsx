import React, { useState } from 'react';

function Button(){
    const [name, setName] = useState("");

    const imgPath = 'src/assets/gorilla.jpg';

    // const buttonHandleClick = (e) => e.target.textContent = "Stop Clicking Me! 😑";

    // const buttonHandleClick2 = (e) => e.target.style.display = "none";

    const buttonHandleClick3 = () =>{
        return(
            <div>
                <h3>Fuck You! {name}</h3>
                <img src={imgPath} alt="Gorilla Picture" />
            </div>
        );
    };

    return(
        // <button onClick={(name) => buttonHandleClick3(name)}>Click Me! 😁</button>
        <div>
            <input
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={buttonHandleClick3}>Click Me! 😁</button>
        </div>
    );
}

export default Button;