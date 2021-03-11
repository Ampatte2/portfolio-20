import transition from 'styled-transition-group';
import Mixins from '../mixins';

export const StyledTransition = transition.div`
  &:enter {
    position: absolute;
    top: 0;
    left: 0;
  }
  &:enter-active {
    transition: all ${props => props.timeout}ms ease-in;
  }
  &:exit {
   
  }
  &:exit-active {
    transition: all ${props => props.timeout}ms ease-in;
    ${props => Mixins.transform(props.transformation)}
  }
`;