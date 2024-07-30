import React from 'react';
import './Style.css'
 
export default function Harsha1234({ data1 }) {
    return (
        <div>
           
            {data1.map((x) => (
                <h1 >{x.Name1}</h1>
            ))}
        </div>
    );
}