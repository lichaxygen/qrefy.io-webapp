import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Cookies from 'js-cookie';
import auth from '../../../config/firebase.js';
import { Button, Icon, Text } from './GoogleLoginButtonStyle';

const GoogleLoginButton = () => {
    console.log("cambios");
    const handleGoogleLogin = async () => {
        let provider = new GoogleAuthProvider();
        // esto me permite que le consulte a google para pedir permisos
        // a la hora de iniciar sesión y que me traiga. El profile y el email
        provider.addScope('profile');
        provider.addScope('email');
        
        // uso signInWithPopup es una de las más clasicas
        // también esta la opción de signInWithRedirect
        let result = await signInWithPopup(auth, provider)
        
        // esto es solo para en testing saber si se pudo conseguir o no la info
        // quizas se tendria que tener un try-catch del result
        const user = result.user;
        console.log(`${user.displayName} ha iniciado sesión con Google.\n`,
            `${user.email} ha iniciado sesión con Google.\n`,
            `${user.emailVerified} ha iniciado sesión con Google.\n`,
            `${await user.getIdToken()} ha iniciado sesión con Google.\n`,
            user);
        
        // se podria usar user.emailVerified para evitar que manden peticiones providers
        // poco confiables 

        
        // esto también esta sujeto a revisión porque expone el endpoint del backend
        // no se si hay una manera más practica de hacer esta petición o no sajdajs

        // la idea es que el backend ded /users/auth/provider espera siempre un 
        // Bearer : userIdToken
        // y que para poder validar los datos se tiene que enviar el email y el displayName que se usara posteriormente como username provisional
        let response = await fetch('http://localhost:3001/users/auth/provider', {
            method: "POST",
            headers: {
                Authorization: 'Bearer ' + await user.getIdToken(),
                Accept: 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                                username: user.displayName, 
                                email: await user.getIdToken(),
                            })
        });
    }

    return (
        <Button onClick={handleGoogleLogin}>
            <Icon src="./src/assets/images/google_icon.png" alt="Google" />
            <Text>Iniciar sesión con Google</Text>
        </Button>
    );
};

export default GoogleLoginButton;