import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

/**
*Sets up swipe navigation for current page
*@param {string} rightPath - path to navigate on swipe right
*@param {string} leftPath - path to navigate on swipe left 
**/
export const useSwipeNavigation = (rightPath: string, leftPath: string) => {
    const history = useHistory();
    //prevents double navigation from page
    const [isNavigating, setIsNavigating] = useState(false);

    const navigateToRightPath = () => {
        if (!isNavigating) {
            console.log('nav right');
            setIsNavigating(true);
            history.push(rightPath, { forward: true });
        }
    };
    const navigateToLeftPath  = () => {
        if (!isNavigating) {
            
            setIsNavigating(true);
            history.push(leftPath, { forward: false });
        }
    };

    useEffect(() => {
        window.addEventListener('swipeRight', navigateToRightPath);
        window.addEventListener('swipeLeft', navigateToLeftPath);
        return () => {
            window.removeEventListener('swipeRight', navigateToRightPath);
            window.removeEventListener('swipeLeft', navigateToLeftPath);
        };
    }, [history, isNavigating]);

    return [navigateToLeftPath, navigateToRightPath];
};