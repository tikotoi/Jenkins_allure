export class BasePageComponents {
  item(name) {
    const selector = {
      logIn: "//a[text()='Log in']",
      userName: "#username",
      continueBtn: "#login-submit",
      password: "#password",
      logInBtn: ".css-178ag6o",
    };
    return $(selector[name]);
  }
}
