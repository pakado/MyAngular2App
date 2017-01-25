import { MyGeneralAppPage } from './app.po';

describe('my-general-app App', function() {
  let page: MyGeneralAppPage;

  beforeEach(() => {
    page = new MyGeneralAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
