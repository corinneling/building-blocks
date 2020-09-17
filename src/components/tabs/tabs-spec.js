import { expect } from 'chai';
import { JSDOM } from 'jsdom'; 
import { 	resetPreviousActiveTab, hidePreviousTabPanel, selectTab } from './helpers';

describe('Tabs', () => {
  beforeEach(() => {
    const dom = new JSDOM(
      `
      <html>
      <body>
        <button role="tab" id="beets-tab" aria-controls="beets-panel" aria-selected="true">
          Beets
        </button>
        <button role="tab" id="bears-tab" aria-controls="bears-panel" aria-selected="false">
          Bears
        </button>
        <button role="tab" id="battlestar-tab" aria-controls="battlestar-panel" aria-selected="false">
          Battlestar Galactica
        </button>
        <div role="tabpanel" id="beets-panel" aria-labelledby="beets-tab" aria-hidden="false"> 
          🚜
        </div>
        <div role="tabpanel" id="bears-panel" aria-labelledby="bears-tab" aria-hidden="true">
          🐻
        </div>
        <div role="tabpanel" id="battlestar-panel" aria-labelledby="battlestar-tab" aria-hidden="true">
          🛸
        </div>
      </body>
      </html>
      `, { url: `http://localhost` }
    )

    global.window = dom.window;
    global.document = dom.window.document;
  })

  it('sets a previously active tab button to aria-selected false', () => {
    // Arrange
    const beetsTab = document.querySelector('#beets-tab');
    // Act
    resetPreviousActiveTab();
    // Assert
    const beetsTabTabindex = beetsTab.getAttribute('aria-selected');
    expect(beetsTabTabindex).to.include('false');
  })

  it('sets a previously active tab button\'s tabindex to -1', () => {
    // Arrange
    const beetsTab = document.querySelector('#beets-tab');
    // Act
    resetPreviousActiveTab();
    // Assert
    const beetsTabTabindex = beetsTab.getAttribute('tabindex');
    expect(beetsTabTabindex).to.include('-1');
  })

  it('sets an visible tab panel to aria-hidden true', () => {
    // Arrange
    const beetsPanel = document.querySelector('#beets-panel');
    // Act
    hidePreviousTabPanel();
    // Assert
    const beetsPanelHiddenAttr = beetsPanel.getAttribute('aria-hidden');
    expect(beetsPanelHiddenAttr).to.equal('true');
  })

  describe('Selecting a new tab', () => {
    it('set\'s the new tab button to aria-selected true', () => {
      // Arrange
      const bearsTab = document.querySelector('#bears-tab');
      // Act
      selectTab(bearsTab);
      // Assert
      const bearsTabSelectedAttr = bearsTab.getAttribute('aria-selected');
      expect(bearsTab.getAttribute('aria-selected')).to.equal('true');
    })

    it('does nothing if no tab is selected', () => {
      // Arrange
      const bearsTab = document.querySelector('#bears-tab');
      // Act
      selectTab();
      // Assert
      const bearsTabSelectedAttr = bearsTab.getAttribute('aria-selected');
      expect(bearsTabSelectedAttr).to.equal('false');
    })

    it('set\'s the new tab button tabindex to 0', () => {
      // Arrange
      const bearsTab = document.querySelector('#bears-tab');
      // Act
      selectTab(bearsTab);
      // Assert
      const bearsTabTabindex = bearsTab.getAttribute('tabindex');
      expect(bearsTabTabindex).to.equal('0');
    })

    it('set\'s the corresponding tab panel to aria-hidden false', () => {
      // Arrange
      const bearsTab = document.querySelector('#bears-tab');
      const bearsPanel = document.querySelector('#bears-panel');
      // Act
      selectTab(bearsTab);
      // Assert
      const bearsPanelHiddenAttr = bearsPanel.getAttribute('aria-hidden');
      expect(bearsPanelHiddenAttr).to.equal('false');
    })
  })
})