import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class Navbar extends Component {
  state = {
    activeItem: 'cakes'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu widths={2} size={'huge'}>
        <Menu.Item
          name='cakes'
          active={activeItem === 'cakes'}
          onClick={this.handleItemClick}
        >
          Cakes
        </Menu.Item>

        <Menu.Item
          name='students'
          active={activeItem === 'students'}
          onClick={this.handleItemClick}
        >
          Students
        </Menu.Item>
      </Menu>
    )
  }
}

export default Navbar