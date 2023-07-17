export const HOME = '/';
export const DASHBOARD = '/dashboard';
export const CREATEQR = '/generar-qr';
export const SETTINGS = '/ajustes';
export const BILLING = '/facturacion';
export const CONTACT = '/contacto';
export const APIDOCS = '/api-docs';
export const PUBLIC = '/public';
export const LOGIN = '/public/iniciosesion';
export const REGISTER = '/public/registro';
export const PRIVATE = '/private';
export const PROFILE = '/perfil'; // '/private/perfil'
export const PROFILEUPD = '/private/perfil/:id';
export const LOGOUT = '/private/cerrarsesion';

export const URLBASEAPIQR = 'http://localhost:3000/generate-qr';

export const AUTH_APP = 'AUTH_APP'; // variable de sesion
export const AUTH_USER = 'AUTH_USER'; // variable de sesion

export const CONFIGHEADER = {
    headers:{
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    }
  };
