import { Navbar, Button } from "@blueprintjs/core";
import { useState } from 'react';
import SettingsForm from './SettingsForm';

function Nav() {
  const [showForm, setShowForm] = useState(false);
  
  return (
    <>
      <Navbar className='bp4-navbar bp4-dark'>
        <Navbar.Group align='left'>
          <Navbar.Heading>To-Do List</Navbar.Heading>
          <Navbar.Divider />
        </Navbar.Group>
        <Navbar.Group align="right">
          <Button className="bp4-minimal" icon="home" text="Home" />
          <Button 
            className="bp4-minimal"
            icon="settings"
            text="Settings"
            onClick={() => setShowForm(true)}
          />
        </Navbar.Group>
      </Navbar>
      {
        showForm && <SettingsForm setShowForm={setShowForm} />
      }
    </>
  )
}

export default Nav;