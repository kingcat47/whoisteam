import { create } from 'zustand';

export type FileType = {
	groupId: string
	name: string
}

interface FileStore {
	isLoading: boolean;
	setIsLoading: (isLoading: boolean) => void;
	files: FileType[];
	setFiles: (files: FileType[]) => void;
}

const useFileStore = create<FileStore>((set) => ({
	isLoading: false,
	setIsLoading: (isLoading: boolean) => set({ isLoading }),
	files: [],
	setFiles: (files: FileType[]) => set({ files }),
}));

export default useFileStore;
