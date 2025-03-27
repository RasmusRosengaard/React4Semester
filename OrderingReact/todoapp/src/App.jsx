import { useState } from 'react'
import OrderPage from './OrderPage.jsx'
import ColorPicker from './ColorPicker.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ColorPicker></ColorPicker>
     <OrderPage></OrderPage>
    </>
  )
}

export default App;
