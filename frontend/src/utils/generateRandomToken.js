export const generateRandomToken = () => {
    return Math.random().toString(36).slice(2,8);
}