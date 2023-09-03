export const capitalize = (str: string) => {
   return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getAvatarLink = (path: string) => {
   return `${import.meta.env.VITE_API_URL}${path}`;
};
