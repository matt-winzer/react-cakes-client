import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu widths={3}>
        <Menu.Item
          name='cakes'
          active={activeItem === 'cakes'}
          onClick={this.handleItemClick}
        >
          Cakes
        </Menu.Item>

        <Menu.Item disabled name='title' active={activeItem === 'title'} onClick={this.handleItemClick}>
          Cake 4 Dayz
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