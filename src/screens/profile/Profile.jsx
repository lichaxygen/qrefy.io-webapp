import { useState } from 'react';
import { Container,TabContainer,Tab,ContentContainer,Section,Division,FormGroup,FormField,Label,InputWrapper,Input,ButtonBox } from './ProfileStyle.js';
import ButtonCustom from '../../components/button/ButtonCustom.jsx';

function Profile() {
    const [activeTab, setActiveTab] = useState('personal');

    const [state, setState] = useState(
        { name: '', surname:'', companyName:'',email:'',oldPass:'',newPass:'',
        address:'',postal:'',city:'',country:''} );

    const [errors, setErrors] = useState({});

    const toggleTabClick = () => {
        setActiveTab(activeTab === 'personal' ? 'impositivos' : 'personal');
    };

    // Change inputs

    const handleChange= (event) => {
        const { name, value } = event.target;
        setState( {...state, [name]: value} );  
    };

    // Submit and botons

    const handleSubmitPersonal = (event) =>{
        event.preventDefault();
        const errors = {};
    };

    const handleSubmitChangePass = (event) =>{
        event.preventDefault();
        const errors = {};
    };

    const handleDeleteAccount = (event) =>{
        event.preventDefault();
        const errors = {};
    };
    
    const handleSubmitImpositivos = (event) => {
        event.preventDefault();
        const errors = {};
    };

    return (
        <Container>
            <h2>Perfil de usuario</h2>
            <TabContainer>
                <Tab $active={activeTab === 'personal'} onClick={toggleTabClick}>Datos personales</Tab>
                <Tab $active={activeTab === 'impositivos'} onClick={toggleTabClick}>Datos fiscales</Tab>
            </TabContainer>

            <ContentContainer>
                {activeTab === 'personal' && (
                    <>
                        <form onSubmit={handleSubmitPersonal}>
                            <FormGroup>
                                <FormField>
                                    <Label>Nombre:</Label>
                                    <InputWrapper>
                                        <Input type="text" name='name' value={state.name} onChange={e => handleChange(e)} />
                                    </InputWrapper>
                                    {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}    
                                </FormField>
                                <FormField>
                                    <Label>Apellido:</Label>
                                    <InputWrapper>
                                        <Input type="text" name='surname' value={state.surname} onChange={e => handleChange(e)}/>
                                    </InputWrapper>
                                </FormField>
                            </FormGroup>
                            <FormGroup>
                                <FormField>
                                    <Label>Razon social (opcional):</Label>
                                    <InputWrapper>
                                        <Input type="text" name='companyName' value={state.companyName} onChange={e => handleChange(e)}/>
                                    </InputWrapper>
                                </FormField>
                                <FormField>
                                    <Label>Correo electrónico:</Label>
                                    <InputWrapper>
                                        <Input type="email" name='email' value={state.email} onChange={e => handleChange(e)}/>
                                    </InputWrapper>    
                                </FormField>
                            </FormGroup>
                            <ButtonBox>
                                <ButtonCustom type="submit" title="Modificar" action={handleSubmitPersonal}/>
                            </ButtonBox> 
                        </form>  
                        <Division/> 
                        <form onSubmit={handleSubmitChangePass}> 
                            <h3>Cambiar contraseña</h3> 
                            <FormGroup>
                                <FormField>
                                    <Label>Contraseña actual:</Label>
                                    <InputWrapper>
                                        <Input type="password" name='oldPass' value={state.oldPass} onChange={e => handleChange(e)}/>
                                    </InputWrapper>    
                                </FormField>
                                <FormField>
                                    <Label>Nueva contraseña:</Label>
                                    <InputWrapper>
                                        <Input type="password" name='newPass' value={state.newPass} onChange={e => handleChange(e)}/>
                                    </InputWrapper>    
                                </FormField>
                            </FormGroup>
                            <ButtonBox>
                                <ButtonCustom type="submit" title="Cambiar" action={handleSubmitChangePass}/>
                            </ButtonBox> 
                        </form>
                        <Division/> 
                        <Section>
                            <h3>Eliminar Cuenta</h3>
                            <ButtonBox>
                                <ButtonCustom title="Eliminar" action={handleDeleteAccount}/>
                            </ButtonBox> 
                        </Section>       
                    </>
                )}

                {activeTab === 'impositivos' && (
                    <>
                        <form onSubmit={handleSubmitImpositivos}>
                            <FormField>
                                <Label>Dirección:</Label>
                                <InputWrapper>
                                    <Input type="text" name='address' value={state.address} onChange={e => handleChange(e)}/>
                                </InputWrapper>
                            </FormField>
                            <FormField>
                                <Label>Código postal:</Label>
                                <InputWrapper>
                                    <Input type="text" name='postal' value={state.postal} onChange={e => handleChange(e)}/>
                                </InputWrapper>
                            </FormField>
                            <FormField>
                                <Label>Ciudad:</Label>
                                <InputWrapper>
                                    <Input type="text" name='city' value={state.city} onChange={e => handleChange(e)}/>
                                </InputWrapper>    
                            </FormField>
                            <FormField>
                                <Label>Pais:</Label>
                                <InputWrapper>
                                    <Input type="text" name='country' value={state.country} onChange={e => handleChange(e)}/>
                                </InputWrapper>
                            </FormField>
                            <ButtonBox>
                                <ButtonCustom type="submit" title="Modificar" action={handleSubmitImpositivos}/>
                            </ButtonBox> 
                        </form>
                    </>
                
                )}
            </ContentContainer>
        </Container>
    )
}

export default Profile