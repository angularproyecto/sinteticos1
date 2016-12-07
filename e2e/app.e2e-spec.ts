import { Sinteticos1Page } from './app.po';

describe('sinteticos1 App', function() {
  let page: Sinteticos1Page;

  beforeEach(() => {
    page = new Sinteticos1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
