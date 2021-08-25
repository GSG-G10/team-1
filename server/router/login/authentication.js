
const createCookie = (username, email) =>{
    
    const userInformation = {
        username: username,
        email: email,
        logged_in: true,
        accessPrivileges: {
          user: true,
          admin: false
        }
      };
    const cookieValue = JSON.stringify(userInformation);
    return cookieValue;
}

module.exports = createCookie;

