import styles from './TaskList.module.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function NewTask({ data, employeeId }) {
    // Retrieve userData and updateUserData from context
    const [userData, updateUserData] = useContext(AuthContext); 
    const [isAccepted, setIsAccepted] = useState(data.accepted || false); // Check if task is already accepted
    const [showPopup, setShowPopup] = useState(false);

    // Handle Accept Task
    const handleAccept = () => {
        const updatedData = userData.map((employee) => {
            if (employee.id === employeeId) {
                return {
                    ...employee,
                    tasks: employee.tasks.map((task) => {
                        if (task.taskTitle === data.taskTitle) {
                            return { ...task, active: true, newTask: false, accepted: true }; // Update task state
                        }
                        return task;
                    }),
                    taskCounts: {
                        ...employee.taskCounts,
                        newTask: employee.taskCounts.newTask - 1,
                        active: employee.taskCounts.active + 1,
                    },
                };
            }
            return employee;
        });

        updateUserData(updatedData); // Persist updated data to context and localStorage
        setIsAccepted(true); // Set the task as accepted
        setShowPopup(false); // Close popup
    };

    // Handle Mark as Completed
    const handleComplete = () => {
        const updatedData = userData.map((employee) => {
            if (employee.id === employeeId) {
                return {
                    ...employee,
                    tasks: employee.tasks.map((task) => {
                        if (task.taskTitle === data.taskTitle) {
                            return { ...task, completed: true, active: false }; // Mark task as completed
                        }
                        return task;
                    }),
                    taskCounts: {
                        ...employee.taskCounts,
                        active: employee.taskCounts.active - 1,
                        completed: employee.taskCounts.completed + 1,
                    },
                };
            }
           
            return employee;
        });

        updateUserData(updatedData); // Persist updated data to context and localStorage
    };

    // Handle Mark as Failed
    const handleFail = () => {
        const updatedData = userData.map((employee) => {
            if (employee.id === employeeId) {
                return {
                    ...employee,
                    tasks: employee.tasks.map((task) => {
                        if (task.taskTitle === data.taskTitle) {
                            return { ...task, failed: true, active: false }; // Mark task as failed
                        }
                        return task;
                    }),
                    taskCounts: {
                        ...employee.taskCounts,
                        active: employee.taskCounts.active - 1,
                        failed: employee.taskCounts.failed + 1,
                    },
                };
            }
            return employee;
        });

        updateUserData(updatedData); // Persist updated data to context and localStorage
    };

    return (
        <>
            <div className={styles.TaskList}>
                <div className={styles.TaskInfoContainer}>
                    <h3>{data.category}</h3>
                    <h4>📆 Deadline: {data.taskDate}</h4>
                </div>
                <h2>{data.taskTitle}</h2>
                <p>{data.taskDescription}</p>
                <div>
                    {!isAccepted && data.newTask && (
                        <button className={styles.acceptTaskBtn} onClick={() => setShowPopup(true)}>Accept Task</button>
                    )}
                    {isAccepted && (
                        <>
                            <button onClick={handleComplete} className={styles.completeBtn}>Mark as Completed</button>
                            <button onClick={handleFail} className={styles.failedBtn}>Mark as Failed</button>
                        </>
                    )}
                </div>
            </div>

            {showPopup && (
                <div className={styles.Popup}>
                    <div className={styles.PopupContent}>
                        <h3>Are you sure you want to accept this task?</h3>
                        <button onClick={handleAccept}>Yes</button>
                        <button onClick={() => setShowPopup(false)}>No</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default NewTask;
