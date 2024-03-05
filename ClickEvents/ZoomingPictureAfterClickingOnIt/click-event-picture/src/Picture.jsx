function Picture(){
    const imgPath = './src/assets/gorilla.jpg';

    // const handleCLick = (e) => e.target.style.width = "2000px";
    const handleCLick = (e) => e.target.style.display = "none";

    return (<img onClick={(e) =>handleCLick(e)} src={imgPath} alt='gorilla'></img>);
}

export default Picture;