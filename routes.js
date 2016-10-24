// Home Page
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("homeLayout", {main: "signUp"});
    }
});
FlowRouter.route('/join', {
  name: 'join',
  action() {
    BlazeLayout.render("join", {main: "Home"});
  }
});
FlowRouter.route("/already-a-user/login", {
  name:"/already-a-user/login",
  action() {
    BlazeLayout.render("login",{main: "Home"});
  }
});
FlowRouter.route('/forgot-password', {
  name: 'forgot-passwords',
  action() {
    BlazeLayout.render("atForgotPwd", {main: "Home"});
  }
});
