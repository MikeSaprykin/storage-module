import { CookieStorage } from './cookie-storage';

describe('Cookie tests:', () => {
	it('should create an instance', () => {
		expect(CookieStorage).toBeTruthy();
	});
	describe('setItem method tests', () => {
		it('should be defined', () => {
			expect(CookieStorage.setItem).toBeDefined();
		});
		it('should set cookie according to the params', () => {
			CookieStorage.setItem('testKey', 'testValue');
			const cookie = document.cookie;
			expect(cookie).toEqual('testKey=testValue');
		});
		it('should remove cookie', () => {
			CookieStorage.setItem('testKey', 'testValue', { expires: -1 });
			const cookie = document.cookie;
			expect(cookie).toBeFalsy();
		});
	});
	describe('getItem method tests: ', () => {
		it('method should be defined', () => {
			expect(CookieStorage.getItem).toBeDefined();
		});
		it('should return the cookie value', () => {
			const params = JSON.stringify({ test: 5 });
			CookieStorage.setItem('testKey', params);
			const result = CookieStorage.getItem('testKey');
			expect(result).toEqual(params);
		});
	});
	describe('clear method tests: ', () => {
		it('should be defined', () => {
			expect(CookieStorage.clear).toBeDefined();
		});
		it('should clear all document cookies', () => {
			CookieStorage.setItem('testKey', '1');
			CookieStorage.setItem('testKey', '2');
			CookieStorage.clear();
			const cookie = document.cookie;
			expect(cookie).toBeFalsy();
		});
	});

	describe('removeItem method tests: ', () => {
		it('should be defined ', () => {
			expect(CookieStorage.removeItem).toBeDefined();
		});

		it('should call CookieStorage.setItem method', () => {
			spyOn(CookieStorage, 'setItem');
			CookieStorage.removeItem('test');
			expect(CookieStorage.setItem).toHaveBeenCalled();
		});
	});
});
