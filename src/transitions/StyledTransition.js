import transition from 'styled-transition-group';
import Mixins from '../mixins';

export const StyledTransition = transition.div`
  &:enter {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    transition: all ${props => props.timeout}ms ease-in;
  }
  &:enter-active {
    transition: all ${props => props.timeout}ms ease-in;
    opacity: 1;
  }
  &:exit {
   opacity: 0.7;
   transition: all ${props => props.timeout}ms ease-in;
  }
  &:exit-active {
    transition: all ${props => props.timeout}ms ease-in;
    opacity: 0;
    ${props => Mixins.transform(props.transformation)}
  }
`;