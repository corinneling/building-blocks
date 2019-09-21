function resetPreviousActiveTab() {
  const tabButtons = document.querySelectorAll('[role=tab]');
  tabButtons.forEach((button) => {
    const activeTab = button.getAttribute('aria-selected');
    if (activeTab === 'true') {
      button.setAttribute('aria-selected', 'false');
      button.setAttribute('tabindex', -1);
    }
  })
}

function hidePreviousTabPanel() {
  const tabPanels = document.querySelectorAll('[role=tabpanel]');
  tabPanels.forEach((panel) => {
    const activePanel = panel.getAttribute('aria-hidden');
    if (activePanel === 'false') {
      panel.setAttribute('aria-hidden', 'true');
    }
  })
}

function selectTab(selectedTab) {
  if (selectedTab) {
    resetPreviousActiveTab();
    hidePreviousTabPanel();

    selectedTab.setAttribute('aria-selected', 'true');
    selectedTab.setAttribute('tabindex', 0);
    const tabPanelId = selectedTab.getAttribute('aria-controls');
    const tabPanel = document.getElementById(tabPanelId);
    tabPanel.setAttribute('aria-hidden', 'false');
  }
}

function setActiveTab(e) {
  selectTab(e.target);
}

function setActiveTabKeyDown(e) {
  const tabButtons = document.querySelectorAll('[role=tab]');
  const currentTabIndex = [...tabButtons].indexOf(e.target);
  let nextTab = e.key === 'ArrowLeft' ? tabButtons[currentTabIndex - 1] : e.key === 'ArrowRight' ? tabButtons[currentTabIndex + 1] : null;

  if (nextTab) {
    nextTab.focus();
  }

  selectTab(nextTab);
}

function handleTabClick(buttons) {
  buttons.forEach((button) => {
    button.addEventListener('click', setActiveTab);
  });
}

function handleTabKeyDown(buttons) {
  buttons.forEach((button) => {
    button.addEventListener('keydown', setActiveTabKeyDown)
  });
}


export {
  handleTabClick,
  handleTabKeyDown,
  resetPreviousActiveTab,
  hidePreviousTabPanel,
  selectTab,
}

// TODO: update tabs so when you enter tab content you can tab backwards to the selected tab button