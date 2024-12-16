/* eslint-disable react/prop-types */
import { useState } from "react"

function FormInput({addTask}) {
    const [text, setText] = useState('');



    const handleAddTask =(e) => {
        e.preventDefault();
        addTask(text)
        setText('')
    }

  return (
    <div>
        <form className="flex rounded">
            {/* <label htmlFor="text">Add TO card</label> */}
            <input type="text" value={text} onChange={(e) =>setText(e.target.value)} className="border p-2" placeholder="Add task"/>
            <button onClick={handleAddTask} className="bg-emerald-800 px-3 py-1">Add</button>
        </form>
    </div>
  )
}

export default FormInput
