export const getImageUrl = (path: string)  => {
    try {
        return `/images/${path}`; 
    } catch (error) {
        console.error(error);
    }
};