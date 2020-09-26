import React from 'react';
import Theme from './globals/Theme';
import { Global } from './globals/Global';
import { Switch, Route } from 'react-router-dom';
import { Landing, Projects } from './pages';

const globalStyle = theme => `
  body {
      flex-direction:column;
      background-color: ${theme.colors.background};
      
  }

  #modal {
      z-index: 1;
  }

  a {
      color: ${theme.colors.primary};
  }

  
`;

function App () {
    return (
        <Global
            style={globalStyle}
            theme={Theme}
        >
            <Switch>
                <Route
                    path='/projects'
                    component={Projects}/>
                <Route
                    path='/'
                    component={Landing}/>
            </Switch>
        </Global>
    );
}

export default App;
