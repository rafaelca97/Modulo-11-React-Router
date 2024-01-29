const checkCredentials = (email, password) => {
    const allowedEmail = 'usuario@gmail.com';
    const allowedPassword = 'contraseña';
    return email === allowedEmail && password === allowedPassword;
  };
  
  export default checkCredentials;
  