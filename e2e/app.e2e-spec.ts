import { TutoriasPage } from './app.po';

describe('tutorias App', () => {
  let page: TutoriasPage;

  beforeEach(() => {
    page = new TutoriasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
