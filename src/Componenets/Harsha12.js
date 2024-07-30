import React, { useState } from 'react';

import Harsha123 from './Harsha123';
 
export default function Harsha12() {
    const [state, setState] = useState([
        { Name1: 'Apple' },
        { Name1: 'Banana' },
        { Name1: 'Cherry' },
        { Name1: 'Mango' }
    ]);
 
    return (
        <div>
         
            <Harsha123 harsh={state} />
        </div>
    );
}