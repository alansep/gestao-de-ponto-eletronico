import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebStorageReader } from './web-storage-reader';
import { WebStorageWriter } from './web-storage-writer';

@Injectable({
  providedIn: 'root',
})
export class WebStorageService implements WebStorageReader, WebStorageWriter {

  constructor() {
  }

  public readFromWebStorage(key: string): string {
    const value = localStorage.getItem(key);
    return value ? value : '';
  }

  public saveOnWebStorage(key: string, content: string): void {
    localStorage.setItem(key, content);
  }
}
