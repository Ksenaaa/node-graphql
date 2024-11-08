import { User } from '__generated__/graphql';
import { create } from 'zustand';

interface AuthStore {
    user: User | null,
    isAccessAllow: boolean,
    setUser: (user: User) => void,
}

const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    isAccessAllow: false,
    setUser: (user) => {
        set({
            user: user,
            isAccessAllow: true
        });
    },
}));

export default useAuthStore;
