export interface DocumentRepository<T> { list(): Promise<T[]>; get(id:string): Promise<T|undefined>; remove(id:string): Promise<void>; }
