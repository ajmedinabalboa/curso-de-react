import { useState } from "react";
const FormLogin = ({ titleForm }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: ''
    });
    const handleSubmit = (event) => {
        event.preventDefault();     
        console.log('datos del formulario',formData);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>{titleForm}</h3>
                <div>
                    <label htmlFor="username">
                        Username:
                        <input type="text" name="username" required value={formData.username} onChange={handleChange} />
                    </label>
                </div>

                <div>
                    <label htmlFor="email">
                        Email:
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} />
                    </label>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default FormLogin;