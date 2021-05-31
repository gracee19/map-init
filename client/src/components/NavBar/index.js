import React, { Component } from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react';
// import {Link} from "react-router-dom";
import Profile from '../DropdownUser';

export default class NavBar extends Component {
  // const [userInfo, setUserInfo] = useState(null);
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='tiny' inverted>
          <Image src='/mapinit-logo.png'/>
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
            {/* <Dropdown item text={""}>
            <Dropdown.Menu> 
              <Button inverted color='standard' className="userlog" as={Link} to={"/"}>Account</Button>
              <Button inverted color='standard' >Settings</Button>
              <Button inverted color='standard' as={Link} to={"/"}>Logout</Button>
            </Dropdown.Menu>
            </Dropdown> */}
            <Profile/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

    )
  }
}