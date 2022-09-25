import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebStorageReader } from './web-storage-reader';
import { WebStorageWriter } from './web-storage-writer';

@Injectable({
  providedIn: 'root',
})
export class WebStorageService implements WebStorageReader, WebStorageWriter {

  constructor(private storage: Storage) {
    storage = window.localStorage;
  }

  public readFromWebStorage(key: string): string {
    const value = this.storage.getItem(key);
    return value ? value : '';
  }

  public saveOnWebStorage(key: string, content: string): void {
    this.storage.setItem(key, content);
  }
}
