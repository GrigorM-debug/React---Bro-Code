function Button(){
    const buttonHandleClick = (e) => e.target.textContent = "Stop Clicking Me! 😑";

    const buttonHandleClick2 = (e) => e.target.style.display = "none";

    return(
        <button onClick={(e) => buttonHandleClick2(e)}>Click Me! 😁</button>
    );
}

export default Button;