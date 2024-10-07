import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import tailwindLogo from '@/assets/tailwind.svg'

export default function Logo() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b text-white p-4 min-h">

      <div className="flex space-x-8 mb-8">

        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" className="group">
          <img
            src={viteLogo}
            className="w-24 h-24 object-contain transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:rotate-12"
            alt="Vite logo"
          />
        </a>

        <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="group">
          <img
            src={reactLogo}
            className="w-24 h-24 object-contain transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:-rotate-12 animate-spin-slow"
            alt="React logo"
          />
        </a>

        <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="group">
          <img
            src={tailwindLogo}
            className="w-24 h-24 object-contain transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:-rotate-12 animate-spin-slow"
            alt="React logo"
          />
        </a>

      </div>


      <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
        Vite + React + Tailwind
      </h1>


      <p className="text-lg text-gray-300 text-center">
        A powerful combination for building fast and scalable web applications.
      </p>

    </div>
  )
}