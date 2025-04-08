import Bannar  from "./Bannar";

function App(){
  return(
    <>
      <Bannar />
      <div className="bg-gray-900 w-screen h-screen border-t border-t-red-600 flex justify-center items-center">
        <div className="w-[400px] h-[240px] bg-green-700 rounded-2xl flex justify-center items-center">
          <div className="w-[160px] h-[160px] bg-red-700 rounded-full"></div>
        </div>
      </div>
    </>
  )
}

export default App;