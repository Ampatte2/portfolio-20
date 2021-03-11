import 'styled-components';
import { ThemeInterface } from './src/globals/Theme';

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeInterface {}
}