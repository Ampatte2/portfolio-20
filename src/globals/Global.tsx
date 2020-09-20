import React, { Fragment } from 'react';
import {
    DefaultTheme, 
    ThemeProvider,
    createGlobalStyle
} from 'styled-components';
import Theme from './Theme';

interface Props{
    style?: (theme: DefaultTheme) => string;
}

export interface GlobalProps extends Props {
    children?: React.ReactNode;
    theme?: (theme: DefaultTheme) => DefaultTheme;
}
const GlobalContext = createGlobalStyle<Props>`
    body {
        margin: 0;
        padding: 0;
    }
    body, input, text-area, button{
        font-family: ${Theme.font.family};
    }
    #modal {
        z-index: 1;
    }
    #root {
        position: fixed;
        height: 100%;
        width: 100%;
    }
`;

export const Global: React.FC<GlobalProps> = ({
    children,
    theme = Theme,
    style,
}): React.ReactElement => (
    <ThemeProvider theme={theme}>
        <Fragment>
            <GlobalContext style={style}/>
            {children}
        </Fragment>
    </ThemeProvider>
);
export default Global;