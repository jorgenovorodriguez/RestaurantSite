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
