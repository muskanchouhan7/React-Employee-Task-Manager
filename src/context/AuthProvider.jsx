// This component is used to pass data to multiple components and THIS IS OUR PROVIDER COMPONENT, WHICH HAS DATA THAT IS NEEDED BY MULTIPLE COMPONENT

import { createContext, useState, useEffect } from "react";  // 1st Step of PROVIDER COMPONENT (importing createContext hook)
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext(); // 2nd Step, we need to create some context(AuthContext) and export it

function AuthProvider({ children }) {

    const [userData, setUserData] = useState([]); //userData- Stores the list of employees (and their tasks)

    useEffect(() => {
        setLocalStorage(); // Initialize default data in localStorage
        const { employees } = getLocalStorage(); // Load data from localStorage -- FIRST, GETTING employees DATA THAT WAS RETURNED FROM getLocalStorage() FUNCTION IN localStorage COMPONENT
        setUserData(employees);  // SECOND, SETTING THE DATA TO STATEFUL VARIABLE - userData (Updates the component state with the retrieved data.)
 
    }, []);
    
    const updateUserData = (updatedData) => { //This function receives updatedData as input. This code adds any new task created by the admin to the localStorage, ensuring that the data persists even after the page reloads
        setUserData(updatedData); 
        localStorage.setItem("employees", JSON.stringify(updatedData)); 
    };

    return (
//        {/* 3rd Step, wrap any children component within the special provider component */}
//        {/* THIRD, PASSING userData AS VALUE (value={userData}), SO THAT EVERY COMPONENT CAN ACEESS IT */}
        <AuthContext.Provider value={[userData, updateUserData]}>  {/* Components can use updateUserData function(also the userData) to modify the employee/task data and ensure it persists */}
            {children}
        </AuthContext.Provider>

//  {/* The {children} prop here refers to any JSX or components that are nested inside AuthProvider when its used. For example, in your main.jsx: 
//                 <AuthProvider>
//                     <App />
//                 </AuthProvider>
// ●children in this case is <App />. ●The AuthProvider wraps the App component, so React automatically passes <App /> to the children prop of AuthProvider. */}

    );
}
export default AuthProvider;
// We have to wrap this context or data needed by entire application - GO TO main.jsx for that.
// Purpose: To provide a central data source accessible to multiple components via the AuthContext.

