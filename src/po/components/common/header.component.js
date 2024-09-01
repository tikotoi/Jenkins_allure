export class HeaderComponent {
  item(name) {
    const selector = {
      account: "[data-testid='header-member-menu-avatar']",
      profile: "//span[text()='Profile and visibility']",
      logo: "//a[@aria-label='Back to home']",
      search: "//input[@placeholder='Search']",
      searchInput: "//input[@placeholder='Search Trello']",
      searchResult: ".css-1a9l0m2",
    };
    return $(selector[name]);
  }
}
