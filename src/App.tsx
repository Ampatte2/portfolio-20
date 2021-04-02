import React, { useEffect, useState } from 'react';
import Theme from './globals/Theme';
import { Global } from './globals/Global';
import { withTouch } from './globals/withTouch';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { Landing, Projects, About, Init, Contact } from './pages';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { DefaultTheme } from 'styled-components';
import { StyledTransition, selectForwardOrBackward, selectPathTransition, Paths } from './transitions';
import Mixins from './mixins';
import { BurgerMenu, NavigationMenu } from './components';

const globalStyle = (theme: DefaultTheme) => `
  body {
      flex-direction:column;
      background-color: ${theme.colors.background};
  }
  iframe body {
    &:scrollbar {
        width: 0;
    }
    &::-webkit-scrollbar {
        width:0;
     }
     &::-moz-scrollbar {
         width:0;
     }
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
    const location            = useLocation<ILocationState>();
    const [isOpen, setIsOpen] = useState(false);

    const childTransitionFactory = (child: React.ReactElement<any, string | React.JSXElementConstructor<any>>) => {
        let currentTransitions;
        if (location.state) {
            currentTransitions = selectForwardOrBackward(location.state.forward);
        } else {
            currentTransitions = {
                transformation : [{ transformation: 'translateY', value: '-100%' }],
                timeout        : 800
            };
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
                    <BurgerMenu
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}/>
                    <NavigationMenu 
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}/>
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
                            path={Paths.Contact}
                            component={Contact}/>
                        <Route
                            path={Paths.Init}
                            component={Init}/>
                    </Switch>
                </StyledTransition>
            </TransitionGroup>
        </Global>
    );
});
