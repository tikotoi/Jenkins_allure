export class HomeBodyComponents {
  item(name) {
    const selector = {
      bio: "#bio",
      saveBtn: "//button[text()='Save']",
      saveText: "//span[text()='Saved']",
      newBoard: "//span[text()='Create new board']",
      boardTitle: "[data-testid='create-board-title-input']",
      createBtn: "//button[text()='Create']",
    };
    return $(selector[name]);
  }
}
