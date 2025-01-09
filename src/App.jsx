import React, { useContext, useState, useEffect } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';
import './index.css';

function App() {
    const [user, setUser] = useState(null); // State to store the user type / user -  Tracks the role of the logged-in user (null, 'admin', or 'employee').
    const [loggedInUserData, setLoggedInUserData] = useState(null); // Stores the details of the currently logged-in employee. Only relevant for employees (not admin).
    const [userData] = useContext(AuthContext); // Comes from the AuthContext and contains the list of all employees.

    // When the app loads, this ensures the app checks localStorage to see if a user is already logged in
    useEffect(() => {
        const loggedInUser = localStorage.getItem('loggedInUser'); // retrieve loggedInUser from localStorage
        if (loggedInUser) {
            const userData = JSON.parse(loggedInUser);
            // console.log("this is userData", userData) - Prints object of currently loggedin user
            // Update user (role) and loggedInUserData (user details) based on the parsed data
            setUser(userData.role);  
            setLoggedInUserData(userData.data);

            // console.log(userData.role) - role- (employee or admin)
            // console.log(userData.data) - data of that logged in employee
        }
    }, []);

    const handleLogin = (email, password) => {  
        if (email === 'admin@me.com' && password === '123') {
            setUser('admin'); // Set the role to 'admin'
            localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
        } else if (userData) { // Searches the userData array for a matching email and password
            const employee = userData.find(
                (e) => email === e.email && password === e.password
            );
            if (employee) {
                setUser('employee');
                setLoggedInUserData(employee);
                localStorage.setItem(
                    'loggedInUser',
                    JSON.stringify({ role: 'employee', data: employee })
                );

            } else {
                alert('INVALID CREDENTIALS!'); // Show error if credentials are invalid
            }
        } else {
            alert('INVALID CREDENTIALS!'); // Show error if no employee data is available
        }
    };

    return (
        <>
            {/* Render Login form if no user is logged in */}
            {!user ? <Login loginHandling={handleLogin} /> : null}   {/* loginHandling is name used to pass handleLogin()function as a prop to Login.jsx */}

            {/* Render the respective dashboard based on the user type */}
            {user === 'admin' ? (
                <AdminDashboard changeUser={setUser} data={{ role: 'admin' }} /> //Renders the AdminDashboard with: •changeUser- A function to log out the user •data: Admin role information.
            ) : (
                user === 'employee' && (
                    <EmployeeDashboard
                        changeUser={setUser}
                        data={loggedInUserData}  //data- Logged-in employee details
                    />
                )
            )}
        </>
    );
}

export default App;
