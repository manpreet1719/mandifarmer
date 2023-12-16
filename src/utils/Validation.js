export const validateEmail = (email) => {
    // Simple email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


export const validatePassword = (password) => {
    // Check if password length is at least 6 characters
    return password.length >= 6;
  };


  export const isTokenPresent = () => {
    const token = localStorage.getItem('token');
    return token !== null && token !== undefined;
  };
