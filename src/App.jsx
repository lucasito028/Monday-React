import { useState, useEffect } from 'react'
import Monday from './Monday/Monday.js'

function App() {

  const monday = new Monday(); // instanciar fora da função App pode evitar recriação
  const [board, setBoard] = useState();

  useEffect(() => {
    setBoard(monday.excecute());
    console.log(board)
  }, []); 

  return (
    <>
      <pre>{JSON.stringify(monday.excecute(), null, 2)}</pre>
    </>
  )
}

export default App;
