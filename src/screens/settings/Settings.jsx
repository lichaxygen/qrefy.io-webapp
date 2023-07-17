import { useState } from 'react';
import axios from 'axios';
import { Container,Form,FormField,Input,InputWrapper,Label,ToggleButton,PasswordToggleIcon} from './SettingsStyle.js';
import ButtonCustom from '../../components/button/ButtonCustom.jsx';
import { UilEye, UilEyeSlash } from '@iconscout/react-unicons';


function Settings() {
    // el usuario y pass hay que traerlo del back al cargar la pantalla
    const [userAPI, setUserAPI] = useState('');
    const [passAPI, setPassAPI] = useState(''); 
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleUserAPIChange = (event) => {
        setUserAPI(event.target.value);
    }

    const handlePassAPIChange = (event) => {
        setPassAPI(event.target.value);
    }

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleKeyAPI = () => {
        // Llamar a API generadora de token, enviar usuario y contraseña
        const errors = {};

        if (!userAPI) {
            errors.userAPI = 'Se necesita un usuario de API.';
        }
        if (!passAPI){
            errors.passAPI = 'Se necesita una contraseña de API.'
        }

        setErrors(errors);
    }

    const saveUserPassAPI = () =>{

    }

    const handleUserPassSubmit = (event) =>{
        event.preventDefault();
        const errors = {};

        if (!userAPI) {
            errors.userAPI = 'Debe ingresar usuario.';
        }
        if (!passAPI){
            errors.passAPI = 'Debe ingresar contraseña.'
        }

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            // Aquí puedes realizar la lógica de envío del formulario
            console.log(`Save: userAPI:${userAPI} passAPI:${passAPI}`);

            saveUserPassAPI();
        }

    }

    return (
        <Container>
            <h2>Ajustes</h2>
            <h3>Usuario y contraseña de API</h3>
            <Form onSubmit={handleUserPassSubmit}>
                <FormField>
                    <Label>Usuario API</Label>
                    <InputWrapper>
                        <Input
                            type="text"
                            value={userAPI} 
                            onChange={handleUserAPIChange}
                            placeholder='Ingrese su usuario'
                            required
                        />
                    </InputWrapper>
                    {errors.userAPI && <ErrorMessage>{errors.userAPI}</ErrorMessage>}
                </FormField>   
                <FormField>
                    <Label>Contraseña API</Label>
                    <InputWrapper>
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            value={passAPI} 
                            onChange={handlePassAPIChange}
                            placeholder='Ingrese su contraseña'
                            required
                        />
                        <ToggleButton onClick={handleTogglePassword}>
                            <PasswordToggleIcon>
                                {showPassword ? <UilEyeSlash /> : <UilEye />}
                            </PasswordToggleIcon>
                        </ToggleButton>
                    </InputWrapper>
                    {errors.passAPI && <ErrorMessage>{errors.passAPI}</ErrorMessage>}
                </FormField> 
                <ButtonCustom type='submit' title="Guardar" action={handleUserPassSubmit}/>
            </Form>

            <h3>Clave de autenticación de API</h3>
            <ButtonCustom title="Generar KEY API" action={handleKeyAPI}/>
            {errors.APIKEY && <ErrorMessage>{errors.APIKEY}</ErrorMessage>}
                        
        </Container>
    )
}

export default Settings