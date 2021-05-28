import React, { Component } from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react';
import {Link} from "react-router-dom";

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='tiny' inverted>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='About'
          active={activeItem === 'About'}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Chinese</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
              <Dropdown.Item>French</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button inverted color='standard' as={Link} to={"/"}>Log Out</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

    )
  }
}