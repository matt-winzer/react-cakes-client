import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CakeCard = ({ name, imageUrl, description }) => (
  <Card className='cake-card'>
    <Image src={imageUrl} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>Soft</span>
      </Card.Meta>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)

export default CakeCard
