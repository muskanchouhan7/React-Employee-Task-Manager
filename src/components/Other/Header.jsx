import styles from './Header.module.css';
import React from 'react';

// When the "LOG OUT" button is clicked: The logOut function calls changeUser('') , This triggers the setUser function in App.jsx, setting the user state to null , Once user becomes null, the app re-renders, and the login screen (<Login />) is displayed - {!user ? <Login loginHandling={handleLogin} /> : null}
function Header({ data, changeUser }) {
    const logOut = () => {
        localStorage.setItem('loggedInUser', ''); // Clear logged-in user data from localStorage
        changeUser(''); // Reset the `user` state in App.jsx to null
    };

    
    //  data?.firstname - •Checks if the data object has a firstname property •This property exists for employees, so their first name is displayed.
    //(data?.role === 'admin' ? 'Admin' : 'Admin') - •If the firstname is missing (as for admin users), it checks if the role is 'admin'  •If the role is 'admin', it returns "Admin"  •This fallback ensures "Admin" is displayed if the user is an admin
    const userName = data?.firstname || (data?.role === 'admin' ? 'Admin' : 'Admin');

    return (
        <div className={styles.HeaderContainer}>
            <h1 className={styles.userNameDisplay}>
                Howdy! {userName}
                <span

                // inline event handlers - onMouseOver and onMouseOut
                    onMouseOver={(e) => {
                        e.target.innerHTML = `
                            <picture>
                                <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp" type="image/webp">
                                <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif" alt="👋" width="34" height="34">
                            </picture>`;
                    }}
                    onMouseOut={(e) => {
                        e.target.innerHTML = "👋";
                    }}
                >
                    {' '}
                    👋
                </span>
            </h1>
            <button onClick={logOut}>LOG OUT</button>
        </div>
    );}
export default Header;
