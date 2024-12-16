/* eslint-disable react/prop-types */
import { useState } from "react"


function TaskItem({task, onEdit, onDelete}) {
  // console.log(task.id);



    const [isEdit, setIsEdit] = useState(false);
    const [text, setText] =useState(task.text)

    let onEditContact;

    const handleEdit = () => {
      onEdit({
        ...task,
        text: text
      }
      )
      setIsEdit(false)
    }

    if (isEdit) {
        onEditContact= (<>
            <input type="text" onChange={(e) => setText(e.target.value)} value={text} className="border p-2"/>
              <button onClick={handleEdit} className="px-3 py-1 rounded-md bg-green-700 mx-2">Save</button>

        </>)
    }else {
        onEditContact =(
        <>

            <p>{task.text}</p>
            <button onClick={() => setIsEdit(true)} className="px-3 py-1 rounded-md bg-green-700 mx-2">Edit</button>
        </>
        )
    }

  return (
    <ul className="mt-4">
          <li className="flex">
              <p>#</p>
                {onEditContact}
              <button onClick={() => onDelete(task.id)} className="px-3 py-1 rounded-md bg-red-700">Delete</button>

          </li>
        </ul>
  )
}

export default TaskItem
