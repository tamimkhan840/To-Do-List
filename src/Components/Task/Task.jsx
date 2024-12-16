/* eslint-disable react/prop-types */
import TaskItem from "./TaskItem"


function Task({tasks, onEdit, onDelete}) {
    // console.log(tasks);

  return (
    <div>
        {
            tasks.map(task => <TaskItem onEdit={onEdit} onDelete={onDelete} key={task.id} task={task}/>)
        }
    {/* console.log(tasks.map(task => task.text)); */}
    </div>
  )
}

export default Task
