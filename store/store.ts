import { create } from 'zustand';

interface Data {
    age: number;
    name: string;
    email: string;
}
interface Store {
    data: Data[];
    addData: (data: Data) => void;
}
const useStore = create< Store>((set) => ({
    data: [],
    addData: (data : Data) => set((state) => ({ data: [...state.data, data] })),
}));

export default useStore;

