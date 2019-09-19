import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import { toggleButton, toggleDetails } from '../js/multi-select-accordion';

describe('Set Aria Value - Helper', () => {
  describe('toggleButton', () => {
    beforeEach(() => {
      const dom = new JSDOM(
        `
        <html>
          <body>
            <button class="button" aria-expanded="true" aria-controls="section-one">Im A Button</button>
          </body>
        </html>`,
        {
          url: 'http://localhost',
        },
      );

      global.window = dom.window;
      global.document = dom.window.document;
    });

    it('set aria-expanded to value of false, when initially set to true', () => {
      // Arrange
      const button = document.querySelector('.button');
      // Act
      toggleButton(button);
      // Assert
      expect(button.outerHTML).to.include(`aria-expanded="false"`);
    })

    it('set aria-expanded to value of true, after it was set to false', () => {
      // Arrange
      const button = document.querySelector('.button');
      // Act
      toggleButton(button);
      toggleButton(button);
      // Assert
      expect(button.outerHTML).to.include(`aria-expanded="true"`);
    })
  })

  describe('toggleContent', () => {
    beforeEach(() => {
      const dom = new JSDOM(
        `
        <html>
          <body>
            <button class="button" aria-expanded="true" aria-controls="section-one">Im A Button</button>
            <div class="section" id="section-one" aria-hidden="false">Section One</div>
          </body>
        </html>`,
        {
          url: 'http://localhost',
        },
      );

      global.window = dom.window;
      global.document = dom.window.document;
    });

    it('set aria-hidden of content to value of true, when initially set to false', () => {
      // Arrange
      const button = document.querySelector('.button');
      const section = document.querySelector('.section');
      // Act
      toggleDetails(button);
      // Assert
      expect(section.outerHTML).to.include(`aria-hidden="true"`);
    })

    it('set aria-hidden of content to value of false, when initially set to true', () => {
      // Arrange
      const button = document.querySelector('.button');
      const section = document.querySelector('.section');
      // Act
      toggleDetails(button);
      toggleDetails(button);
      // Assert
      expect(section.outerHTML).to.include(`aria-hidden="false"`);
    })
  })
})