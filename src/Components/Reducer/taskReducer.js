

export default function taskReducer(tasks , action) {
    switch (action.type) {
        case 'added':{
            return[ ...tasks,
                {
                  id: crypto.randomUUID(),
                  text: action.text
                }
            ]
        }

        case 'edit':{
            return(
                 tasks.map(t => {
                if (t.id === action.text.id) {
                  return action.text;
                }else {
                  return t;
                }
              })
            )
        }

        case 'deleted':{
            return tasks.filter(deleted => deleted.id !== action.id)

        }
        default:{
            throw Error('Unknown action: ' + action.type);
          }
    }
}

//  const handleAddTask = (text) => {
//     setTasks([
//         ...tasks,
//         {
//           id: tasks.length + 1,
//           text: text
//         }]
//       )

//     }
//     const handleEditTask = (text) => {
//       setTasks(
//         tasks.map(t => {
//           if (t.id === text.id) {
//             return text;
//           }else {
//             return t;
//           }
//         })
//       );

//     }

//     const handleDeleteTask = (id) => {
//       setTasks(
//         tasks.filter(deleted => deleted.id !== id)
//       )
//       console.log(id);

//     }
