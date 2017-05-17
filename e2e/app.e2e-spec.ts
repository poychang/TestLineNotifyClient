import { TestLineNotifyClientPage } from './app.po';

describe('test-line-notify-client App', () => {
  let page: TestLineNotifyClientPage;

  beforeEach(() => {
    page = new TestLineNotifyClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
