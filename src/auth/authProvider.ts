import { AuthProvider } from "react-admin";

export const authProvider: AuthProvider = {
    login: ({ username, password }) => {
        if (username === 'admin' && password === 'password') {
            localStorage.setItem("username", username);
            return Promise.resolve();
        } else {
            return Promise.reject(new Error("Invalid credentials"));
        }
    },

    logout: () => {
        localStorage.removeItem("username");
        return Promise.resolve();
    },

    checkError: ({ status }: { status: number }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem("username");
            return Promise.reject(new Error("Unauthorized"));
        }
        return Promise.resolve();
    },

    checkAuth: () => {
        return localStorage.getItem('username') ? Promise.resolve() : Promise.reject(new Error("User not authenticated"));
    },

    getPermissions: () => Promise.resolve(),
};
