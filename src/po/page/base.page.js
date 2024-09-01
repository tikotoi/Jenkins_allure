import { BasePageComponents, HeaderComponent } from "../components/index.js";
import {assert} from "chai";

export class Basepage {
  constructor() {
    this.basePageComponents = new BasePageComponents();
    this.headerComponent = new HeaderComponent();
  }

  async open() {
    await browser.url("https://trello.com/");
  }
  async logInSuccessfully (userName, password) {
    await this.open();
    await this.basePageComponents.item("logIn").waitForDisplayed();
    await this.basePageComponents.item("logIn").click();
    await this.basePageComponents.item("userName").setValue(userName);
    await this.basePageComponents.item("continueBtn").click();
    await this.basePageComponents.item("password").waitForDisplayed();
    await this.basePageComponents.item("password").setValue(password);
    await this.basePageComponents.item("logInBtn").click();
    const accountTitle = await this.headerComponent.item("account");
    const titleAttribute = await accountTitle.getAttribute("title");
    assert.equal(titleAttribute, "Wdio Task (wdiotask)", `User hasn't logged in successfully`);
  };
}
