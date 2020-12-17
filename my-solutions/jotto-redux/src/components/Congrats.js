import React from 'react';

/**
 * React function component for correctly guessing the word
 * @function
 * @returns {JSX.Element} - Rendered element
 */


export default (props) => {
        if(props.success){
            return(
            <div data-test="component-congrats">
                <span data-test="congrats-message">
                Congratulations! You guessed the word!
                </span>
            </div>
            );
        }else{
            return(
                <div data-test="component-congrats"/>
            );
        }
};