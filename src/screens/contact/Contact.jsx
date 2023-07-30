import { useState, useEffect } from 'react';
import {Container,FormGroup,FormField,Label,InputWrapper,Select,Input,TextArea,FileInput,FileInputLabel,FileNameList,FileNameItem,FileName,RemoveButton,ErrorMessage, ButtonBox} from "./ContactStyle.js";
import ButtonCustom from '../../components/button/ButtonCustom.jsx';

function Contact() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [reason, setReason] = useState('');
    const [subject, setSubject] = useState('');
    const [comment, setComment] = useState('');
    const [file, setFile] = useState(null);
    const [fileList, setFileList] = useState([]);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        // Limpiar el listener del evento al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleReasonChange = (event) => {
        setReason(event.target.value);
    };

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
        setFileList([...fileList, ...selectedFiles]);
    };

    const handleRemoveFile = (fileIndex) => {
        setFileList(fileList.filter((_, index) => index !== fileIndex));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = {};

        if (!reason) {
            errors.reason = 'El motivo es obligatorio';
        }

        if (!subject) {
            errors.subject = 'El asunto es obligatorio';
        }

        if (!comment) {
            errors.comment = 'El mensaje es obligatorio';
        }

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            // Aquí puedes realizar la lógica de envío del formulario
            console.log({reason,subject,comment,fileList});
            // Luego puedes reiniciar los campos del formulario
            setReason('');
            setSubject('');
            setComment('');
            setFileList([]);
        }
    };

    const handleCancel = () => {
        // Aquí puedes manejar la lógica de cancelar el formulario
        // Reiniciando los campos, mostrando una alerta, redirigiendo, etc.
        setReason('');
        setSubject('');
        setComment('');
        setFileList([]);
        setErrors({});
    };

    return (
    <Container>
        <h2>{windowWidth < 768 ? 'Contactanos!':'¿Como podemos ayudarte?'}</h2>
        <form onSubmit={handleSubmit}>
            <FormGroup>    
                <FormField>
                    <Label>Motivo *</Label>
                    <InputWrapper>
                        <Select value={reason} onChange={handleReasonChange} required>
                            <option value="">Seleccione un motivo</option>
                            <option value="comentario">Comentarios o sugerencias</option>
                            <option value="facturacion">Facturación</option>
                            <option value="error">Problemas técnicos</option>
                            <option value="otros">Otros</option>
                        </Select>
                    </InputWrapper>
                    {errors.reason && <ErrorMessage>{errors.reason}</ErrorMessage>}
                </FormField>
                <FormField>
                    <Label>Asunto *</Label>
                    <InputWrapper>
                        <Input
                            type="text"
                            value={subject}
                            onChange={handleSubjectChange}
                            required
                        />
                    </InputWrapper>
                    {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
                </FormField>
            </FormGroup>    
            <FormField>
                <Label>Mensaje</Label>
                <TextArea value={comment} onChange={handleCommentChange} />
                {errors.comment && <ErrorMessage>{errors.comment}</ErrorMessage>}
            </FormField>
            <FormField>
                <FileInput
                type="file"
                id="file"
                onChange={handleFileChange}
                multiple
                />
                <FileInputLabel htmlFor="file">Adjuntar archivo</FileInputLabel>
                {fileList.length > 0 && (
                    <FileNameList>
                        {fileList.map((file, index) => (
                        <FileNameItem key={index}>
                            <FileName>{file.name}</FileName>
                            <RemoveButton onClick={() => handleRemoveFile(index)}>
                            Eliminar
                            </RemoveButton>
                        </FileNameItem>
                        ))}
                    </FileNameList>
                )}
            </FormField>
            <ButtonBox>
                <ButtonCustom type="submit" title="Enviar" action={handleSubmit}/>
                <ButtonCustom title="Cancelar" action={handleCancel}/>
            </ButtonBox>
        </form>
    </Container>
    );
};

export default Contact