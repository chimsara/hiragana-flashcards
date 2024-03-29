import React, {useContext} from 'react';
import {GameContext} from '../utils/Contexts';
import art from '../img/title-art.png';
import '../styles/Start.css';

function StartMenu() {
    /*get set page from StartMenu provider*/
    const {setPage} = useContext(GameContext);

    return ( 
        <div className='Start'>
            <div className="start-menu">
                <div className="entire-title">
                    <h1>ようこそ !</h1>
                    <h2>practice hiragana</h2>
                    <button className="start-button" onClick={() => {setPage("setup-page")}}>
                        start
                    </button>
                </div>
                <div className="start-art">
                    <img src={art} alt="" className="start-art-img"/>
                </div>
            </div>
        </div>
     );
}
 
export default StartMenu;