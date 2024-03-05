import React, { useState } from 'react';

function Button(){
    const [name, setName] = useState("");

    const imgPath = 'src/assets/gorilla.jpg';

    const buttonHandleClick = (e) => e.target.textContent = "Stop Clicking Me! 😑";

    const buttonHandleClick2 = (e) => e.target.style.display = "none";

    return(
        <button onClick={(e) => buttonHandleClick(e)}>Click Me! 😁</button>
    );
}

export default Button;