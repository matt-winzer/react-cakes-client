import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const CakeHeader = () => (
  <Header as='h2' icon textAlign='center' className="cake-list-header" size={'huge'}>
    <Icon name='birthday cake' circular />
    <Header.Content>Cake 4 Dayz</Header.Content>
    <Header.Subheader>Soft as Cake or Hard AF</Header.Subheader>
  </Header>
)

export default CakeHeader
