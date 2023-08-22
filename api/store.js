import { create} from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';




const useAuthStore = create(  
  persist(
    (set) => ({
      isActive: false,
      nickname: '',
      userId: '',
      rank:'',
      login: (userId, nickname, rank) => set({isActive:true, nickname:nickname, userId:userId,rank:rank }),
      logout: () => set({ isActive: false, nickname: '', userId:'',rank:''}),
    }),
    {
      name: 'auth-store',
      storage:createJSONStorage(()=>  AsyncStorage),
    }
  )
);

export default useAuthStore;
