import { useReducer,} from "react"
import FormInput from "./Components/Form/FormInput"
import { initialTasks } from "./Components/Data/initialTasks"
import Task from "./Components/Task/Task";
import taskReducer from "./Components/Reducer/taskReducer";



function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);




  const handleAddTask = (text) => {
    dispatch({
      type: 'added',
      text: text
    });

  }
  const handleEditTask = (text) => {
    dispatch({
      type: 'edit',
      text: text
    });

  }

  const handleDeleteTask = (id) => {
    dispatch({
      type: 'deleted',
      id: id
    });
  }




  // console.log(tasks);


  return (
    <div className="w-10/12 mx-auto mb-3">
        <h1 className="text-4xl">Prague itinerary</h1>


        <FormInput addTask={handleAddTask}/>

        <Task onEdit={handleEditTask} onDelete={handleDeleteTask} tasks={tasks}/>
    </div>
  )
}

export default App
