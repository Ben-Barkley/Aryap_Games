import React, { useState } from 'react'
import { Button } from 'antd'

const Hero = () => {
    const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])

    function addItem() {
        setThingsArray(prevState => {
            return [...prevState, `Thing ${prevState.length + 1}`]
        })
    }


    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

  return (
    <div>
      <Button onClick={addItem}> Add Item</Button>

      {thingsElements}
      
    </div>
  )
}

export default Hero
