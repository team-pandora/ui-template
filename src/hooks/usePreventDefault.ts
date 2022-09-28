import { useEffect } from "react";

const usePreventDefault = <Type extends keyof WindowEventMap>(
    event: Type,
    func: (e: WindowEventMap[Type]) => boolean
) => {
    const handler = (e: WindowEventMap[Type]) => func(e) && e.preventDefault();
    useEffect(() => {
        window.addEventListener(event, handler);
        return () => window.removeEventListener(event, handler);
    }, []);
};

export default usePreventDefault;
