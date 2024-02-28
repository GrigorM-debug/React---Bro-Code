import logo from './assets/cartoon-game-avatar-logo-gaming-brand_902820-465.avif';

function Card(){
    return(
        <div className= 'Card'>
            <img src={logo} alt="logo" />
            <h2>My first React App</h2>
            <p>Trying to learn a little bit of react</p>
            <a href="#" className='button'>Read More</a>
        </div>

    );
}

export default Card;