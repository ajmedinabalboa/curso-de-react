import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setinitialValue } from '../store/features/product/productSlice.js'

import { useState } from 'react';
const About = () => {
    const initial = useSelector((state) => state.product.initialValue)
    const products = useSelector((state) => state.product.dataProduct)

    const [ nameComponent, setNameComponent ] = useState('About');
    //let nameComponent = 'Home';
    return (
        <>
            Initial value: <span>{initial}</span>
            <div>
                {JSON.stringify(products)}
            </div>
            <p>Component name: {nameComponent}</p>
            <button onClick={() => { setNameComponent ('Curso de React') }}>Press Button</button>
        </>
    );
 };

 export default About;