import React, { useEffect, useState } from 'react';
import Theme from './globals/Theme';
import { Global } from './globals/Global';
import { withTouch } from './globals/withTouch';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { Landing, Projects, About, Init } from './pages';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { DefaultTheme } from 'styled-components';
import { StyledTransition, selectForwardOrBackward, selectPathTransition, Paths } from './transitions';
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

interface ILocationState {
    forward : boolean
}

export default withTouch(() =>  {
    const location = useLocation<ILocationState>();

    const childTransitionFactory = (child: React.ReactElement<any, string | React.JSXElementConstructor<any>>) => {
        let currentTransitions;
        if (location.state) {
            currentTransitions = selectForwardOrBackward(location.state.forward);
        } else {
            currentTransitions = selectPathTransition(location.pathname);
        }
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
});
