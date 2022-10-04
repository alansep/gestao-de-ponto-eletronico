import { Observable } from 'rxjs';

export interface WebStorageWriter {

  saveOnWebStorage(key: string, content: string): void;

}
