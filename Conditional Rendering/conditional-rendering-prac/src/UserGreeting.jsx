import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faHandMiddleFinger } from '@fortawesome/free-solid-svg-icons';


function UserGreeting(props){
    // if(props.isLogged){
    //     return(
    //         <h2 className="welcome-logged">Welcome {props.name}</h2>
    //     );
    // }
    // else{
    //     return (
    //         <h2 className="welcome-notLogged">Please logged in to view the page...</h2>
    //     );
    // }

    const welcomeMessage = <h2 className="welcome-logged">
                                Welcome: {props.name}
                                <FontAwesomeIcon className='icon' icon={faThumbsUp} />
                            </h2>;

    const notLoggedMessage = <h2 className="welcome-notLogged">
                                Please logged in to view the page...
                                <FontAwesomeIcon className='icon' icon={faHandMiddleFinger} />
                            </h2>;

    return(
        props.isLogged ? welcomeMessage : notLoggedMessage
    );
}
UserGreeting.PropTypes ={
    isLogged: PropTypes.bool,
    name: PropTypes.string
}
UserGreeting.defaultTypes ={
    name: "Guest"
}

export default UserGreeting;