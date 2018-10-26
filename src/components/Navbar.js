import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class Navbar extends Component {

  render() {
    const { activeItem } = this.props

    return (
      <Menu widths={2} size={'huge'}>
        <Menu.Item
          name='cakes'
          active={activeItem === 'cakes'}
          onClick={this.props.handleItemClick}
        >
          Cakes
        </Menu.Item>

        <Menu.Item
          name='students'
          active={activeItem === 'students'}
          onClick={this.props.handleItemClick}
        >
          Students
        </Menu.Item>
      </Menu>
    )
  }
}

export default Navbar