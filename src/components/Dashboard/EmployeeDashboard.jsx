import React, { useContext } from "react";
import Header from "../Other/Header";
import TaskStatusList from "../Other/TaskStatusList";
import TaskList from "../TaskTypes/TaskList";
import { AuthContext } from "../../context/AuthProvider"; 

function EmployeeDashboard(props) {

    const styles = {
        height: "100vh" 
    }
    const [userData] = useContext(AuthContext); 

    // Finding the Logged-In Employee in userData
    const employeeData = userData?.find(
        (employee) => employee.email === props.data.email);  //props.data.email - Contains the email address of the logged-in employee. Passed from App.jsx to EmployeeDashboard.jsx
        // console.log(employeeData) - contains details of Logged-In Employee 
    return (
        <div style={styles}>
            <Header changeUser={props.changeUser} data={props.data} />
            {employeeData && ( //{employeeData && ...} - Ensures that the components (TaskStatusList and TaskList) are only rendered if employeeData exists
                <>
                    <TaskStatusList data={employeeData} />
                    <TaskList data={employeeData} />
                </>
            )}
        </div>
    );
}
export default EmployeeDashboard;
