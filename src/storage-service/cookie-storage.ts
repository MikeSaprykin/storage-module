/**
 * Class with {@link document.cookie} manipulation methods
 * to set cookie, get cookie and remove all cookies
 */
export class CookieStorage {
	/**
   * Method to set a new cookie to the document
   * Passed with name and value as a parameter. Options object expects {expire:number} to be passed
   * If options.expire is 0 or is not passed - will turn cookie to session cookie - and remove it when the
   * session ends
   * @param name - cookie name parameter
   * @param value - cookie value parameter
   * @param options - options parameter
   * @example CookieStorage.setItem('test', 'test', 60) - sets cookie for one minute
   */
	static setItem(name: string, value: string = null, options = null): void {
		options = options || {};

		let expires = options.expires;

		if (typeof expires === 'number' && expires) {
			const d = new Date();
			d.setTime(d.getTime() + expires * 1000);
			expires = options.expires = d;
		}
		if (expires && expires.toUTCString) {
			options.expires = expires.toUTCString();
		}

		let updatedCookie = name + '=' + value;

		for (const propName in options) {
			if (options.hasOwnProperty(propName)) {
				updatedCookie += '; ' + propName;
				const propValue = options[propName];
				if (propValue !== true) {
					updatedCookie += '=' + propValue;
				}
			}
		}

		document.cookie = updatedCookie;
	}

	/**
   * Method to remove a cookie by name
   * @param name - cookie name parameter
   * @example CookieStorage.setItem('test', 'test', 60) - sets cookie for one minute
   */
	static removeItem(name: string): void {
		CookieStorage.setItem(name, null, { expires: -1 });
	}

	/**
   * Method that gets a cookie from document and returns it's parsed value
   * @param name
   * @returns {undefined|string}
   */
	static getItem(name) {
		const value = '; ' + document.cookie;
		const parts = value.split('; ' + name + '=');
		if (parts.length === 2) {
			return parts.pop().split(';').shift();
		}
	}

	/**
   * Method to remove all cookies, that are created by clients javascript code
   * Loops through all cookies, that are set by the user, and removes all of them
   */
	static clear(): void {
		const cookies = document.cookie.split(';');
		for (let i = 0; i < cookies.length; i++) {
			CookieStorage.setItem(cookies[i].split('=')[0], null, { expires: -60 });
		}
	}
}
