export interface ThemeInterface {
    name: string;
    font: {
        family: string;
        lineHeight: number;
        size: {
            default: string;
            small: string;
            h1: string;
            h2: string;
            h3: string;
            h4: string;
            h5: string;
            h6: string;
            [key: string]: string;
        };
    };
    dimensions: {
        padding: {
            container: string | number;
            default: string | number;
            square: string | number;
            withBorder: string | number;
            [key: string]: string | number;
        };
        multiSelect: {
            spacing: number;
        };
        loading: {
            height: number;
        };
        switch: {
            size: number;
            spacing: number;
            [key: string]: number;
        };
        radio: {
            size: string | number;
            spacing: number;
            [key: string]: string | number;
        };
        checkbox: {
            size: string | number;
            spacing: number;
            [key: string]: string | number;
        };
        radius: string | number;
        tag: {
            padding: string | number;
            fontSize: string;
            [key: string]: string | number;
        };
        navigation: {
            width: number;
            icon: number;
        };
        modal: {
            width: {
                large: string | number;
                default: string | number;
                small: string | number;
                [key: string]: string | number;
            };
        };
        select: {
            itemHeight: number;
        };
    };
    colors:{
        primary:string;
        secondary:string;
        tertiary:string;
        background: string;
        [key: string]: string;
    };
    input: {
        default: string;
        success: string;
        error: string;
    };
    media: {
        tablet: number;
        phone: number;
        [key: string]: number;
    };
    speed: {
        fast: number;
        normal: number;
        slow: number;
        page: number;
        [key: string]: number;
    };
    depth: string[];
}

const Theme: ThemeInterface = {
    name : 'Andrew Patterson',
    font : {
        family     : 'Trebuchet MS',
        lineHeight : 1.6,
        size       : {
            default : '1rem',
            small   : '0.85rem',
            large   : '3.0rem',
            h1      : '2rem',
            h2      : '1.75rem',
            h3      : '1.55rem',
            h4      : '1.4rem',
            h5      : '1.3rem',
            h6      : '1.2rem',
        },
    },
    dimensions: {
        padding: {
            container  : '16px',
            default    : '12px 20px',
            square     : '12px',
            withBorder : '10.5px 18.5px',
        },
        multiSelect: {
            spacing: 5,
        },
        loading: {
            height: 4,
        },
        switch: {
            size    : 30,
            spacing : 5,
        },
        radio: {
            size    : 12,
            spacing : 3,
        },
        checkbox: {
            size    : 12,
            spacing : 3,
        },
        radius : '8px',
        tag    : {
            padding  : '6px 12px',
            fontSize : '0.8rem',
        },
        navigation: {
            width : 225,
            icon  : 30,
        },
        modal: {
            width: {
                
                large   : '800px',
                default : '600px',
                small   : '400px',
            },
        },
        select: {
            itemHeight: 41,
        },
    },
    colors: {
        primary    : '#22277A',
        secondary  : '#B9BFFF',
        tertiary   : '#663399',
        background : '#ffffff',
    },
    input: {
        default : '#f5f5f5',
        success : '#f5fff5',
        error   : '#fff5f5',
    },
    media: {
        tablet : 1160,
        phone  : 700,
    },
    speed: {
        fast   : 150,
        normal : 250,
        slow   : 400,
        page   : 600,
    },
    depth: ['none', '0 1px 3px rgba(0,0,0,0.2)', '0 2px 6px rgba(0,0,0,0.3)'],
};

export default Theme;
