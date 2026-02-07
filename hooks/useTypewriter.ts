import {useEffect, useState} from "react";

export function useTypewriter(words: string[], speed = 60, pause = 1600) {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = words[index];

        if (!deleting && subIndex === current.length) {
            setTimeout(() => setDeleting(true), pause);
            return;
        }

        if (deleting && subIndex === 0) {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (deleting ? -1 : 1));
            setText(current.substring(0, subIndex));
        }, speed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, deleting, words, speed, pause]);

    return text;
}
