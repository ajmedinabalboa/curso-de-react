import { motion } from "motion/react"
import useForm from "../Hooks/useForm.js";

import ModalSuccess from "../../Components/Modals/ModalSuccess.jsx";
import ModalError from "../../Components/Modals/ModalError.jsx";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { updateForm, resetForm, login  } from '../../store/features/form/formSlice.js'
// eslint-disable-next-line react/prop-types
const FormWithMotionAndHook = ({titleForm}) => {  
    const dispatch = useDispatch();

    const {formData, handleChange} = useForm({
        module:useSelector((state) => state.form.formData.module),
        username: '',
        email: '',
        password:''
    });
    const handleSubmit = (e) => {        
        e.preventDefault();
        if(formData.password === 'mod7USIP-ALVARO'){
            dispatch(updateForm({ field: 'formData', value: formData }));
            dispatch(login()); // Cambia el estado a "logged in"
            setShowModal(true);  
            
        } else {
            setShowModalError(true);
        }
        //console.log('datos del formulario', formData);
    };
    const [showModal, setShowModal] = useState(false);
    const onCloseModalinfo = () => {
        setShowModal(false);        
    };

    const [showModalError, setShowModalError] = useState(false);
    const onCloseModalError = () => {
        setShowModalError(false);        
    };
    
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
      };

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <ModalSuccess visible={showModal} 
                       message={formData.username}
                       onClose={onCloseModalinfo} 
            />
            <ModalError visible={showModalError} 
                       message="Username/Password incorrectos!!!"
                       onClose={onCloseModalError} 
            />
            <form onSubmit={handleSubmit}>
                <motion.div
                    initial={{x: -100}}
                    animate={{x: 0}}
                    transition={{duration: 0.5}}
                >
                    <h3>{titleForm}</h3>
                </motion.div>
                <motion.div
                    initial={{x: -100}}
                    animate={{x: 0}}
                    transition={{duration: 0.5}}
                >
                    <div className="text_area">
                        <label>
                            Module:
                            <input
                                className="text_input" 
                                type="text"
                                name="module"
                                value={formData.module}
                                onChange={handleChange}
                                disabled
                                required
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{x: -100}}
                    animate={{x: 0}}
                    transition={{duration: 0.5}}
                >
                    <div className="text_area">
                        <label>
                            Username:
                            <input
                                className="text_input" 
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{x: -100}}
                    animate={{x: 0}}
                    transition={{duration: 0.5}}
                >
                    <div className="text_area">
                        <label>
                            Email:
                            <input
                                className="text_input"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{x: -100}}
                    animate={{x: 0}}
                    transition={{duration: 0.5}}
                >
                    <div className="text_area">
                        <label>
                            Password:
                            <input
                                className="text_input"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="button-visibility"
                            >
                            {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{y: 100}}
                    animate={{y: 0}}
                    transition={{duration: 0.5}}
                >
                    <div >
                        <button className="btn" type="submit">Login</button>
                    </div>
                </motion.div>
            </form>
        </motion.div>
    );
};
export default FormWithMotionAndHook;