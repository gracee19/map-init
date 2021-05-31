import React from 'react'
// import { Link } from 'react-router-dom';
import { Dropdown, Icon } from 'semantic-ui-react';

const trigger = (
  <span>
    <Icon name='user' /> Hello, Grace
  </span>
)

const options = [
  {
    key: 'user',
    text: (
      <span>
        Signed in as <strong>Grace</strong>
      </span>
    ),
    disabled: true,
  },
  { key: 'profile', text: 'Your Profile' },
  { key: 'settings', text: 'Settings' },
  { key: 'logOut', text: 'Log Out' },
]

const Profile = () => (
  <Dropdown trigger={trigger} options={options}/>
  

)

export default Profile