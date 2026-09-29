interface SavedFile {
  id: string
  name: string
  storedName: string
  size: number
  type: string
  path: string
  uploadedAt: string
}

interface ElectronAPI {
  isElectron: boolean

  getFiles: () => Promise<SavedFile[]>

  selectFiles: () => Promise<SavedFile[]>

  deleteFile: (id: string) => Promise<boolean>

  openFile: (id: string) => Promise<boolean>
}

interface Window {
  electronAPI: ElectronAPI
}