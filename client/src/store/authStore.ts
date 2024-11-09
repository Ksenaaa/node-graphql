import { create } from 'zustand';

import { AuthPayload, User } from '__generated__/graphql';

interface AuthStore {
    user: User | null,
    isAccessAllow: boolean,
    setUser: (authPayload: AuthPayload) => void,
    clearAuth: () => void,
}

const inirialValue = {
    user: null,
    isAccessAllow: false,
}

const useAuthStore = create<AuthStore>((set) => ({
    ...inirialValue,
    setUser: (authPayload) => {
        localStorage.setItem('token', authPayload.token)

        set({
            user: authPayload.user,
            isAccessAllow: true
        });
    },
    clearAuth: () => {
        localStorage.removeItem('token')

        set({
            ...inirialValue
        });
    }
}));

export default useAuthStore;
