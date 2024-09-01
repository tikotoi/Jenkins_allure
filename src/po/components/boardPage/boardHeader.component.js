export class BoardHeader {
  item(name) {
    const selector = {
      boardNameDisplay: "[data-testid='board-name-display']",
      filterBtn: "//div[text()='Filters']",
      filterInput: "//input[@placeholder='Enter a keyword…']",
      filter:
        "//span[@aria-label='Color: red, title: “Urgent”' and @data-color='red' and @data-testid='card-label']",
      visibilityBtn: ".WMmcWJ5gc165zK",
      private: "[data-testid='board-visibility-dropdown-Private']",
      checkIcon:
        "[data-testid='board-visibility-dropdown-Private'] span[data-testid='CheckIcon']",
      tableBtn: "//a[@data-testid='view-switcher-button-table']",
    };
    return $(selector[name]);
  }
}
