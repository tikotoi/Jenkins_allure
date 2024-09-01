export class RandomTitleGenerator {
  static randomTitleGenerator() {
    return (Math.random() + 1).toString(36).substring(5);
  }

  static titleGenerator(type) {
    if (type !== "list" && type !== "card" && type !== "board") {
      throw new Error(`Invalid ${type}. Use 'list' or 'card' or 'board'`);
    }
    return `${
      type.charAt(0).toUpperCase() + type.slice(1)
    }_${this.randomTitleGenerator()}`;
  }
}
