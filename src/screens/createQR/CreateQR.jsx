import { useState } from 'react';
import axios from 'axios';
import { PopoverPicker } from '../../components/PopoverPicker/PopoverPicker';
import { Container,Columns,FormGroup,FormField,Label,InputWrapper,Input,ColorPickerForm,ErrorMessage,ButtonBox, Response, ImgBox } from './CreateQRStyle.js';
import ButtonCustom from '../../components/button/ButtonCustom';
import { URLBASEAPIQR, CONFIGHEADER } from '../../config/paths.js';

function CreateQR() {
    const [URL, setURL] = useState('');
    const [size, setSize] = useState('');
    const [margin, setMargin] = useState(''); 
    const [scale, setScale] = useState('');
    const [colorQR, setColorQR] = useState('#000000');
    const [colorQRbg, setColorQRbg] = useState('#ffffff');
    const [errors, setErrors] = useState({});
    const [qrCodeImage, setQrCodeImage] = useState('');

    const handleURLChange = (event) =>{
        setURL(event.target.value);
    };
    const handleSizeChange = (event) =>{
        setSize(event.target.value);
    };
    const handleMarginChange = (event) =>{
        setMargin(event.target.value);
    }; 
    const handleScaleChange = (event) =>{
        setScale(event.target.value);
    }; 
    const handleColorQRChange = (newColor) => {
        setColorQR(newColor);
      };
    
    const handleInputColorQRChange = (event) => {
        setColorQR(event.target.value);
    };
    const handleColorQRbgChange = (newColor) => {
        setColorQRbg(newColor);
      };
    
    const handleInputColorQRbgChange = (event) => {
        setColorQRbg(event.target.value);
    };

    const arrayBufferToBase64 = (buffer) => {
        let binary = '';
        const bytes = new Uint8Array(buffer);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    };

    const generateQRCode = async () => {
        const format = 'png';
        try {
            const response = await axios.get(URLBASEAPIQR, {
                params: {
                    url: URL,
                    format: format,
                    size: size, 
                    colorDark: colorQR, 
                    colorLight: colorQRbg, 
                    margin: margin, 
                    scale: scale, 
                },
                CONFIGHEADER,
                responseType: 'arraybuffer', // Especifica que la respuesta debe ser un array de bytes
            });

            /* const qrCodeBlob = new Blob([response.data], { type: 'image/png' });
            const qrCodeImageUrl = URL.createObjectURL(qrCodeBlob); */
            const qrCodeData = arrayBufferToBase64(response.data);
            const qrCodeImageUrl = `data:image/${format};base64,${qrCodeData}`;
            setQrCodeImage(qrCodeImageUrl);
        } catch (error) {
            console.error('Error al generar el código QR:', error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = {};
        const reg=/^#([0-9a-f]{3}){1,2}$/i;

        if (!URL) {
            errors.URL = 'La URL es obligatoria.';
        }
        if (!reg.test(colorQRbg)){
            errors.ColorQR = 'El código de color QR no es válido.'
        }
        if(!reg.test(colorQRbg)){   
            errors.ColorQRbg = 'El código de color de fondo no es válido.'
        }

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            // Aquí puedes realizar la lógica de envío del formulario
            console.log({URL,size,margin,scale,colorQR,colorQRbg});

            generateQRCode();

            // Luego puedes reiniciar los campos del formulario
            /* setURL('');
            setSize('');
            setMargin(''); 
            setScale('');
            setColorQR('#000000');
            setColorQRbg('#ffffff'); */
        }

    }
    const handleCancel = () => {
        // Aquí puedes manejar la lógica de cancelar el formulario
        // Reiniciando los campos, mostrando una alerta, redirigiendo, etc.
        setURL('');
        setSize('');
        setMargin(''); 
        setScale('');
        setColorQR('#000000');
        setColorQRbg('#ffffff');
        setErrors({});
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        const filename = qrCodeImage.split('/').pop();
        if (!qrCodeImage) return;
        link.href = qrCodeImage;
        link.download = filename;
        link.click();
    }
    const handleDiscard = () => {
        setQrCodeImage('');
    }
    return (
        <Container>
            <h2>Generar código QR</h2>
            <Columns >
                <form onSubmit={handleSubmit}>

                    <FormField>
                        <Label>URL de la página web *</Label>
                        <InputWrapper>
                            <Input
                                type="text"
                                value={URL} 
                                onChange={handleURLChange}
                                placeholder='Ej: http://www.mipagina.com'
                                required
                            />
                        </InputWrapper>
                        {errors.URL && <ErrorMessage>{errors.URL}</ErrorMessage>}
                    </FormField>
                    <FormField>
                        <Label>Color del código QR</Label>
                        <InputWrapper>
                            <ColorPickerForm>
                                <Input
                                    type="text"
                                    value={colorQR}
                                    onChange={handleInputColorQRChange}
                                />
                                <PopoverPicker color={colorQR} onChange={handleColorQRChange} />
                            </ColorPickerForm>
                        </InputWrapper>
                        {errors.ColorQR && <ErrorMessage>{errors.ColorQR}</ErrorMessage>}
                    </FormField>
                    <FormField>
                        <Label>Color de fondo del código QR</Label>
                        <InputWrapper>
                            <ColorPickerForm>
                                <Input
                                    type="text"
                                    value={colorQRbg}
                                    onChange={handleInputColorQRbgChange}
                                />
                                <PopoverPicker color={colorQRbg} onChange={handleColorQRbgChange} />
                            </ColorPickerForm>
                        </InputWrapper>
                        {errors.ColorQRbg && <ErrorMessage>{errors.ColorQRbg}</ErrorMessage>}
                    </FormField>
                    <FormField>
                        <Label>Tamaño</Label>
                        <InputWrapper>
                            <Input
                                type="number"
                                min="1" 
                                value={size} 
                                onChange={handleSizeChange}
                                placeholder='Tamaño por defecto 30px'
                            />
                        </InputWrapper>
                    </FormField>
                    <FormField>
                        <Label>Margen</Label>
                        <InputWrapper>
                            <Input
                                type="number"
                                min="0" 
                                value={margin} 
                                onChange={handleMarginChange}
                                placeholder='Margen por defecto 4px'
                            />
                        </InputWrapper>
                    </FormField>
                    <FormField>
                        <Label>Escala</Label>
                        <InputWrapper>
                            <Input
                                type="number"
                                min="1" 
                                value={scale} 
                                onChange={handleScaleChange}
                                placeholder='Escala por defecto 4'
                            />
                        </InputWrapper>
                    </FormField>
                    
                    <ButtonBox>
                        <ButtonCustom type="submit" title="Generar QR" action={handleSubmit}/>
                        <ButtonCustom title="Cancelar" action={handleCancel}/>
                    </ButtonBox>
                </form>
                <Response>
                    <ImgBox>
                        <img src={qrCodeImage} alt="Código QR" />
                    </ImgBox>
                    <ButtonBox>
                        <ButtonCustom title="Descargar" action={handleDownload}/>
                        <ButtonCustom title="Descartar" action={handleDiscard}/>
                    </ButtonBox>

                </Response> 
            </Columns>
        </Container>
    )
}

export default CreateQR