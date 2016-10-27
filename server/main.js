import { Accounts } from 'meteor/accounts-base'
import { Meteor } from 'meteor/meteor'
// if(Meteor.isServer){
Meteor.startup(() => {

    // process.env.MAIL_URL = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
    Accounts.emailTemplates.from='no-reply@yourdomain.com';
    Accounts.emailTemplates.sitename='My Site';
    Accounts.emailTemplates.verifyEmail.subject = function (user) {
      console.log('user');
      return 'Confirm Your Email Address';
    };
    Accounts.emailTemplates.verifyEmail.text = function (user, url) {
      return 'click on the following link to verify your email address: ' + url;
    };

});
var userId = Accounts.onCreateUser(function(options, user) {
    user.profile = {};

    // we wait for Meteor to create the user before sending an email
    Meteor.setTimeout(function() {
        Accounts.sendVerificationEmail(user._id);
    }, 2 * 1000);
    console.log('mail Sending');
    return user;
});
