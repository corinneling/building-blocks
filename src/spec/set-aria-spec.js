import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import setInitialAriaValue from '../js/helpers/set-aria';

describe('Set Aria Value - Helper', () => {
  beforeEach(() => {
    const dom = new JSDOM(
      `
      <html>
        <body>
          <button class="button" aria-expanded="true">Im A Button</button>
          <button class="button" aria-expanded="true">Im A Button</button>
          <button class="button" aria-expanded="true">Im A Button</button>
        </body>
      </html>`,
      {
        url: 'http://localhost',
      },
    );

    global.window = dom.window;
    global.document = dom.window.document;
  });

  it('Sets initial aria value on page load', () => {
    // Arrange
    const buttons = document.querySelectorAll('.button');
    // Act
    setInitialAriaValue(buttons, 'aria-expanded', false);
    // Assert
    expect(buttons[2].outerHTML).to.include(`aria-expanded="false"`);
  })

  it('does not set aria value if there is no matching aria attribute', () => {
    // Arrange
    const buttons = document.querySelectorAll('.button');
    // Act
    setInitialAriaValue(buttons, 'aria-hidden', true);
    // Assert
    expect(buttons[1].outerHTML).to.not.include(`aria-hidden`);
  })
})