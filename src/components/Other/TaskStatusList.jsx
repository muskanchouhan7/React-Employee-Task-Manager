import styles from "./TaskStatusList.module.css";
import NewTaskIcon from "../../assets/notification.png";
import AcceptTaskIcon from "../../assets/taskaccepticon.png";
import CompleteTaskIcon from "../../assets/check.png";
import FailedTaskIcon from "../../assets/task.png";

const TaskStatusList = ({ data }) => (
    <div className={styles.TasksContainer}>
        <div className={styles.NewTask}>
            <div>
                <h2>{data.taskCounts.newTask}</h2>
                <h3>New Task</h3>
            </div>
            <div>
                <img src={NewTaskIcon} alt="New-Task-Icon" className={styles.NewTaskIcon} />
            </div>
        </div>
        <div className={styles.ActiveTask}>
            <div>
                <h2>{data.taskCounts.active}</h2>
                <h3>Accepted Task</h3>
            </div>
            <div>
                <img src={AcceptTaskIcon} alt="Accept-Task-Icon" className={styles.AcceptTaskIcon} />
            </div>
        </div>
        <div className={styles.CompletedTask}>
            <div>
                <h2>{data.taskCounts.completed}</h2>
                <h3>Completed Task</h3>
            </div>
            <div>
                <img src={CompleteTaskIcon} alt="New-Task-Icon" className={styles.CompleteTaskIcon} />
            </div>
        </div>
        <div className={styles.FailedTask}>
            <div>
                <h2>{data.taskCounts.failed}</h2>
                <h3>Failed Task</h3>
            </div>
            <div>
                <img src={FailedTaskIcon} alt="Failed-Task-Icon" className={styles.FailedTaskIcon} />
            </div>
        </div>
    </div>
);
export default TaskStatusList