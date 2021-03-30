export enum Paths {
    Projects = '/projects',
    About = '/about',
    Init = '/',
    Home = '/home'
}

export const PathTransitions = {
    [Paths.Projects]: {
        transformation : [{ transformation: 'translateX', value: '100%' }],
        timeout        : 800
    },
    [Paths.About]: {
        transformation : [{ transformation: 'translateX', value: '100%' }],
        timeout        : 800
    },
    [Paths.Home]: {
        transformation : [{ transformation: 'translateX', value: '-100%' }],
        timeout        : 800
    },
    [Paths.Init]: {
        transformation : [{ transformation: 'translateX', value: '-100%' }],
        timeout        : 800
    }
};

export const selectForwardOrBackward = (forward: boolean) => {
    if (forward) {
        return  {
            transformation : [{ transformation: 'translateX', value: '100%' }],
            timeout        : 800
        };
    } else {
        return  {
            transformation : [{ transformation: 'translateX', value: '-100%' }],
            timeout        : 800
        };
    }
};

export const selectPathTransition = (pathName: string) => {
    switch (pathName) {
    case Paths.Projects:
        return PathTransitions[Paths.Projects];
    case Paths.Home:
        return PathTransitions[Paths.Home];
    case Paths.About:
        return PathTransitions[Paths.About];
    case Paths.Init:
        return PathTransitions[Paths.Init];
    default:
        return PathTransitions[Paths.Home];
    }
};