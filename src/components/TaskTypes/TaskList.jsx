import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import styles from './TaskList.module.css';

function TaskList({ data }) {
    return (
        <div className={styles.TaskListContainer}>
            {/* New Tasks */}
            {data.tasks.filter((task) => task.newTask).map((task, idx) => (
                <NewTask key={idx} data={task} employeeId={data.id} />
            ))}

            {/* Active Tasks */}
            {data.tasks.filter((task) => task.active).map((task, idx) => (
                <AcceptTask key={idx} data={task} employeeId={data.id} />
            ))}

            {/* Completed Tasks */}
            {data.tasks.filter((task) => task.completed).map((task, idx) => (
                <div
                    key={idx}
                    className={`${styles.TaskList} ${styles.CompletedTask}`}
                >
                    <div className={styles.TaskInfoContainer}>
                        <h3>{task.category}</h3>
                        <h4>{task.taskDate}</h4>
                    </div>
                    <h2>{task.taskTitle}</h2>
                    <p>{task.taskDescription}</p>
                    <p className={styles.taskCompleted}>"Yay! You completed this task ✅"</p>
                </div>
            ))}

            {/* Failed Tasks */}
            {data.tasks.filter((task) => task.failed).map((task, idx) => (
                <div
                    key={idx}
                    className={`${styles.TaskList} ${styles.FailedTask}`}
                >
                    <div className={styles.TaskInfoContainer}>
                        <h3>{task.category}</h3>
                        <h4>{task.taskDate}</h4>
                    </div>
                    <h2>{task.taskTitle}</h2>
                    <p>{task.taskDescription}</p>
                    <p className={styles.taskFailed}>"Oops! You failed this task 👎"</p>
                </div>
            ))}
        </div>
    );
}

export default TaskList;
