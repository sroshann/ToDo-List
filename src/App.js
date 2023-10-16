import './App.css';
import { useState } from 'react'

function App() {

  const [ task , addTask ] = useState( '' )
  const [ lists , addToList ] = useState( [] )

  return (

    <div className="App">

      <section id='input' >

        <div id="input-box">

          <input value={ task } onChange={ ( event ) => { addTask( event.target.value ) } } type="text" name="" id="" placeholder='Enter the task' />
          <i class='bx bx-plus'></i>

        </div>

      </section>
      <section id='three-categories' >

        <div className="categories-1">

          <section className="heading"><p>Dropped</p></section>
          <section className="tasks">

            <div className="task">

              <input type="checkbox" name="" id="" />
              <input type="text" name="" id="" readOnly />
              <i class='bx bx-x'></i>

            </div>

          </section>

        </div>
        <div className="categories-2">

          <section className="heading"><p>Proceeding</p></section>
          <section className="tasks">

            <div className="task">

              <input type="checkbox" name="" id="" />
              <input type="text" name="" id="" readOnly />
              <i class='bx bx-x'></i>

            </div>

          </section>

        </div>
        <div className="categories-3">

          <section className="heading"><p>Completed</p></section>
          <section className="tasks">

            <div className="task">

              <input type="checkbox" name="" id="" />
              <input type="text" name="" id="" readOnly />
              <i class='bx bx-x'></i>

            </div>

          </section>

        </div>

      </section>

    </div>

  );

}

export default App;
