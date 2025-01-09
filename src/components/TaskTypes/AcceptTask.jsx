import styles from './TaskList.module.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function AcceptTask({ data, employeeId }) {
    const [userData, setUserData] = useContext(AuthContext);

    const handleComplete = () => {
        const updatedData = userData.map((employee) => {
            if (employee.id === employeeId) {
                const updatedTasks = employee.tasks.map((task) => {
                    if (task.taskTitle === data.taskTitle) {
                        return { ...task, completed: true, active: false };
                    }
                    
                    return task;
                });
                return {
                    ...employee,
                    tasks: updatedTasks,
                    taskCounts: {
                        ...employee.taskCounts,
                        active: employee.taskCounts.active - 1,
                        completed: employee.taskCounts.completed + 1,
                    },
                    
                };
            }
            return employee;
        });
        setUserData(updatedData);
        
    };

    const handleFail = () => {
        const updatedData = userData.map((employee) => {
            if (employee.id === employeeId) {
                const updatedTasks = employee.tasks.map((task) => {
                    if (task.taskTitle === data.taskTitle) {
                        return { ...task, failed: true, active: false };
                    }
                    return task;
                });
                return {
                    ...employee,
                    tasks: updatedTasks,
                    taskCounts: {
                        ...employee.taskCounts,
                        active: employee.taskCounts.active - 1,
                        failed: employee.taskCounts.failed + 1,
                    },
                };
            }
            return employee;
        });
        setUserData(updatedData);
    };

    return (
        <div className={styles.TaskList}>
            <div className={styles.TaskInfoContainer}>
                <h3>{data.category}</h3>
                <h4>📆 Deadline: {data.taskDate}</h4>
            </div>
            <h2>{data.taskTitle}</h2>
            <p>{data.taskDescription}</p>
            <div className={styles.btnsContainer}>

                <button onClick={handleComplete} className={styles.completeBtn}>Mark as Completed
                </button>
                <button onClick={handleFail} className={styles.failedBtn}>Mark as Failed</button>

            </div>
        </div>
    );
}
export default AcceptTask;


