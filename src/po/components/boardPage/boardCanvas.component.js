export class BoardCanvas {
  item(name) {
    const selector = {
      addList: "//button[text()='Add another list']",
      listValue: "//textarea[@placeholder='Enter list name…']",
      addListBtn: "//button[text()='Add list']",
      cardValue: "[data-testid='list-card-composer-textarea']",
      addCardBtn: "//button[text()='Add card']",
      tableBody: "[data-testid='table-body']",
    };
    return $(selector[name]);
  }

  addNewCard() {
    return $$("[data-testid='list-add-card-button']")[1];
  }

  getListByTitle(title) {
    return $(`//h2[@data-testid='list-name' and text()='${title}']`);
  }

  getCardByName(name) {
    return $(`//a[@data-testid='card-name' and text()='${name}']`);
  }

  getAllCards() {
    return $$("li[data-testid='list-card']");
  }

  urgentCards = [];
  nonUrgentCards = [];

  async checkOnlyUrgentCardsDisplayed() {
    const cards = await this.getAllCards();

    for (const card of cards) {
      const cardText = await card.getText();
      const isDisplayed = await card.isDisplayed();

      if (cardText.includes("Urgent") && isDisplayed) {
        this.urgentCards.push(card);
      } else if (isDisplayed) {
        this.nonUrgentCards.push(card);
      }
    }
  }
}
