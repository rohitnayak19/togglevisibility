import React, {useState} from 'react'

const App = () => {

  const [theme, setTheme] = useState('white')

  const handleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'white' ? 'black' : 'white'));
  }
  return (
    <>
  <div style={{ backgroundColor: theme , height: '100vh' }}> 
  <h1 style={{ color: theme === 'white' ? 'black' : 'white' }}>Toggle theme {theme}</h1>
  <button 
          onClick={handleTheme} 
          style={{ color: theme === 'white' ? 'white' : 'black', backgroundColor: theme === 'white' ? 'black' : 'white' }}
        >
          Change theme
        </button>
  </div>
    </>
  )
}

export default App