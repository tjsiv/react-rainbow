import React, { useState } from 'react'
// Make sure to import the component we just built:
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'

function App(){
    let [colors, setColors] = useState([
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ])
    //goes through array to place colors
    let colorMap = colors.map((color, i) => {
      //sends back the colors with a key
        return (
            <ColorBlock key={i} color={color} />
        )
    })
//adds new color to the array
    const addColor = (newColor) => {
      setColors([...colors, newColor])
    }

    return (
      <div className="App">
        {colors.map((color, i) => 
            <ColorBlock key={i} color={color} />
        )}
        <ColorForm addColor = {addColor} />
      </div>
  
    )
}
            


export default App;
