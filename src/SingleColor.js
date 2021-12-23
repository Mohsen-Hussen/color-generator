import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index }) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    const hex = rgbToHex(...rgb);
    // console.log(hex);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setAlert(false);
        },3000);
        return () => {
            clearTimeout(timeOut);
        }
    },[alert]);

    const clipBoard = () => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
    }
    
    return (
        <article
            className={`color ${index > 10 && 'color-ligth'}`}
            style={{backgroundColor:`rgb(${bcg})`}}
            onClick={clipBoard}
        >
            <p className='percent-value'>{weight}%</p>
            <p className='color-value'>{hex}</p>
            {alert && <p className="alert">Copied To Clipboard</p>}
        </article>
    )
}

export default SingleColor;