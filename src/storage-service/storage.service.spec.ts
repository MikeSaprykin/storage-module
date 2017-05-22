/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StorageService } from './storage.service';
import { CookieStorage } from './cookie-storage';

describe('StorageService tests:', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [StorageService]
		});
	});

	it(
		'should be defined',
		inject([StorageService], (service: StorageService) => {
			expect(service).toBeTruthy();
		})
	);
	describe('initStorage method tests: ', () => {
		it(
			'should be defined',
			inject([StorageService], (service: StorageService) => {
				expect(service.initStorage).toBeDefined();
			})
		);
		it(
			'should call setStorage method',
			inject([StorageService], (service: StorageService) => {
				spyOn(service, 'setStorage');
				service.initStorage();
				expect(service.setStorage).toHaveBeenCalled();
			})
		);
	});
	describe('setStorage method tests: ', () => {
		it(
			'should be defined',
			inject([StorageService], (service: StorageService) => {
				expect(service.setStorage).toBeDefined();
			})
		);
		it(
			'should change storage to an object with defined methods',
			inject([StorageService], (service: StorageService) => {
				service.setStorage(localStorage);
				expect(service.storage).toBeDefined();
				expect(service.storage.setItem).toBeDefined();
				expect(service.storage.getItem).toBeDefined();
				expect(service.storage.removeItem).toBeDefined();
				expect(service.storage.clear).toBeDefined();
			})
		);
		it(
			'should set cookie storage',
			inject([StorageService], (service: StorageService) => {
				service.setStorage(CookieStorage);
				expect(service.storage).toBeDefined();
				expect(service.storage.setItem).toBeDefined();
				expect(service.storage.getItem).toBeDefined();
				expect(service.storage.removeItem).toBeDefined();
				expect(service.storage.clear).toBeDefined();
			})
		);
	});
	describe('setItem method tests: ', () => {
		it(
			'should be defined',
			inject([StorageService], (service: StorageService) => {
				expect(service.setItem).toBeDefined();
			})
		);
		it(
			'should be defined',
			inject([StorageService], (service: StorageService) => {
				service.setStorage(localStorage);
				spyOn(service.storage, 'setItem');
				service.setItem('test', 'test');
				expect(service.storage.setItem).toHaveBeenCalled();
			})
		);
	});
	describe('setItem method tests: ', () => {
		it(
			'should be defined',
			inject([StorageService], (service: StorageService) => {
				expect(service.setItem).toBeDefined();
			})
		);
		it(
			'should call storage.setItem method',
			inject([StorageService], (service: StorageService) => {
				service.setStorage(localStorage);
				spyOn(service.storage, 'setItem');
				service.setItem('test', 'test');
				expect(service.storage.setItem).toHaveBeenCalled();
			})
		);
	});
	describe('getItem method tests: ', () => {
		it(
			'should be defined',
			inject([StorageService], (service: StorageService) => {
				expect(service.getItem).toBeDefined();
			})
		);
		it(
			'should call storage.getItem method',
			inject([StorageService], (service: StorageService) => {
				service.setStorage(localStorage);
				service.setItem('test', 'test');
				spyOn(service.storage, 'getItem').and.callThrough();
				service.getItem('test');
				expect(service.storage.getItem).toHaveBeenCalled();
			})
		);
	});
	describe('removeItem method tests: ', () => {
		it(
			'should be defined',
			inject([StorageService], (service: StorageService) => {
				expect(service.removeItem).toBeDefined();
			})
		);
		it(
			'should call service.storage.removeItem method',
			inject([StorageService], (service: StorageService) => {
				service.setStorage(localStorage);
				spyOn(service.storage, 'removeItem');
				service.removeItem('test');
				expect(service.storage.removeItem).toHaveBeenCalled();
			})
		);
	});
	describe('clear method tests: ', () => {
		it(
			'should be defined',
			inject([StorageService], (service: StorageService) => {
				expect(service.clear).toBeDefined();
			})
		);
		it(
			'should call service.storage.clear method',
			inject([StorageService], (service: StorageService) => {
				service.setStorage(localStorage);
				spyOn(service.storage, 'clear');
				service.clear();
				expect(service.storage.clear).toHaveBeenCalled();
			})
		);
	});
});
