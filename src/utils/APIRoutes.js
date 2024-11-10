export const host = process.env.REACT_APP_BACKEND_ROUTE;
export const registerRoute = `${host}/api/auth/register`;
export const loginRoute = `${host}/api/auth/login`;
export const setAvatarRoute = `${host}/api/auth/setAvatar`;
export const allUsersRoute = `${host}/api/auth/allUsers`;
export const sendMessageRoute = `${host}/api/message/addmsg`
export const getAllMessageRoute = `${host}/api/message/getmsg`