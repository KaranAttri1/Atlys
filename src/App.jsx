import { Routes, Route } from 'react-router-dom'
import ModalPopUp from './components/modal'
import Feed from './components/Feed'
import SignUp from './components/SignUp'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/login" element={<ModalPopUp />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App;
