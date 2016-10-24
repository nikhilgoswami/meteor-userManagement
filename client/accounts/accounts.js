AccountsTemplates.configure({
    // Behavior
    confirmPassword: false,
    enablePasswordChange: false,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: true,
    lowercaseUsername: false,
    focusFirstInput: false,

    // Appearance
    // showAddRemoveServices: false,
    showForgotPasswordLink: true,
    // showLabels: true,
    // showPlaceholders: true,
    showResendVerificationEmailLink:false,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/home',
    redirectTimeout: 4000,
    // forgotPwdLink: 'forgot-password',

    // Hooks
    // onLogoutHook: myLogoutFunc,
    // onSubmitHook: mySubmitFunc,
    // preSignUpHook: myPreSubmitFunc,
    // postSignUpHook: myPostSubmitFunc,

    // Texts
    texts: {

      inputIcons: {
         isValidating: "fa fa-spinner fa-spin",
         hasSuccess: "fa fa-check",
         hasError: "fa fa-times",
     },
     errors: {
            accountsCreationDisabled: "Client side accounts creation is disabled!!!",
            cannotRemoveService: "Cannot remove the only active service!",
            captchaVerification: "Captcha verification failed!",
            loginForbidden: "error.accounts.Login forbidden",
            mustBeLoggedIn: "error.accounts.Must be logged in",
            pwdMismatch: "error.pwdsDontMatch",
            validationErrors: "Validation Errors",
            verifyEmailFirst: "Please verify your email first. Check the email and follow the link!",
        },
      button: {
          signUp: "Get Started!"
      },
      socialSignUp: "Register",
      socialIcons: {
          "meteor-developer": "fa fa-rocket"
      },
      title: {
          forgotPwd: "Recover Your Password",
          signIn: 'Log In',
          signUp: 'Get started with a free account'
      },
    },
});

AccountsTemplates.removeField('email');
AccountsTemplates.removeField('password');
AccountsTemplates.addFields([
  {
    _id: 'userName',
    type:'text',
    displayName: 'Username',
    placeholder: 'Username',
    minLength: 6,
    required: true,
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid email',
  },{
    _id: 'password',
    type: 'password',
    required: true,
    displayName: 'Password',
    placeholder: 'Password',
    minLength: 6,
    re: /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
    errStr: 'At least 1 digit, 1 lower-case and 1 upper-case',
},
{
    _id: 'passwordConfirm',
    type: 'password',
    required: true,
    displayName: 'Confirm Password',
    placeholder: 'Confirm Password',
    minLength: 6,
    errStr: 'Sorry the password don\'t match!',
},

]);
