import './App.css'
import ReleaseNotes from './components/releaseNotes';
import ListNotes from './components/listNotes';

function App() {
  return (
    <div className="flex flex-col w-[100%] justify-center items-center font-body">
      <header className="flex flex-col bg-red-200 w-[100%] h-[100px] md:h-[200px] justify-center
      bg-gradient-to-r from-[#0D5287] from-0% via-[#187DCA] via-21% via-[#05AACE] via-42% via-[#04D2C6] via-63% to-[#26E4C7] to-79%
      md:mb-16 md:pl-16 mb-6 pl-6">
        <h2 className="text-[32px] md:text-[50px] text-white font-bold">Release Notes</h2>
      </header>
      <body className="w-full flex flex-col md:flex-row items-center md:pl-[200px] gap-[20px]">
        <ReleaseNotes />
        <ListNotes />
      </body>
    </div>
  )
}

export default App
