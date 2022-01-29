import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import data from './data'


function App() {
  let cards = data.map(item =>{
    return(
    <Card
           item = {item} 
        />
)
})


return(
    <div>
        <Navbar />
        {cards}
        
    
    </div>
)
}


export default App;
