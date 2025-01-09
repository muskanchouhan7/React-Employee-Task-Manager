import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import styles from './CreateTask.module.css';
import EmployeeImage from "../../assets/Employee-Management.png";

// Collects task details from the admin using a form.
// Matches the assigned employee by name (assignTo).
// Updates the employee’s task list and task counts.
// Saves the updated data to the global state and localStorage.

function CreateTask() {
    const [userData, updateUserData] = useContext(AuthContext); // Retrieve userData and updateUserData from context

    // These variables store the admin’s input for the task
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new task object
    const newTask = {
        taskTitle,
        taskDescription,
        taskDate,
        category,
        active: false, // Initially inactive
        newTask: true, // Mark as a new task
        failed: false,
        completed: false,
    };

    // Update the employee data
    const updatedData = userData.map((employee) => {
        if (employee.firstname === assignTo) { // Match employee by name
            return {
                ...employee,
                tasks: [...employee.tasks, newTask], // Add the new task
                taskCounts: {
                    ...employee.taskCounts,
                    newTask: employee.taskCounts.newTask + 1, // Increment new task count
                },
            };
        }
        return employee; // Keep other employees unchanged
    });

    updateUserData(updatedData); // Save the updated data to context and localStorage

    // Clear form fields
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
};


    return (
        <div className={styles.DashboardContainer}>
            <form onSubmit={handleSubmit}>
                <h3>Task Title</h3>
                <input
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)} //e.target.value gets the current value of the input field.
                    //setTaskTitle(e.target.value) updates the taskTitle state with the latest value
                    type="text"
                    placeholder="Create a UI..."
                />
                <h3>Description</h3>
                <textarea
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    placeholder="Describe the task..."
                    cols="30"
                    rows="10"
                ></textarea>
                <h3>Date</h3>
                <input
                    value={taskDate}
                    onChange={(e) => setTaskDate(e.target.value)}
                    type="date"
                />
                <h3>Assign to</h3>
                <input
                    value={assignTo}
                    onChange={(e) => setAssignTo(e.target.value)}
                    type="text"
                    placeholder="Employee name..."
                />
                <h3>Category</h3>
                <input
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    type="text"
                    placeholder="Development, Design..."
                />
                <button>Create Task</button>
            </form>
            <img src={EmployeeImage} alt="Employee-Image" className={styles.ResponsiveImage}/>
        </div>
    );
}

export default CreateTask;
