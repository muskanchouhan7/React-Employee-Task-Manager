import AllTask from "../Other/AllTask";
import Header from "../Other/Header";
import CreateTask from "../Other/CreateTask";

function AdminDashboard(props) {
    return (
        <div>
            <Header changeUser={props.changeUser} />
            <CreateTask/>
            <AllTask/>
        </div>
    );}
export default AdminDashboard;
