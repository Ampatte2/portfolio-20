import React from 'react';
import styled from 'styled-components';
import Mixins from '../mixins';


export interface OverlayImgProps extends OverlayProps {
    source?: any;
    backgroundColor:string;
}

export const OverlayImg: React.FC<OverlayImgProps> = ({
    children,
    source,
    ...props
}) => {
    return (
        <Container {...props}> 
            <Overlay
                {...props}>
                {children}
            </Overlay>
            <Img
                {...props}
                src={source}/>
        </Container>
    );
};

interface ContainerProps {
    width?: string;
    height?: string;
};

interface OverlayProps extends ContainerProps {
    backgroundColor: string;
};

const Container = styled.div<ContainerProps>`
${({
        theme,
        width,
        height
    }): string => `
    width:${width};
    height:${height};
`}
`;
const Overlay   = styled.a<OverlayProps>`
    text-decoration: none;
    cursor: pointer;
    opacity: 0;
    position:absolute;
    top:0;
    left:0;
    ${Mixins.flex('center')}
    ${({
        theme,
        backgroundColor
    }): string => `
        background-color: ${theme.colors[backgroundColor] || backgroundColor};
        width:100%;
        height:100%;
    `}
    &:hover{
        opacity: 1.0;
    }
    
`;

const Img = styled.img<OverlayProps>`
${({
        width,
        height
    }): string => `
    width: ${width};
    height: ${height};
    z-index:3;
    opacity:1;
`}
`;