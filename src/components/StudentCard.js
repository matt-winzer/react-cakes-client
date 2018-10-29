import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const StudentCard = ({ name, cohort }) => (
  <Card raised className='cake-card'>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>Soft</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Icon name='birthday cake' />
      {cohort}
    </Card.Content>
  </Card>
)

export default StudentCard
