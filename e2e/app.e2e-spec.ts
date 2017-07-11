import { SpotifyAPPPage } from './app.po';

describe('spotify-app App', () => {
  let page: SpotifyAPPPage;

  beforeEach(() => {
    page = new SpotifyAPPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
