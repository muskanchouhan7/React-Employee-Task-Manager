import { useContext } from 'react';
import styles from './AllTask.module.css';
import { AuthContext } from '../../context/AuthProvider'
function AllTask() {
    const [userData] = useContext(AuthContext)
    // console.log(authData.employees)
    return (
        <div className={styles.AllTaskContainer}>
        <table className={styles.TaskTable}>
            <thead>
                <tr>
                    <th>Employee Name</th>
                    <th>New Task</th>
                    <th>Active Task</th>
                    <th>Completed</th>
                    <th>Failed</th>
                </tr>
            </thead>
            <tbody>
                {/* userData.map - Iterates over the array of employees (userData) to generate a table row (<tr>) for each employee */}
                {userData.map((elem, idx) => (  
                    // elem - The current employee object being iterated over and idx: The index of the current iteration in the array.Example: For the first iteration, idx = 0.
                    <tr key={idx}>
                        <td>{elem.firstname}</td>
                        <td>{elem.taskCounts.newTask}</td>
                        <td>{elem.taskCounts.active}</td>
                        <td>{elem.taskCounts.completed}</td>
                        <td>{elem.taskCounts.failed}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );}
export default AllTask