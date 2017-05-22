import { StorageModulePage } from './app.po';

describe('storage-module App', () => {
  let page: StorageModulePage;

  beforeEach(() => {
    page = new StorageModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
