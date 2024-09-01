import { pages } from "../../po/page/index.js";
import { RandomTitleGenerator } from "../../po/components/index.js";
const boardName = RandomTitleGenerator.titleGenerator("board");
const listTitle = RandomTitleGenerator.titleGenerator("list");
const cardName = RandomTitleGenerator.titleGenerator("card");

describe("Trello BDD Scenarios", () => {
  before(async () => {
    await pages("basePage").logInSuccessfully("wdiotask@gmail.com", "11112222==");
  });

  it("User Update Profile Info", async () => {
    await pages("homePage").updateBioInProfileInfo("WDIO Practical Task _ Tinatin Abuladze");
  });

  it("User Creates New Board", async () => {
    await pages("homePage").createsNewBoard(boardName);
  });

  it("User Search For Board", async () => {
    await pages("boardPage").searchForBoard("Example test case");
  });

  it("User Creates New List", async () => {
    await pages("boardPage").createsNewList(listTitle);
  });

  it("User Creates New Card", async () => {
    await pages("boardPage").createsNewCard(cardName);
  });

  it("User Filtering Card By Label", async () => {
    await pages("boardPage").filteringCardByLabel("Urgent");
  });

  it("User Changes Visibility", async () => {
    await pages("boardPage").changesVisibility();
  });

  it.skip("User Changes Board to Table", async () => {
    await pages("boardPage").changeBoardToTable();
  });
});
