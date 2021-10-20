import React from "react";
import './Button.css'
import { Link } from "react-router-dom";

const STYLES=['btn--primary','btn--outline']
const SIZES=['btn--medium','btn--large']


export const Button=({children,type,onclick,buttonstyle,buttonsize})=>{
    const checkButtonStyle=STYLES.includes(buttonstyle)? buttonstyle:STYLES[0]
    const checkButtonSize=SIZES.includes(buttonsize)? buttonsize:SIZES[0]
    return(<Link to="/sign-up" className="btn-mobile">
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onclick={onclick} type={type}  >
            {children}
        </button>
    </Link>)
}