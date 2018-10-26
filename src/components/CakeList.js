import React, { Fragment } from 'react'
import { Grid } from 'semantic-ui-react'

import CakeCard from './CakeCard'

const CakeList = ({ cakes }) => {
  const cakeCards = cakes.map(cake => {
    return <CakeCard  key={cake.id}
                      id={cake.id}
                      name={cake.name}
                      imageUrl={cake.imageUrl}
                      description={cake.description}
                      />
  })

  return (      
    <div className='cake-container'>
      {cakeCards}
    </div>
  )
}

export default CakeList