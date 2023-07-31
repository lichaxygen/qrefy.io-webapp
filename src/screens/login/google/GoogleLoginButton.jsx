import { auth } from '../../../config/firebase';
import { useAppDispatch } from '../../../app/store';
import { setLoading, setError } from '../../../features/authSlice';
import { Button, Icon, Text } from './GoogleLoginButtonStyle';

const GoogleLoginButton = () => {
    const dispatch = useAppDispatch();

    const handleGoogleLogin = async () => {
        dispatch(setLoading(true));

        try {
            const provider = new auth.GoogleAuthProvider();
            await auth.signInWithPopup(provider);
            dispatch(setLoading(false));
        } catch (error) {
            dispatch(setError(error.message));
            dispatch(setLoading(false));
        }
    };

    return (
        <Button onClick={handleGoogleLogin}>
            <Icon src="./src/assets/images/google_icon.png" alt="Google" />
            <Text>Iniciar sesión con Google</Text>
        </Button>
    );
};

export default GoogleLoginButton;