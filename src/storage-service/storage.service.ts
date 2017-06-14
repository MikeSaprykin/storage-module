import { Injectable } from '@angular/core';
import { CookieStorage } from "./cookie-storage";

/**
 * Storage object interface with methods of the storage
 */
export interface StorageObject {
  /**
   * Method to set item to the storage
   * @param key
   * @param value
   */
  setItem(key: string, value: any): void;
  /**
   * Method to remove item from the storage
   * @param key
   */
  removeItem(key: string): void;
  /**
   * Method to clear all items from the storage
   */
  clear(): void;
  /**
   * Method to get an item from the storage
   * @param key
   */
  getItem(key: string): any;
}

/**
 * Service for manipulating {@link localStorage}, {@link sessionStorage} or
 * {@link document.cookie} if no storage is available
 * To set storage item
 * @example StorageService.setItem(key, value)
 */
@Injectable()
export class StorageService {

  /**
   * Property of storage object, that will be set, according to the available storage type
   * @type {StorageObject}
   */
  public storage: StorageObject;

  constructor() {
    /**
     * Calls {@link initStorage} method on app init
     */
    this.initStorage();
  }

  /**
   * Method, to conditionally check which storage type is available on the users device
   * and set {@link storage} according to the type.
   * Tries to set test key to local storage, and if it throws error - sets {@link CookieStorage}
   * as a available storage
   */
  public initStorage(): void {
    const availableStorage = localStorage ? localStorage : sessionStorage;
    try {
      availableStorage.setItem('test', 'test');
      availableStorage.removeItem('test');
      this.setStorage(availableStorage);
    } catch (e) {
      this.setStorage(CookieStorage)
    }
  }

  /**
   * Method to set {@link storage} to the type of storage, passed in the parameter
   * @param storage
   */
  public setStorage(storage: StorageObject): void {
    this.storage = storage
  }

  /**
   * Method to set item to the storage
   * Calls {@link StorageObject.setItem} with parameters
   * @param key
   * @param value
   */
  public setItem(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  /**
   * Method to remove item from the storage provided
   * Calls {@link StorageObject.removeItem}
   * @param key
   */
  public removeItem(key: string): any {
    this.storage.removeItem(key);
  }

  /**
   * Method to get item from the storage provided
   * Calls {@link StorageObject.getItem}
   * @param key
   */
  public getItem(key: string): any {
    try {
      return JSON.parse(this.storage.getItem(key));
    } catch (e) {
      return this.storage.getItem(key)
    }
  }


  /**
   * Method to clear all items from the storage provided
   * Calls {@link StorageObject.clear}
   */
  public clear(): void {
    this.storage.clear();
  }

}
