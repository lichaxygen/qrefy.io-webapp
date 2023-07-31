import LoginForm from './loginForm/LoginForm.jsx';
import GoogleLoginButton from './google/GoogleLoginButton.jsx';
import { Container, Division, Linea, Text } from './LoginStyle.js';

const Login = () => {
    return (
    <Container>
        <h2>Bienvenido a Qrefy.io</h2>
        <GoogleLoginButton />
        <Division>
            <Linea/>
            <Text>Or</Text>
            <Linea/>
        </Division>
        <LoginForm /> 
    </Container>
    );
};

export default Login;