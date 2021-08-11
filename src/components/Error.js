import React from 'react'
import { useParams } from 'react-router-dom';

import './Error.css';

export default function Error() {

    const { type } = useParams();
    console.log(type);
    let display = "General Error, Please Retry";
    if (type === "100") {
        display = "Auth Error, Please Retry";
    } else if (type === "200"){
        display = "App Error, Please Retry";
    } 

    return (
        <div>
            <h2 className="alertred">{display}</h2>
        </div>
    )
}
