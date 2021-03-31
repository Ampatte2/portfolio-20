import { useRef, useState, useEffect } from 'react';
let showCursor = true;

export const cursorFunction = (cursor: string) => {
    setTimeout(cursorFunction, 50);
    if (showCursor) {
        showCursor = false;
        return cursor;
    } else {
        showCursor = true;
    }
};

export const useTypeWriter = (textArray: string[], speed: number = 200, callback?: ()=> void) => {
    let typingInterval: undefined | number;
    const isFirstCallback               = useRef(true);
    const defaultArray                  = Array(textArray.length).fill('');
    const [wordArray, setWordArray]     = useState<string[]>(defaultArray);
    const [wordIndex, setWordIndex]     = useState(0);
    const [stringIndex, setStringIndex] = useState(0);

    useEffect(() => {
        const typeWriterIntervalCallback = () => {
            const currentWord = textArray[wordIndex];
            if (stringIndex < currentWord.length) {
                const wordArrayCopy      = [...wordArray];
                wordArrayCopy[wordIndex] = `${wordArrayCopy[wordIndex]}${currentWord[stringIndex]}`;
                setWordArray(wordArrayCopy);
                setStringIndex(current => current + 1);
            } else {
                if (wordIndex + 1 < textArray.length) {
                    setStringIndex(0);
                    setWordIndex(current => current + 1);
                } else {
                    clearInterval(typingInterval);
                    if (callback && isFirstCallback.current) {
                        isFirstCallback.current = false;
                        callback();
                    }
                }
            }
        };
        typingInterval = setTimeout(typeWriterIntervalCallback, speed);
        return () => clearTimeout(typingInterval);
    }, [stringIndex, wordIndex, wordArray, textArray, typingInterval]);
    return { wordArray, wordIndex };
};