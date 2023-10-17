import './App.css';
import { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast';

function App() {

  const [task, addTask] = useState('')
  const [lists, addToList] = useState([])
  const [comlete_list, addToComplete] = useState([])
  const [drop_list, addToDrop] = useState([])

  return (

    <div className="App">

      <Toaster toastOptions={{ duration: 1000 }} />

      <section id='input' >

        <div id="input-box">

          <input value={task} onChange={(event) => { addTask(event.target.value) }} type="text" name="" id="" placeholder='Enter the task' />
          <i onClick={() => {

            const date = new Date();
            const options = {

              day: 'numeric',
              month: 'numeric',
              year: 'numeric',
              weekday: 'long',

            };

            addToList([...lists, { id: Date.now(), text: task, status: null, date: date.toLocaleString('en-IN', options) }])
            toast.success("Task added")

          }

          } class='bx bx-plus'></i>
          {/* {console.log(lists)} */}

        </div>

      </section>
      <section id='three-categories' >

        <div className="categories-1">

          <section className="heading"><p>Dropped</p></section>
          <section className="tasks">

            {

              drop_list.map((each_task) => {

                return (

                  <div className="task">

                    <div id='texts' >

                      <p> {each_task.text} </p>
                      <p> {each_task.date} </p>

                    </div>
                    <i onClick={() => {

                      addToDrop(drop_list.filter(deleting => {

                        if (deleting.id === each_task.id) deleting = null
                        return deleting

                      }))

                    }} class='bx bxs-trash'></i>

                  </div>

                )

              })

            }

          </section>

        </div>
        <div className="categories-2">

          <section className="heading"><p>Proceeding</p></section>
          <section className="tasks">

            {

              lists.map((each_task) => {

                return (

                  <div className="task">

                    <input onChange={(event) => {

                      const date = new Date();
                      const options = {

                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric',
                        weekday: 'long',

                      };

                      addToList(lists.filter(selected => {

                        if (selected.id === each_task.id) {

                          selected.status = event.target.checked
                          selected.date = date.toLocaleString('en-IN', options)
                          addToComplete([...comlete_list, selected])
                          selected = null

                        }
                        return selected

                      }))

                    }} type="checkbox" name="" id="" />
                    <div id='texts' >

                      <p> {each_task.text} </p>
                      <p> {each_task.date} </p>

                    </div>
                    <i onClick={() => {

                      const date = new Date();
                      const options = {

                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric',
                        weekday: 'long',

                      };

                      addToList(lists.filter(selected => {

                        if (selected.id === each_task.id) {

                          selected.status = false
                          selected.date = date.toLocaleString('en-IN', options)
                          addToDrop([...drop_list, selected])
                          selected = null

                        }
                        return selected

                      }))

                    }} class='bx bx-x'></i>

                  </div>

                )

              })

            }

          </section>

        </div>
        <div className="categories-3">

          <section className="heading"><p>Completed</p></section>
          <section className="tasks">

            {

              comlete_list.map((each_task) => {

                return (

                  <div className="task">

                    <div id='texts' >

                      <p> {each_task.text} </p>
                      <p> {each_task.date} </p>

                    </div>
                    <i onClick={() => {

                      addToComplete(comlete_list.filter(deleting => {

                        if (deleting.id === each_task.id) deleting = null
                        return deleting

                      }))

                    }} class='bx bxs-trash'></i>

                  </div>

                )


              })

            }

          </section>

        </div>

      </section>

    </div>

  );

}

export default App;
