import React from 'react';
import styled from 'styled-components';
import { OverlayImg, OverlayImgProps } from './OverlayImg';
import { AnchorLink } from './AnchorLink';
import { Button } from './Button';

import { flex } from '../globals/Flex';


interface ProjectContainerProps extends OverlayImgProps, React.HTMLAttributes<HTMLDivElement> {
    href?: string;
    target?: string;
    margin?: string;
}

export const ProjectContainer: React.FC<ProjectContainerProps> = ({
    children,
    target,
    href,
    source,
    ...props
}) => {
    return (
        <Container> 
            <OverlayImg
                source={source}
                backgroundColor="primary">
                <AnchorLink
                    href="https://github.com/Ampatte2/mtgbuilder_server"
                    target="_blank"
                    margin="0 20px 0 0">
                    <Button
                        size="h1"
                        onHover="opacity: 1;">
                        Code
                    </Button>
                </AnchorLink>
                <AnchorLink
                    href="https://mtg-builder-application.herokuapp.com/"
                    target="_blank">
                    <Button size="h1">
                        Demo
                    </Button>
                </AnchorLink>
            </OverlayImg>
        </Container>
    );
};

interface ContainerProps {

}

const Container = styled.div<ContainerProps>`
    text-decoration: none;
    cursor: pointer;
    width:100%;
    height:100%;
    ${flex('center')}
    &:hover {
        opacity: 0.75;
    }
`;