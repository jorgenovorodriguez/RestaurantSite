export const getImageUrl = (path: string)  => {
    try {
        return `/images/${path}`; 
    } catch (error) {
        console.error(error);
    }
};

export const getAssetImageUrl = (path: string) => {
    try {
        return new URL(`/src/assets/images/${path}`, import.meta.url).href;
    } catch (error) {
        console.error(error);
        return '';
    }
};

export const handleClickOutside = (
    event: MouseEvent,
    ref: React.RefObject<HTMLElement>,
    callback: () => void
  ) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };


