import React from 'react';
import styled from 'styled-components';

interface IFlipCardProps {
    frontElement : React.ReactElement;
    backElement: React.ReactElement;
}

export const FlipCard : React.FC<IFlipCardProps> = ({
    frontElement,
    backElement
}): React.ReactElement => (
    <FlipCardContainer>
        <FlipCardFrontContainer>
            {frontElement}
        </FlipCardFrontContainer>
        <FlipCardBackContainer>
            {backElement}
        </FlipCardBackContainer>
    </FlipCardContainer>
);

const FlipCardContainer      = styled.div`
    position: relative;
`;
const FlipCardFrontContainer = styled.div`
    backface-visibility: hidden;
`;
const FlipCardBackContainer  = styled.div`
    backface-visibility: hidden;
`;