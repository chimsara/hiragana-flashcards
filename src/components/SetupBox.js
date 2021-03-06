import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SetupButton from "./SetupButton"
import '../styles/Setup.css';

function SetupBox({setUserQuestionAmount}) {
    const [amount, setAmount] = useState("");

    let nav = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); 
        setUserQuestionAmount(amount); /*sends user input to parent*/

        let path = "/quiz";
        nav(path);
    }

    return ( 
        <form className="setup-two-boxes" onSubmit={handleSubmit}>
            <div className="setup-question-amount-box">
                <label htmlFor ="question-amount"></label>

                <div id="setup-form-input">
                    <input 
                        type="number" id="question-amount" name="question-amount" 
                        placeholder="##" contentEditable = "true" pattern="^[0-9]+$"
                        required
                        min="1" max="104" maxLength="3"
                        value = {amount}
                        onChange = {(e) => setAmount(e.target.value)}
                    />
                </div>
                <h3 id="setup-slash"> / </h3>
                <h3 id="out-of-104">104</h3>
            </div>
            <SetupButton /> 
        </form>
     );
}
 
export default SetupBox;