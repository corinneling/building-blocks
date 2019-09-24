import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import { modalSetup, toggleHiddenValue } from '../js/modal/helpers';
// TO DO: see if i can add more tests to this file, such as testing focus management

describe('Modal', () => {
  beforeEach(() => {
    const dom = new JSDOM(
      `
      <html>
      <body class="no-js">
        <button class="trigger-annoyingness">Click If You Dare!</button>
        <div class="annoying" role="dialog" aria-hidden="false">
            I'm a Modal!
            <button class="close">Escape the Popup!</button>
        </div>
      </body>
      </html>
      `, {
        url: 'http://localhost'
      },
    )
    global.window = dom.window;
    global.document = dom.window.document;
  })

  afterEach(() => {
    const dom = new JSDOM(
      `
      <html>
      <body class="no-js">
        <button class="trigger-annoyingness">Click If You Dare!</button>
        <div class="annoying" role="dialog" aria-hidden="false">
          I'm a Modal!
          <button class="close">Escape the Popup!</button>
        </div>
      </body>
      </html>
      `, {
        url: 'http://localhost'
      },
    )
    global.window = dom.window;
    global.document = dom.window.document;
  })

  it('removes the no-js class', () => {
    // Arrange
    const body = document.querySelector('.no-js');
    const annoyingModal = document.querySelector('.annoying');
    // Act
    modalSetup(body, annoyingModal);
    // Assert
    expect(body.outerHTML).to.not.include('no-js')
  })

  it('set\'s the aria-hidden value to true', () => {
    // Arrange
    const body = document.querySelector('.no-js');
    const annoyingModal = document.querySelector('.annoying');
    // Act
    modalSetup(body, annoyingModal);
    // Assert
    expect(annoyingModal.outerHTML).to.include('aria-hidden="true"')
  })

  it('hides the modal when originally visible ', () => {
    // Arrange
    const modal = document.querySelector('.annoying');
    // Act
    toggleHiddenValue(modal);
    // Assert
    expect(modal.outerHTML).to.include('aria-hidden="true"')
  })

  it('shows the modal when visible ', () => {
    // Arrange
    const modal = document.querySelector('.annoying');
    // Act
    toggleHiddenValue(modal);
    toggleHiddenValue(modal);
    // Assert
    expect(modal.outerHTML).to.include('aria-hidden="false"')
  })
})
