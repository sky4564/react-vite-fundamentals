import './App.css'
import WelcomePage from './components/WelcomePage'

function App() {
  return (
    <>
      <WelcomePage></WelcomePage>
      <div className="p-4 bg-blue-500 text-white">
        <h1 className="text-2xl font-bold">Hello, Tailwind CSS with Vite!</h1>
      </div>
    </>
  )
}

export default App