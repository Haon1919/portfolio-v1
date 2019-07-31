import React from 'react';

const Button = ({ direction, moveSlider }) => {
    let rotate = direction === 'next' ? 'rotate(0deg)' : 'rotate(180deg)';
    let transformation = direction === 'previous' ? '1.5px' : '';
    const rotation = {
        "transform" : rotate,
        "top" : transformation
    }
    return(
        <div onClick={moveSlider} className='center-con'>
            <div className="round">
                <div id="cta" style = {rotation}>
                    <span className="arrow primera next "></span>
                    <span className="arrow segunda next "></span>
                </div>
            </div>
        </div>
    );
};

export default Button;