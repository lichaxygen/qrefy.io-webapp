import { useState } from 'react';
import { useAppDispatch } from '../../../app/store';
import { setLoading, setError } from '../../../features/authSlice';
import ButtonCustom from '../../../components/button/ButtonCustom';
import { Form, Input, ButtonBox, InputWrapper } from './LoginFormStyle';

const LoginForm = () => {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        dispatch(setLoading(true));

        try {
        } catch (error) {
        }
    };

    return (
        <Form onSubmit={handleLogin}>
            <InputWrapper>
                <Input
                    type="email"
                    placeholder="usuario@dominio.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </InputWrapper> 
            <InputWrapper>   
                <Input
                    type="password"
                    placeholder="Ingrese su contraseña..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </InputWrapper>    
            <ButtonBox>
                <ButtonCustom type="submit" title="Iniciar Sesión" action={handleLogin}/>
            </ButtonBox>
        </Form>
    );
};

export default LoginForm;