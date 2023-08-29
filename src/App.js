import React from "react";
import Reviews from './reviews'

function App() {
  return(
    <section className = "flex flex-col items-center justify-items-center">
      <div>
        <h2 className = 'font-bold text-4xl text-center p-10 flex flex-col items-center'>
          Our Reviews
          <span className = "border-b-4 border-slate-500  w-20 p-2">
            
          </span>
        </h2>
        <Reviews />
      </div>
      
    </section>
  )
}

export default App;
