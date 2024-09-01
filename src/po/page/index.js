import { Basepage } from "./base.page.js";
import { HomePage } from "./home.page.js";
import { BoardPage } from "./board.page.js";

/**
 * @param {'basePage' | 'homePage' | 'boardPage'} name
 * @returns {'Basepage' | 'HomePage' | 'BoardPage'}
 */

function pages(name) {
  const items = {
    basePage: new Basepage(),
    homePage: new HomePage(),
    boardPage: new BoardPage(),
  };
  return items[name];
}

export { pages };
