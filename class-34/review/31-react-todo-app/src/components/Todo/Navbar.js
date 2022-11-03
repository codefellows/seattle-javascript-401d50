import { useState, useContext } from 'react';
import { Navbar, Button, Card, Alignment, Overlay, Elevation, Classes } from "@blueprintjs/core";
import TodoSettings from './TodoSettings';
import Login from '../../auth/Login';
import { LoginContext } from '../../auth/context';

function TodoNavbar(props) {
  const context = useContext(LoginContext);
  const { loggedIn } = context;
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  const [loginIsOpen, setLoginIsOpen] = useState(false);

  const openSettings = () => { 
    setSettingsIsOpen(true)
  }
  const closeSettings = () => { 
    setSettingsIsOpen(false)
  }

  const openLogin = () => {
    setLoginIsOpen(true);
  }
  const closeLogin = () => {
    setLoginIsOpen(false);
  }
  
  const overlayOpts = {
        autoFocus: true,
        canEscapeKeyClose: true,
        canOutsideClickClose: true,
        enforceFocus: true,
        hasBackdrop: true,
        usePortal: true,
        useTallContent: false,
    }

  return (
    <>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Todos</Navbar.Heading>
          <Navbar.Divider />
          <Button data-testid="settings-button" onClick={ openSettings }  className="bp4-minimal" icon="settings" text="Settings" />
          { loggedIn ?
              <Button data-testid="logout-button" onClick={ openLogin }  className="bp4-minimal" icon="settings" text="Logout" />
            : <Button data-testid="login-button" onClick={ openLogin }  className="bp4-minimal" icon="settings" text="Login" />
          }
        </Navbar.Group>
      </Navbar>
      <div>
        <Overlay isOpen={settingsIsOpen} onClose={closeSettings} {...overlayOpts} className={Classes.OVERLAY_SCROLL_CONTAINER}>
          <Card elevation={Elevation.FOUR}>
            <TodoSettings />
          </Card>
        </Overlay>
        <Overlay isOpen={loginIsOpen} onClose={closeLogin} {...overlayOpts} className={Classes.OVERLAY_SCROLL_CONTAINER}>
          <Card elevation={Elevation.FOUR}>
            <Login successCallback={closeLogin} />
          </Card>
        </Overlay>
      </div>
    </>
  );
}

export default TodoNavbar;