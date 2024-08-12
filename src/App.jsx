// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { useState } from 'react'

import { Routes, Route } from 'react-router-dom'
import ModalPopUp from './components/modal'
import Feed from './components/Feed'
import SignUp from './components/SignUp'

function App() {
  // const[count, setCount] = useState(0)
  // const[todos, setTodo]  = useState([{title: "Gym", description:"7-9pm"},{title:"study",description:"Habitstrong"}])
  return (
    <>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/login" element={<ModalPopUp />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    {/* <CustomButton count={count} setCount={setCount}></CustomButton>
    <div>****************************</div>
    {
      todos.map((todo)=>{
        return (<Todo todo={todo}></Todo>)
      })
    } */}
    {/* <div>****************************</div> */}
    {/* <ModalPopUp></ModalPopUp> */}
    </>
  )
}

export default App;
