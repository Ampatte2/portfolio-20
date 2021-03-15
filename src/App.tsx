import React from 'react';
import Theme from './globals/Theme';
import { Global } from './globals/Global';
import { Location } from 'history';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Landing, Projects, About, Init } from './pages';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { DefaultTheme } from 'styled-components';
import { StyledTransition, selectPathTransition, Paths } from './transitions';
import Mixins from './mixins';

const globalStyle = (theme: DefaultTheme) => `
  body {
      flex-direction:column;
      background-color: ${theme.colors.background};
      ${Mixins.scroll}
  }
  #modal {
      z-index: 1;
  }
  a {
      color: ${theme.colors.primary};
  }
`;

function App () {
    const location = useLocation();

    const childTransitionFactory = (child: React.ReactElement<any, string | React.JSXElementConstructor<any>>) => {
        const currentTransitions = selectPathTransition(location.pathname);
        return React.cloneElement(child, currentTransitions);
    };
    return (
        <Global
            style={globalStyle}
            //@ts-ignore
            theme={Theme}
        >
            <TransitionGroup
                childFactory={childTransitionFactory}
            >
                <StyledTransition
                    key={location.key}
                >
                    <Switch location={location}>
                        <Route
                            path={Paths.Projects}
                            component={Projects}/>
                        <Route
                            path={Paths.About}
                            component={About}/>
                        <Route
                            path={Paths.Home}
                            component={Landing}/>
                        <Route
                            path={Paths.Init}
                            component={Init}/>
                    </Switch>
                </StyledTransition>
            </TransitionGroup>
        </Global>
    );
}

export default App;
