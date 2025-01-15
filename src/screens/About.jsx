import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setinitialValue } from '../store/features/product/productSlice.js'
const About = () => {
    const initial = useSelector((state) => state.product.initialValue)
    return (
        <>
            Initial value: <span>{initial}</span>
        </>
    );
 };

 export default About;