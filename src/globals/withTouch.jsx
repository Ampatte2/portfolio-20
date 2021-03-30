import { useEffect, useState } from 'react';

const MIN_VELOCITY     = 0.9; // Minimum speed to register swipe
const MIN_DISTANCE     = 120; // Minimum travel distance to register swipe
const MAX_ERROR        = 50; // Minimum offness of swipe direction
const DOUBLE_TAP_DELAY = 300; // Minimum delay between doule tap
const MIN_PRESS_TIME   = 1000; // Minimum time to register long tap
const LONG_PRESS_ERROR = 10; // Minimum offness of holding
const TAP_DELAY        = 100; // Minimum delay to register tap
let _data;
let lastTap            = 0;

//if pointer down and pointer move to catch only movement

export const withTouch = (Component) => (props) => {
    const touchStart = (el) => {
        _data = {
            time : el.timeStamp,
            x    : el.changedTouches[0].pageX,
            y    : el.changedTouches[0].pageY,
        };
    };

    const touchEnd = (el) => {
        const diffX     = el.changedTouches[0].pageX - _data.x;
        const diffY     = el.changedTouches[0].pageY - _data.y;
        const diffAbsX  = Math.abs(diffX);
        const diffAbsY  = Math.abs(diffY);
        const diffTime  = el.timeStamp - _data.time;
        const velocityX = diffAbsX / diffTime;
        const velocityY = diffAbsY / diffTime;

        // Check for tap & double tap
        if (diffTime < TAP_DELAY) {
            if (lastTap && el.timeStamp - lastTap < DOUBLE_TAP_DELAY) {
                window.dispatchEvent(new CustomEvent('doubleTap'));
                lastTap = 0;
                return;
            }

            lastTap = el.timeStamp;
            return;
        }

        // Check for long press
        if (
            diffAbsX < LONG_PRESS_ERROR &&
                diffAbsY < LONG_PRESS_ERROR &&
                diffTime > MIN_PRESS_TIME
        ) {
            window.dispatchEvent(new CustomEvent('longPress'));
            return;
        }

        // Check for vertical swipes
        if (
            velocityY > MIN_VELOCITY &&
                diffAbsY > MIN_DISTANCE &&
                diffAbsX < MAX_ERROR
        ) {
            if (diffY > 0) {
                window.dispatchEvent(new CustomEvent('swipeDown'));
            } else {
                window.dispatchEvent(new CustomEvent('swipeUp'));
            }
        }

        // Check for horizontal swipes
        if (
            velocityX > MIN_VELOCITY &&
                diffAbsX > MIN_DISTANCE &&
                diffAbsY < MAX_ERROR
        ) {
            if (diffX > 0) {
                console.log('swipe right');
                window.dispatchEvent(new CustomEvent('swipeRight'));
            } else {
                console.log('swipe left');
                window.dispatchEvent(new CustomEvent('swipeLeft'));
            }
        }
    };


    useEffect(() => {
        window.addEventListener('touchstart', touchStart, { passive: true });
        window.addEventListener('touchend', touchEnd, { passive: true });
        //window.addEventListener('pointermove', touchEnd, { passive: true });
        return () => {
            window.removeEventListener('touchstart', touchStart, {
                passive: true,
            });
            window.removeEventListener('touchend', touchEnd, { passive: true });
        };
    }, []);

    return <Component {...props} />;
};
