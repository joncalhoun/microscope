//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Deps = Package.deps.Deps;
var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;
var Accounts = Package['accounts-base'].Accounts;
var _ = Package.underscore._;
var Template = Package.templating.Template;
var Handlebars = Package.handlebars.Handlebars;
var Spark = Package.spark.Spark;
var Session = Package.session.Session;

/* Package-scope variables */
var passwordSignupFields, displayName, getLoginServices, hasPasswordService, dropdown, validateUsername, validateEmail, validatePassword;

(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/accounts-ui-bootstrap-dropdown/accounts_ui.js                                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Accounts.ui = {};                                                                                                    // 1
                                                                                                                     // 2
Accounts.ui._options = {                                                                                             // 3
  requestPermissions: {},                                                                                            // 4
  requestOfflineToken: {}                                                                                            // 5
};                                                                                                                   // 6
                                                                                                                     // 7
Accounts.ui.config = function(options) {                                                                             // 8
  // validate options keys                                                                                           // 9
  var VALID_KEYS = ['passwordSignupFields', 'requestPermissions', 'requestOfflineToken'];                            // 10
  _.each(_.keys(options), function (key) {                                                                           // 11
    if (!_.contains(VALID_KEYS, key))                                                                                // 12
      throw new Error("Accounts.ui.config: Invalid key: " + key);                                                    // 13
  });                                                                                                                // 14
                                                                                                                     // 15
  // deal with `passwordSignupFields`                                                                                // 16
  if (options.passwordSignupFields) {                                                                                // 17
    if (_.contains([                                                                                                 // 18
      "USERNAME_AND_EMAIL",                                                                                          // 19
      "USERNAME_AND_OPTIONAL_EMAIL",                                                                                 // 20
      "USERNAME_ONLY",                                                                                               // 21
      "EMAIL_ONLY"                                                                                                   // 22
    ], options.passwordSignupFields)) {                                                                              // 23
      if (Accounts.ui._options.passwordSignupFields)                                                                 // 24
        throw new Error("Accounts.ui.config: Can't set `passwordSignupFields` more than once");                      // 25
      else                                                                                                           // 26
        Accounts.ui._options.passwordSignupFields = options.passwordSignupFields;                                    // 27
    } else {                                                                                                         // 28
      throw new Error("Accounts.ui.config: Invalid option for `passwordSignupFields`: " + options.passwordSignupFields);
    }                                                                                                                // 30
  }                                                                                                                  // 31
                                                                                                                     // 32
  // deal with `requestPermissions`                                                                                  // 33
  if (options.requestPermissions) {                                                                                  // 34
    _.each(options.requestPermissions, function (scope, service) {                                                   // 35
      if (Accounts.ui._options.requestPermissions[service]) {                                                        // 36
        throw new Error("Accounts.ui.config: Can't set `requestPermissions` more than once for " + service);         // 37
      } else if (!(scope instanceof Array)) {                                                                        // 38
        throw new Error("Accounts.ui.config: Value for `requestPermissions` must be an array");                      // 39
      } else {                                                                                                       // 40
        Accounts.ui._options.requestPermissions[service] = scope;                                                    // 41
      }                                                                                                              // 42
    });                                                                                                              // 43
  }                                                                                                                  // 44
                                                                                                                     // 45
  // deal with `requestOfflineToken`                                                                                 // 46
  if (options.requestOfflineToken) {                                                                                 // 47
    _.each(options.requestOfflineToken, function (value, service) {                                                  // 48
      if (service !== 'google')                                                                                      // 49
        throw new Error("Accounts.ui.config: `requestOfflineToken` only supported for Google login at the moment."); // 50
                                                                                                                     // 51
      if (Accounts.ui._options.requestOfflineToken[service]) {                                                       // 52
        throw new Error("Accounts.ui.config: Can't set `requestOfflineToken` more than once for " + service);        // 53
      } else {                                                                                                       // 54
        Accounts.ui._options.requestOfflineToken[service] = value;                                                   // 55
      }                                                                                                              // 56
    });                                                                                                              // 57
  }                                                                                                                  // 58
};                                                                                                                   // 59
                                                                                                                     // 60
passwordSignupFields = function () {                                                                                 // 61
  return Accounts.ui._options.passwordSignupFields || "EMAIL_ONLY";                                                  // 62
};                                                                                                                   // 63
                                                                                                                     // 64
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/accounts-ui-bootstrap-dropdown/template.login_buttons.js                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.__define__("_loginButtons",Package.handlebars.Handlebars.json_ast_to_func(["<div id=\"login-buttons\" class=\"login-buttons-dropdown-align-",["{",[[0,"align"]]],"\">\n    ",["#",[[0,"if"],[0,"currentUser"]],["\n      ",["#",[[0,"if"],[0,"loggingIn"]],["\n        ","\n        ",["#",[[0,"if"],[0,"dropdown"]],["\n          ",[">","_loginButtonsLoggingIn"],"\n        "],["\n          <div class=\"login-buttons-with-only-one-button\">\n            ",[">","_loginButtonsLoggingInSingleLoginButton"],"\n          </div>\n        "]],"\n      "],["\n        ",[">","_loginButtonsLoggedIn"],"\n      "]],"\n    "],["\n      ",[">","_loginButtonsLoggedOut"],"\n    "]],"\n  </div>"]));
Template.__define__("_loginButtonsLoggedIn",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"if"],[0,"dropdown"]],["\n    ",[">","_loginButtonsLoggedInDropdown"],"\n  "],["\n    <div class=\"login-buttons-with-only-one-button\">\n      ",[">","_loginButtonsLoggedInSingleLogoutButton"],"\n    </div>\n  "]]]));
Template.__define__("_loginButtonsLoggedOut",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"if"],[0,"services"]],[" ","\n    ",["#",[[0,"if"],[0,"configurationLoaded"]],["\n      ",["#",[[0,"if"],[0,"dropdown"]],[" ","\n        ",[">","_loginButtonsLoggedOutDropdown"],"\n      "],["\n        ",["#",[[0,"with"],[0,"singleService"]],[" ","\n          <div class=\"login-buttons-with-only-one-button\">\n            ",["#",[[0,"if"],[0,"loggingIn"]],["\n              ",[">","_loginButtonsLoggingInSingleLoginButton"],"\n            "],["\n              ",[">","_loginButtonsLoggedOutSingleLoginButton"],"\n            "]],"\n          </div>\n        "]],"\n      "]],"\n    "]],"\n  "],["\n    <div class=\"no-services\">No login services configured</div>\n  "]]]));
Template.__define__("_loginButtonsMessages",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"if"],[0,"errorMessage"]],["\n    <div class=\"alert alert-error\">",["{",[[0,"errorMessage"]]],"</div>\n  "]],"\n  ",["#",[[0,"if"],[0,"infoMessage"]],["\n    <div class=\"alert alert-success no-margin\">",["{",[[0,"infoMessage"]]],"</div>\n  "]]]));
Template.__define__("_loginButtonsLoggingIn",Package.handlebars.Handlebars.json_ast_to_func([[">","_loginButtonsLoggingInPadding"],"\n  <div class=\"loading\">&nbsp;</div>\n  ",[">","_loginButtonsLoggingInPadding"]]));
Template.__define__("_loginButtonsLoggingInPadding",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"unless"],[0,"dropdown"]],["\n    ","\n    <div class=\"login-buttons-padding\">\n      <div class=\"login-button single-login-button\" style=\"visibility: hidden;\" id=\"login-buttons-logout\">&nbsp;</div>\n    </div>\n  "],["\n    ","\n    <div class=\"login-buttons-padding\" />\n  "]]]));
                                                                                                                     // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/accounts-ui-bootstrap-dropdown/template.login_buttons_single.js                                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.__define__("_loginButtonsLoggedOutSingleLoginButton",Package.handlebars.Handlebars.json_ast_to_func(["<div class=\"login-text-and-button\">\n    <div class=\"login-button single-login-button ",["#",[[0,"unless"],[0,"configured"]],["configure-button"]],"\"\n         id=\"login-buttons-",["{",[[0,"name"]]],"\">\n      <div class=\"login-image\" id=\"login-buttons-image-",["{",[[0,"name"]]],"\"></div>\n      ",["#",[[0,"if"],[0,"configured"]],["\n        <span class=\"text-besides-image sign-in-text-",["{",[[0,"name"]]],"\">Sign in with ",["{",[[0,"capitalizedName"]]],"</span>\n      "],["\n        <span class=\"text-besides-image configure-text-",["{",[[0,"name"]]],"\">Configure ",["{",[[0,"capitalizedName"]]]," Login</span>\n      "]],"\n    </div>\n  </div>"]));
Template.__define__("_loginButtonsLoggingInSingleLoginButton",Package.handlebars.Handlebars.json_ast_to_func(["<div class=\"login-text-and-button\">\n    ",[">","_loginButtonsLoggingIn"],"\n  </div>"]));
Template.__define__("_loginButtonsLoggedInSingleLogoutButton",Package.handlebars.Handlebars.json_ast_to_func(["<div class=\"login-text-and-button\">\n    <div class=\"login-display-name\">\n      ",["{",[[0,"displayName"]]],"\n    </div>\n    <div class=\"login-button single-login-button\" id=\"login-buttons-logout\">Sign Out</div>\n  </div>"]));
                                                                                                                     // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/accounts-ui-bootstrap-dropdown/template.login_buttons_dropdown.js                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.__define__("_loginButtonsLoggedInDropdown",Package.handlebars.Handlebars.json_ast_to_func(["<div class=\"dropdown\">\n    <ul class=\"nav pull-right\">\n      <li id=\"login-dropdown-list\">\n        <a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">",["{",[[0,"displayName"]]],"<strong class=\"caret\"></strong></a>\n        <div class=\"dropdown-menu\" style=\"padding: 20px; padding-bottom: 20px;\">   \n          ",["#",[[0,"if"],[0,"inMessageOnlyFlow"]],["\n            ",[">","_loginButtonsMessages"],"\n          "],["\n            ",["#",[[0,"if"],[0,"inChangePasswordFlow"]],["\n              ",[">","_loginButtonsChangePassword"],"\n            "],["\n              ",[">","_loginButtonsLoggedInDropdownActions"],"\n            "]],"\n          "]],"\n        </div>\n      </li>\n    </ul>\n  </div>"]));
Template.__define__("_loginButtonsLoggedInDropdownActions",Package.handlebars.Handlebars.json_ast_to_func(["<button class=\"btn btn-block btn-primary\" id=\"login-buttons-logout\">Sign out</button>\n  ",["#",[[0,"if"],[0,"allowChangingPassword"]],["\n    <button class=\"btn btn-block\" id=\"login-buttons-open-change-password\">Change password</button>\n  "]]]));
Template.__define__("_loginButtonsLoggedOutDropdown",Package.handlebars.Handlebars.json_ast_to_func(["<div class=\"nav-collapse collapse\">\n    <ul class=\"nav pull-right\">\n      <li id=\"login-dropdown-list\" class=\"dropdown\">\n        <a class=\"dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">Sign In / Up <strong class=\"caret\"></strong></a>\n        <div class=\"dropdown-menu\" style=\"padding: 20px; padding-bottom: 20px;\">   \n          ",[">","_loginButtonsLoggedOutAllServices"],"\n        </div>\n      </li>\n    </ul>\n  </div>"]));
Template.__define__("_loginButtonsLoggedOutAllServices",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"each"],[0,"services"]],["\n    ",["#",[[0,"if"],[0,"isPasswordService"]],["\n      ",["#",[[0,"if"],[0,"hasOtherServices"]],[" ","\n        ",[">","_loginButtonsLoggedOutPasswordServiceSeparator"],"\n      "]],"\n      ",[">","_loginButtonsLoggedOutPasswordService"],"\n    "],["\n      ",[">","_loginButtonsLoggedOutSingleLoginButton"],"\n    "]],"\n  "]],"\n  ",["#",[[0,"unless"],[0,"hasPasswordService"]],["\n    ",[">","_loginButtonsMessages"],"\n  "]]]));
Template.__define__("_loginButtonsLoggedOutPasswordServiceSeparator",Package.handlebars.Handlebars.json_ast_to_func(["<div class=\"or\">\n    <span class=\"hline\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n    <span class=\"or-text\">or</span>\n    <span class=\"hline\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n  </div>"]));
Template.__define__("_loginButtonsLoggedOutPasswordService",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"if"],[0,"inForgotPasswordFlow"]],["\n    ",[">","_forgotPasswordForm"],"\n  "],["\n    ",["#",[[0,"each"],[0,"fields"]],["\n      ",[">","_loginButtonsFormField"],"\n    "]],"\n    ",[">","_loginButtonsMessages"],"\n    <button class=\"btn btn-primary\" id=\"login-buttons-password\" type=\"button\">\n      ",["#",[[0,"if"],[0,"inSignupFlow"]],["\n        Create\n      "],["\n        Sign in\n      "]],"\n    </button>\n    ",["#",[[0,"if"],[0,"inLoginFlow"]],["\n      ",["#",[[0,"if"],[0,"showCreateAccountLink"]],["\n        <button id=\"signup-link\" class=\"btn\" type=\"button\">Create account</button>\n      "]],"\n      ",["#",[[0,"if"],[0,"showForgotPasswordLink"]],["\n      <div>\n        <a id=\"forgot-password-link\">Forgot password</a>\n      </div>\n      "]],"\n    "]],"\n    ",["#",[[0,"if"],[0,"inSignupFlow"]],["\n      ",[">","_loginButtonsBackToLoginLink"],"\n    "]],"\n  "]]]));
Template.__define__("_forgotPasswordForm",Package.handlebars.Handlebars.json_ast_to_func(["<div class=\"login-form\">\n    <div id=\"forgot-password-email-label-and-input\"> ","\n      <label id=\"forgot-password-email-label\" for=\"forgot-password-email\">Email</label>\n      <input id=\"forgot-password-email\" type=\"email\"/>\n    </div>\n    ",[">","_loginButtonsMessages"],"\n    <button class=\"btn btn-primary login-button-form-submit\" id=\"login-buttons-forgot-password\">Reset password</button>\n    ",[">","_loginButtonsBackToLoginLink"],"\n  </div>"]));
Template.__define__("_loginButtonsBackToLoginLink",Package.handlebars.Handlebars.json_ast_to_func(["<button id=\"back-to-login-link\" class=\"btn\">Cancel</button>"]));
Template.__define__("_loginButtonsFormField",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"if"],[0,"visible"]],["\n    <label id=\"login-",["{",[[0,"fieldName"]]],"-label\" for=\"login-",["{",[[0,"fieldName"]]],"\">",["{",[[0,"fieldLabel"]]],"</label>\n    <input id=\"login-",["{",[[0,"fieldName"]]],"\" type=\"",["{",[[0,"inputType"]]],"\" />\n  "]]]));
Template.__define__("_loginButtonsChangePassword",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"each"],[0,"fields"]],["\n    ",[">","_loginButtonsFormField"],"\n  "]],"\n  ",[">","_loginButtonsMessages"],"\n  <div>\n    <button class=\"btn btn-primary\" id=\"login-buttons-do-change-password\">Change password</button>\n    <button class=\"btn login-close\">Close</button>\n  </div>"]));
                                                                                                                     // 11
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/accounts-ui-bootstrap-dropdown/template.login_buttons_dialogs.js                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Meteor.startup(function(){document.body.appendChild(Spark.render(Template.__define__(null,Package.handlebars.Handlebars.json_ast_to_func([[">","_resetPasswordDialog"],"\n  ",[">","_enrollAccountDialog"],"\n  ",[">","_justVerifiedEmailDialog"],"\n  ",[">","_configureLoginServiceDialog"],"\n\n  <!-- if we're not showing a dropdown, we need some other place to show messages -->\n  ",[">","_loginButtonsMessagesDialog"]]))));});Template.__define__("_resetPasswordDialog",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"if"],[0,"inResetPasswordFlow"]],["\n    <div class=\"hide-background\"></div>\n\n    <div class=\"accounts-dialog accounts-centered-dialog\">\n      <label id=\"reset-password-new-password-label\" for=\"reset-password-new-password\">\n        New password\n      </label>\n      <input id=\"reset-password-new-password\" type=\"password\" />\n      ",[">","_loginButtonsMessages"],"\n      <div class=\"login-button login-button-form-submit\" id=\"login-buttons-reset-password-button\">\n        Set password\n      </div>\n      <a class=\"accounts-close\" id=\"login-buttons-cancel-reset-password\">&times;</a>\n    </div>\n  "]]]));
Template.__define__("_enrollAccountDialog",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"if"],[0,"inEnrollAccountFlow"]],["\n    <div class=\"hide-background\"></div>\n    <div class=\"accounts-dialog accounts-centered-dialog\">\n      <label id=\"enroll-account-password-label\" for=\"enroll-account-password\">\n        Choose a password\n      </label>\n      <input id=\"enroll-account-password\" type=\"password\" />\n      ",[">","_loginButtonsMessages"],"\n      <div class=\"login-button login-button-form-submit\" id=\"login-buttons-enroll-account-button\">\n        Create account\n      </div>\n      <a class=\"accounts-close\" id=\"login-buttons-cancel-enroll-account\">&times;</a>\n    </div>\n  "]]]));
Template.__define__("_justVerifiedEmailDialog",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"if"],[0,"visible"]],["\n    <div class=\"accounts-dialog accounts-centered-dialog\">\n      Email verified\n      <div class=\"login-button\" id=\"just-verified-dismiss-button\">Dismiss</div>\n    </div>\n  "]]]));
Template.__define__("_configureLoginServiceDialog",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"if"],[0,"visible"]],["\n    <div id=\"configure-login-service-dialog\" class=\"accounts-dialog accounts-centered-dialog\">\n      ",["!",[[0,"configurationSteps"]]],"\n      <p>\n        Now, copy over some details.\n      </p>\n      <p>\n        <table>\n          <colgroup>\n            <col span=\"1\" class=\"configuration_labels\">\n            <col span=\"1\" class=\"configuration_inputs\">\n          </colgroup>\n          ",["#",[[0,"each"],[0,"configurationFields"]],["\n            <tr>\n              <td>\n                <label for=\"configure-login-service-dialog-",["{",[[0,"property"]]],"\">",["{",[[0,"label"]]],"</label>\n              </td>\n              <td>\n                <input id=\"configure-login-service-dialog-",["{",[[0,"property"]]],"\" type=\"text\" />\n              </td>\n            </tr>\n          "]],"\n        </table>\n      </p>\n      <div class=\"new-section\">\n        <div class=\"login-button configure-login-service-dismiss-button\">\n          I'll do this later\n        </div>\n        <a class=\"accounts-close configure-login-service-dismiss-button\">&times;</a>\n\n        ",["#",[[0,"isolate"]],["\n          <div class=\"login-button login-button-configure ",["#",[[0,"if"],[0,"saveDisabled"]],["login-button-disabled"]],"\"\n             id=\"configure-login-service-dialog-save-configuration\">\n            Save Configuration\n          </div>\n        "]],"\n      </div>\n    </div>\n  "]]]));
Template.__define__("_loginButtonsMessagesDialog",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"if"],[0,"visible"]],["\n    <div class=\"accounts-dialog accounts-centered-dialog\" id=\"login-buttons-message-dialog\">\n      ",[">","_loginButtonsMessages"],"\n      <div class=\"login-button\" id=\"messages-dialog-dismiss-button\">Dismiss</div>\n    </div>\n  "]]]));
                                                                                                                     // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/accounts-ui-bootstrap-dropdown/login_buttons_session.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var VALID_KEYS = [                                                                                                   // 1
  'dropdownVisible',                                                                                                 // 2
                                                                                                                     // 3
  // XXX consider replacing these with one key that has an enum for values.                                          // 4
  'inSignupFlow',                                                                                                    // 5
  'inForgotPasswordFlow',                                                                                            // 6
  'inChangePasswordFlow',                                                                                            // 7
  'inMessageOnlyFlow',                                                                                               // 8
                                                                                                                     // 9
  'errorMessage',                                                                                                    // 10
  'infoMessage',                                                                                                     // 11
                                                                                                                     // 12
  // dialogs with messages (info and error)                                                                          // 13
  'resetPasswordToken',                                                                                              // 14
  'enrollAccountToken',                                                                                              // 15
  'justVerifiedEmail',                                                                                               // 16
                                                                                                                     // 17
  'configureLoginServiceDialogVisible',                                                                              // 18
  'configureLoginServiceDialogServiceName',                                                                          // 19
  'configureLoginServiceDialogSaveDisabled'                                                                          // 20
];                                                                                                                   // 21
                                                                                                                     // 22
var validateKey = function (key) {                                                                                   // 23
  if (!_.contains(VALID_KEYS, key))                                                                                  // 24
    throw new Error("Invalid key in loginButtonsSession: " + key);                                                   // 25
};                                                                                                                   // 26
                                                                                                                     // 27
var KEY_PREFIX = "Meteor.loginButtons.";                                                                             // 28
                                                                                                                     // 29
// XXX This should probably be package scope rather than exported                                                    // 30
// (there was even a comment to that effect here from before we had                                                  // 31
// namespacing) but accounts-ui-viewer uses it, so leave it as is for                                                // 32
// now                                                                                                               // 33
Accounts._loginButtonsSession = {                                                                                    // 34
  set: function(key, value) {                                                                                        // 35
    validateKey(key);                                                                                                // 36
    if (_.contains(['errorMessage', 'infoMessage'], key))                                                            // 37
      throw new Error("Don't set errorMessage or infoMessage directly. Instead, use errorMessage() or infoMessage().");
                                                                                                                     // 39
    this._set(key, value);                                                                                           // 40
  },                                                                                                                 // 41
                                                                                                                     // 42
  _set: function(key, value) {                                                                                       // 43
    Session.set(KEY_PREFIX + key, value);                                                                            // 44
  },                                                                                                                 // 45
                                                                                                                     // 46
  get: function(key) {                                                                                               // 47
    validateKey(key);                                                                                                // 48
    return Session.get(KEY_PREFIX + key);                                                                            // 49
  },                                                                                                                 // 50
                                                                                                                     // 51
  closeDropdown: function () {                                                                                       // 52
    this.set('inSignupFlow', false);                                                                                 // 53
    this.set('inForgotPasswordFlow', false);                                                                         // 54
    this.set('inChangePasswordFlow', false);                                                                         // 55
    this.set('inMessageOnlyFlow', false);                                                                            // 56
    this.set('dropdownVisible', false);                                                                              // 57
    this.resetMessages();                                                                                            // 58
  },                                                                                                                 // 59
                                                                                                                     // 60
  infoMessage: function(message) {                                                                                   // 61
    this._set("errorMessage", null);                                                                                 // 62
    this._set("infoMessage", message);                                                                               // 63
    this.ensureMessageVisible();                                                                                     // 64
  },                                                                                                                 // 65
                                                                                                                     // 66
  errorMessage: function(message) {                                                                                  // 67
    this._set("errorMessage", message);                                                                              // 68
    this._set("infoMessage", null);                                                                                  // 69
    this.ensureMessageVisible();                                                                                     // 70
  },                                                                                                                 // 71
                                                                                                                     // 72
  // is there a visible dialog that shows messages (info and error)                                                  // 73
  isMessageDialogVisible: function () {                                                                              // 74
    return this.get('resetPasswordToken') ||                                                                         // 75
      this.get('enrollAccountToken') ||                                                                              // 76
      this.get('justVerifiedEmail');                                                                                 // 77
  },                                                                                                                 // 78
                                                                                                                     // 79
  // ensure that somethings displaying a message (info or error) is                                                  // 80
  // visible.  if a dialog with messages is open, do nothing;                                                        // 81
  // otherwise open the dropdown.                                                                                    // 82
  //                                                                                                                 // 83
  // notably this doesn't matter when only displaying a single login                                                 // 84
  // button since then we have an explicit message dialog                                                            // 85
  // (_loginButtonsMessageDialog), and dropdownVisible is ignored in                                                 // 86
  // this case.                                                                                                      // 87
  ensureMessageVisible: function () {                                                                                // 88
    if (!this.isMessageDialogVisible())                                                                              // 89
      this.set("dropdownVisible", true);                                                                             // 90
  },                                                                                                                 // 91
                                                                                                                     // 92
  resetMessages: function () {                                                                                       // 93
    this._set("errorMessage", null);                                                                                 // 94
    this._set("infoMessage", null);                                                                                  // 95
  },                                                                                                                 // 96
                                                                                                                     // 97
  configureService: function (name) {                                                                                // 98
    this.set('configureLoginServiceDialogVisible', true);                                                            // 99
    this.set('configureLoginServiceDialogServiceName', name);                                                        // 100
    this.set('configureLoginServiceDialogSaveDisabled', true);                                                       // 101
  }                                                                                                                  // 102
};                                                                                                                   // 103
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/accounts-ui-bootstrap-dropdown/login_buttons.js                                                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// for convenience                                                                                                   // 1
var loginButtonsSession = Accounts._loginButtonsSession;                                                             // 2
                                                                                                                     // 3
Handlebars.registerHelper(                                                                                           // 4
  "loginButtons",                                                                                                    // 5
  function (options) {                                                                                               // 6
    if (options.hash.align === "right")                                                                              // 7
      return new Handlebars.SafeString(Template._loginButtons({align: "right"}));                                    // 8
    else                                                                                                             // 9
      return new Handlebars.SafeString(Template._loginButtons({align: "left"}));                                     // 10
  });                                                                                                                // 11
                                                                                                                     // 12
// shared between dropdown and single mode                                                                           // 13
Template._loginButtons.events({                                                                                      // 14
  'click #login-buttons-logout': function() {                                                                        // 15
    Meteor.logout(function () {                                                                                      // 16
      loginButtonsSession.closeDropdown();                                                                           // 17
    });                                                                                                              // 18
  }                                                                                                                  // 19
});                                                                                                                  // 20
                                                                                                                     // 21
Template._loginButtons.preserve({                                                                                    // 22
  'input[id]': Spark._labelFromIdOrName                                                                              // 23
});                                                                                                                  // 24
                                                                                                                     // 25
//                                                                                                                   // 26
// helpers                                                                                                           // 27
//                                                                                                                   // 28
                                                                                                                     // 29
displayName = function () {                                                                                          // 30
  var user = Meteor.user();                                                                                          // 31
  if (!user)                                                                                                         // 32
    return '';                                                                                                       // 33
                                                                                                                     // 34
  if (user.profile && user.profile.name)                                                                             // 35
    return user.profile.name;                                                                                        // 36
  if (user.username)                                                                                                 // 37
    return user.username;                                                                                            // 38
  if (user.emails && user.emails[0] && user.emails[0].address)                                                       // 39
    return user.emails[0].address;                                                                                   // 40
                                                                                                                     // 41
  return '';                                                                                                         // 42
};                                                                                                                   // 43
                                                                                                                     // 44
// returns an array of the login services used by this app. each                                                     // 45
// element of the array is an object (eg {name: 'facebook'}), since                                                  // 46
// that makes it useful in combination with handlebars {{#each}}.                                                    // 47
//                                                                                                                   // 48
// don't cache the output of this function: if called during startup (before                                         // 49
// oauth packages load) it might not include them all.                                                               // 50
//                                                                                                                   // 51
// NOTE: It is very important to have this return password last                                                      // 52
// because of the way we render the different providers in                                                           // 53
// login_buttons_dropdown.html                                                                                       // 54
getLoginServices = function () {                                                                                     // 55
  var self = this;                                                                                                   // 56
                                                                                                                     // 57
  // First look for OAuth services.                                                                                  // 58
  var services = Package['accounts-oauth'] ? Accounts.oauth.serviceNames() : [];                                     // 59
                                                                                                                     // 60
  // Be equally kind to all login services. This also preserves                                                      // 61
  // backwards-compatibility. (But maybe order should be                                                             // 62
  // configurable?)                                                                                                  // 63
  services.sort();                                                                                                   // 64
                                                                                                                     // 65
  // Add password, if it's there; it must come last.                                                                 // 66
  if (hasPasswordService())                                                                                          // 67
    services.push('password');                                                                                       // 68
                                                                                                                     // 69
  return _.map(services, function(name) {                                                                            // 70
    return {name: name};                                                                                             // 71
  });                                                                                                                // 72
};                                                                                                                   // 73
                                                                                                                     // 74
hasPasswordService = function () {                                                                                   // 75
  return !!Package['accounts-password'];                                                                             // 76
};                                                                                                                   // 77
                                                                                                                     // 78
dropdown = function () {                                                                                             // 79
  return hasPasswordService() || getLoginServices().length > 1;                                                      // 80
};                                                                                                                   // 81
                                                                                                                     // 82
// XXX improve these. should this be in accounts-password instead?                                                   // 83
//                                                                                                                   // 84
// XXX these will become configurable, and will be validated on                                                      // 85
// the server as well.                                                                                               // 86
validateUsername = function (username) {                                                                             // 87
  if (username.length >= 3) {                                                                                        // 88
    return true;                                                                                                     // 89
  } else {                                                                                                           // 90
    loginButtonsSession.errorMessage("Username must be at least 3 characters long");                                 // 91
    return false;                                                                                                    // 92
  }                                                                                                                  // 93
};                                                                                                                   // 94
validateEmail = function (email) {                                                                                   // 95
  if (passwordSignupFields() === "USERNAME_AND_OPTIONAL_EMAIL" && email === '')                                      // 96
    return true;                                                                                                     // 97
                                                                                                                     // 98
  if (email.indexOf('@') !== -1) {                                                                                   // 99
    return true;                                                                                                     // 100
  } else {                                                                                                           // 101
    loginButtonsSession.errorMessage("Invalid email");                                                               // 102
    return false;                                                                                                    // 103
  }                                                                                                                  // 104
};                                                                                                                   // 105
validatePassword = function (password) {                                                                             // 106
  if (password.length >= 6) {                                                                                        // 107
    return true;                                                                                                     // 108
  } else {                                                                                                           // 109
    loginButtonsSession.errorMessage("Password must be at least 6 characters long");                                 // 110
    return false;                                                                                                    // 111
  }                                                                                                                  // 112
};                                                                                                                   // 113
                                                                                                                     // 114
//                                                                                                                   // 115
// loginButtonLoggedOut template                                                                                     // 116
//                                                                                                                   // 117
                                                                                                                     // 118
Template._loginButtonsLoggedOut.dropdown = dropdown;                                                                 // 119
                                                                                                                     // 120
Template._loginButtonsLoggedOut.services = getLoginServices;                                                         // 121
                                                                                                                     // 122
Template._loginButtonsLoggedOut.singleService = function () {                                                        // 123
  var services = getLoginServices();                                                                                 // 124
  if (services.length !== 1)                                                                                         // 125
    throw new Error(                                                                                                 // 126
      "Shouldn't be rendering this template with more than one configured service");                                 // 127
  return services[0];                                                                                                // 128
};                                                                                                                   // 129
                                                                                                                     // 130
Template._loginButtonsLoggedOut.configurationLoaded = function () {                                                  // 131
  return Accounts.loginServicesConfigured();                                                                         // 132
};                                                                                                                   // 133
                                                                                                                     // 134
                                                                                                                     // 135
//                                                                                                                   // 136
// loginButtonsLoggedIn template                                                                                     // 137
//                                                                                                                   // 138
                                                                                                                     // 139
// decide whether we should show a dropdown rather than a row of                                                     // 140
// buttons                                                                                                           // 141
Template._loginButtonsLoggedIn.dropdown = dropdown;                                                                  // 142
                                                                                                                     // 143
                                                                                                                     // 144
                                                                                                                     // 145
//                                                                                                                   // 146
// loginButtonsLoggedInSingleLogoutButton template                                                                   // 147
//                                                                                                                   // 148
                                                                                                                     // 149
Template._loginButtonsLoggedInSingleLogoutButton.displayName = displayName;                                          // 150
                                                                                                                     // 151
                                                                                                                     // 152
                                                                                                                     // 153
//                                                                                                                   // 154
// loginButtonsMessage template                                                                                      // 155
//                                                                                                                   // 156
                                                                                                                     // 157
Template._loginButtonsMessages.errorMessage = function () {                                                          // 158
  return loginButtonsSession.get('errorMessage');                                                                    // 159
};                                                                                                                   // 160
                                                                                                                     // 161
Template._loginButtonsMessages.infoMessage = function () {                                                           // 162
  return loginButtonsSession.get('infoMessage');                                                                     // 163
};                                                                                                                   // 164
                                                                                                                     // 165
                                                                                                                     // 166
//                                                                                                                   // 167
// loginButtonsLoggingInPadding template                                                                             // 168
//                                                                                                                   // 169
                                                                                                                     // 170
Template._loginButtonsLoggingInPadding.dropdown = dropdown;                                                          // 171
                                                                                                                     // 172
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/accounts-ui-bootstrap-dropdown/login_buttons_single.js                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// for convenience                                                                                                   // 1
var loginButtonsSession = Accounts._loginButtonsSession;                                                             // 2
                                                                                                                     // 3
Template._loginButtonsLoggedOutSingleLoginButton.events({                                                            // 4
  'click .login-button': function () {                                                                               // 5
    var serviceName = this.name;                                                                                     // 6
    loginButtonsSession.resetMessages();                                                                             // 7
    var callback = function (err) {                                                                                  // 8
      if (!err) {                                                                                                    // 9
        loginButtonsSession.closeDropdown();                                                                         // 10
      } else if (err instanceof Accounts.LoginCancelledError) {                                                      // 11
        // do nothing                                                                                                // 12
      } else if (err instanceof ServiceConfiguration.ConfigError) {                                                  // 13
        loginButtonsSession.configureService(serviceName);                                                           // 14
      } else {                                                                                                       // 15
        loginButtonsSession.errorMessage(err.reason || "Unknown error");                                             // 16
      }                                                                                                              // 17
    };                                                                                                               // 18
                                                                                                                     // 19
    var loginWithService = Meteor["loginWith" + capitalize(serviceName)];                                            // 20
                                                                                                                     // 21
    var options = {}; // use default scope unless specified                                                          // 22
    if (Accounts.ui._options.requestPermissions[serviceName])                                                        // 23
      options.requestPermissions = Accounts.ui._options.requestPermissions[serviceName];                             // 24
    if (Accounts.ui._options.requestOfflineToken[serviceName])                                                       // 25
      options.requestOfflineToken = Accounts.ui._options.requestOfflineToken[serviceName];                           // 26
                                                                                                                     // 27
    loginWithService(options, callback);                                                                             // 28
  }                                                                                                                  // 29
});                                                                                                                  // 30
                                                                                                                     // 31
Template._loginButtonsLoggedOutSingleLoginButton.configured = function () {                                          // 32
  return !!ServiceConfiguration.configurations.findOne({service: this.name});                                        // 33
};                                                                                                                   // 34
                                                                                                                     // 35
Template._loginButtonsLoggedOutSingleLoginButton.capitalizedName = function () {                                     // 36
  if (this.name === 'github')                                                                                        // 37
    // XXX we should allow service packages to set their capitalized name                                            // 38
    return 'GitHub';                                                                                                 // 39
  else                                                                                                               // 40
    return capitalize(this.name);                                                                                    // 41
};                                                                                                                   // 42
                                                                                                                     // 43
// XXX from http://epeli.github.com/underscore.string/lib/underscore.string.js                                       // 44
var capitalize = function(str){                                                                                      // 45
  str = str == null ? '' : String(str);                                                                              // 46
  return str.charAt(0).toUpperCase() + str.slice(1);                                                                 // 47
};                                                                                                                   // 48
                                                                                                                     // 49
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/accounts-ui-bootstrap-dropdown/login_buttons_dropdown.js                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// for convenience                                                                                                   // 1
var loginButtonsSession = Accounts._loginButtonsSession;                                                             // 2
                                                                                                                     // 3
// events shared between loginButtonsLoggedOutDropdown and                                                           // 4
// loginButtonsLoggedInDropdown                                                                                      // 5
Template._loginButtons.events({                                                                                      // 6
  'click input, click label, click button, click .dropdown-menu, click .alert': function(event) {                    // 7
    event.stopPropagation();                                                                                         // 8
  },                                                                                                                 // 9
  'click #login-name-link, click #login-sign-in-link': function () {                                                 // 10
    event.stopPropagation();                                                                                         // 11
    loginButtonsSession.set('dropdownVisible', true);                                                                // 12
    Deps.flush();                                                                                                    // 13
  },                                                                                                                 // 14
  'click .login-close': function () {                                                                                // 15
    loginButtonsSession.closeDropdown();                                                                             // 16
  }                                                                                                                  // 17
});                                                                                                                  // 18
                                                                                                                     // 19
                                                                                                                     // 20
//                                                                                                                   // 21
// loginButtonsLoggedInDropdown template and related                                                                 // 22
//                                                                                                                   // 23
                                                                                                                     // 24
Template._loginButtonsLoggedInDropdown.events({                                                                      // 25
  'click #login-buttons-open-change-password': function(event) {                                                     // 26
    event.stopPropagation();                                                                                         // 27
    loginButtonsSession.resetMessages();                                                                             // 28
    loginButtonsSession.set('inChangePasswordFlow', true);                                                           // 29
    Deps.flush();                                                                                                    // 30
    toggleDropdown();                                                                                                // 31
  }                                                                                                                  // 32
});                                                                                                                  // 33
                                                                                                                     // 34
Template._loginButtonsLoggedInDropdown.displayName = displayName;                                                    // 35
                                                                                                                     // 36
Template._loginButtonsLoggedInDropdown.inChangePasswordFlow = function () {                                          // 37
  return loginButtonsSession.get('inChangePasswordFlow');                                                            // 38
};                                                                                                                   // 39
                                                                                                                     // 40
Template._loginButtonsLoggedInDropdown.inMessageOnlyFlow = function () {                                             // 41
  return loginButtonsSession.get('inMessageOnlyFlow');                                                               // 42
};                                                                                                                   // 43
                                                                                                                     // 44
Template._loginButtonsLoggedInDropdown.dropdownVisible = function () {                                               // 45
  return loginButtonsSession.get('dropdownVisible');                                                                 // 46
};                                                                                                                   // 47
                                                                                                                     // 48
Template._loginButtonsLoggedInDropdownActions.allowChangingPassword = function () {                                  // 49
  // it would be more correct to check whether the user has a password set,                                          // 50
  // but in order to do that we'd have to send more data down to the client,                                         // 51
  // and it'd be preferable not to send down the entire service.password document.                                   // 52
  //                                                                                                                 // 53
  // instead we use the heuristic: if the user has a username or email set.                                          // 54
  var user = Meteor.user();                                                                                          // 55
  return user.username || (user.emails && user.emails[0] && user.emails[0].address);                                 // 56
};                                                                                                                   // 57
                                                                                                                     // 58
                                                                                                                     // 59
//                                                                                                                   // 60
// loginButtonsLoggedOutDropdown template and related                                                                // 61
//                                                                                                                   // 62
                                                                                                                     // 63
Template._loginButtonsLoggedOutDropdown.events({                                                                     // 64
  'click #login-buttons-password': function () {                                                                     // 65
    loginOrSignup();                                                                                                 // 66
  },                                                                                                                 // 67
                                                                                                                     // 68
  'keypress #forgot-password-email': function (event) {                                                              // 69
    if (event.keyCode === 13)                                                                                        // 70
      forgotPassword();                                                                                              // 71
  },                                                                                                                 // 72
                                                                                                                     // 73
  'click #login-buttons-forgot-password': function (event) {                                                         // 74
    event.stopPropagation();                                                                                         // 75
    forgotPassword();                                                                                                // 76
  },                                                                                                                 // 77
                                                                                                                     // 78
  'click #signup-link': function (event) {                                                                           // 79
    event.stopPropagation();                                                                                         // 80
    loginButtonsSession.resetMessages();                                                                             // 81
                                                                                                                     // 82
    // store values of fields before swtiching to the signup form                                                    // 83
    var username = trimmedElementValueById('login-username');                                                        // 84
    var email = trimmedElementValueById('login-email');                                                              // 85
    var usernameOrEmail = trimmedElementValueById('login-username-or-email');                                        // 86
    // notably not trimmed. a password could (?) start or end with a space                                           // 87
    var password = elementValueById('login-password');                                                               // 88
                                                                                                                     // 89
    loginButtonsSession.set('inSignupFlow', true);                                                                   // 90
    loginButtonsSession.set('inForgotPasswordFlow', false);                                                          // 91
                                                                                                                     // 92
    // force the ui to update so that we have the approprate fields to fill in                                       // 93
    Deps.flush();                                                                                                    // 94
                                                                                                                     // 95
    // update new fields with appropriate defaults                                                                   // 96
    if (username !== null)                                                                                           // 97
      document.getElementById('login-username').value = username;                                                    // 98
    else if (email !== null)                                                                                         // 99
      document.getElementById('login-email').value = email;                                                          // 100
    else if (usernameOrEmail !== null)                                                                               // 101
      if (usernameOrEmail.indexOf('@') === -1)                                                                       // 102
        document.getElementById('login-username').value = usernameOrEmail;                                           // 103
    else                                                                                                             // 104
      document.getElementById('login-email').value = usernameOrEmail;                                                // 105
  },                                                                                                                 // 106
  'click #forgot-password-link': function (event) {                                                                  // 107
    event.stopPropagation();                                                                                         // 108
    loginButtonsSession.resetMessages();                                                                             // 109
                                                                                                                     // 110
    // store values of fields before swtiching to the signup form                                                    // 111
    var email = trimmedElementValueById('login-email');                                                              // 112
    var usernameOrEmail = trimmedElementValueById('login-username-or-email');                                        // 113
                                                                                                                     // 114
    loginButtonsSession.set('inSignupFlow', false);                                                                  // 115
    loginButtonsSession.set('inForgotPasswordFlow', true);                                                           // 116
                                                                                                                     // 117
    // force the ui to update so that we have the approprate fields to fill in                                       // 118
    Deps.flush();                                                                                                    // 119
    //toggleDropdown();                                                                                              // 120
                                                                                                                     // 121
    // update new fields with appropriate defaults                                                                   // 122
    if (email !== null)                                                                                              // 123
      document.getElementById('forgot-password-email').value = email;                                                // 124
    else if (usernameOrEmail !== null)                                                                               // 125
      if (usernameOrEmail.indexOf('@') !== -1)                                                                       // 126
        document.getElementById('forgot-password-email').value = usernameOrEmail;                                    // 127
  },                                                                                                                 // 128
  'click #back-to-login-link': function () {                                                                         // 129
    loginButtonsSession.resetMessages();                                                                             // 130
                                                                                                                     // 131
    var username = trimmedElementValueById('login-username');                                                        // 132
    var email = trimmedElementValueById('login-email')                                                               // 133
          || trimmedElementValueById('forgot-password-email'); // Ughh. Standardize on names?                        // 134
                                                                                                                     // 135
    loginButtonsSession.set('inSignupFlow', false);                                                                  // 136
    loginButtonsSession.set('inForgotPasswordFlow', false);                                                          // 137
    // force the ui to update so that we have the approprate fields to fill in                                       // 138
    Deps.flush();                                                                                                    // 139
                                                                                                                     // 140
    if (document.getElementById('login-username'))                                                                   // 141
      document.getElementById('login-username').value = username;                                                    // 142
    if (document.getElementById('login-email'))                                                                      // 143
      document.getElementById('login-email').value = email;                                                          // 144
    // "login-password" is preserved thanks to the preserve-inputs package                                           // 145
    if (document.getElementById('login-username-or-email'))                                                          // 146
      document.getElementById('login-username-or-email').value = email || username;                                  // 147
  },                                                                                                                 // 148
  'keypress #login-username, keypress #login-email, keypress #login-username-or-email, keypress #login-password, keypress #login-password-again': function (event) {
    if (event.keyCode === 13)                                                                                        // 150
      loginOrSignup();                                                                                               // 151
  }                                                                                                                  // 152
});                                                                                                                  // 153
                                                                                                                     // 154
// additional classes that can be helpful in styling the dropdown                                                    // 155
Template._loginButtonsLoggedOutDropdown.additionalClasses = function () {                                            // 156
  if (!Accounts.password) {                                                                                          // 157
    return false;                                                                                                    // 158
  } else {                                                                                                           // 159
    if (loginButtonsSession.get('inSignupFlow')) {                                                                   // 160
      return 'login-form-create-account';                                                                            // 161
    } else if (loginButtonsSession.get('inForgotPasswordFlow')) {                                                    // 162
      return 'login-form-forgot-password';                                                                           // 163
    } else {                                                                                                         // 164
      return 'login-form-sign-in';                                                                                   // 165
    }                                                                                                                // 166
  }                                                                                                                  // 167
};                                                                                                                   // 168
                                                                                                                     // 169
Template._loginButtonsLoggedOutDropdown.dropdownVisible = function () {                                              // 170
  return loginButtonsSession.get('dropdownVisible');                                                                 // 171
};                                                                                                                   // 172
                                                                                                                     // 173
Template._loginButtonsLoggedOutDropdown.hasPasswordService = hasPasswordService;                                     // 174
                                                                                                                     // 175
// return all login services, with password last                                                                     // 176
Template._loginButtonsLoggedOutAllServices.services = getLoginServices;                                              // 177
                                                                                                                     // 178
Template._loginButtonsLoggedOutAllServices.isPasswordService = function () {                                         // 179
  return this.name === 'password';                                                                                   // 180
};                                                                                                                   // 181
                                                                                                                     // 182
Template._loginButtonsLoggedOutAllServices.hasOtherServices = function () {                                          // 183
  return getLoginServices().length > 1;                                                                              // 184
};                                                                                                                   // 185
                                                                                                                     // 186
Template._loginButtonsLoggedOutAllServices.hasPasswordService =                                                      // 187
  hasPasswordService;                                                                                                // 188
                                                                                                                     // 189
Template._loginButtonsLoggedOutPasswordService.fields = function () {                                                // 190
  var loginFields = [                                                                                                // 191
    {fieldName: 'username-or-email', fieldLabel: 'Username or Email',                                                // 192
     visible: function () {                                                                                          // 193
       return _.contains(                                                                                            // 194
         ["USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL"],                                                      // 195
         passwordSignupFields());                                                                                    // 196
     }},                                                                                                             // 197
    {fieldName: 'username', fieldLabel: 'Username',                                                                  // 198
     visible: function () {                                                                                          // 199
       return passwordSignupFields() === "USERNAME_ONLY";                                                            // 200
     }},                                                                                                             // 201
    {fieldName: 'email', fieldLabel: 'Email', inputType: 'email',                                                    // 202
     visible: function () {                                                                                          // 203
       return passwordSignupFields() === "EMAIL_ONLY";                                                               // 204
     }},                                                                                                             // 205
    {fieldName: 'password', fieldLabel: 'Password', inputType: 'password',                                           // 206
     visible: function () {                                                                                          // 207
       return true;                                                                                                  // 208
     }}                                                                                                              // 209
  ];                                                                                                                 // 210
                                                                                                                     // 211
  var signupFields = [                                                                                               // 212
    {fieldName: 'username', fieldLabel: 'Username',                                                                  // 213
     visible: function () {                                                                                          // 214
       return _.contains(                                                                                            // 215
         ["USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL", "USERNAME_ONLY"],                                     // 216
         passwordSignupFields());                                                                                    // 217
     }},                                                                                                             // 218
    {fieldName: 'email', fieldLabel: 'Email', inputType: 'email',                                                    // 219
     visible: function () {                                                                                          // 220
       return _.contains(                                                                                            // 221
         ["USERNAME_AND_EMAIL", "EMAIL_ONLY"],                                                                       // 222
         passwordSignupFields());                                                                                    // 223
     }},                                                                                                             // 224
    {fieldName: 'email', fieldLabel: 'Email (optional)', inputType: 'email',                                         // 225
     visible: function () {                                                                                          // 226
       return passwordSignupFields() === "USERNAME_AND_OPTIONAL_EMAIL";                                              // 227
     }},                                                                                                             // 228
    {fieldName: 'password', fieldLabel: 'Password', inputType: 'password',                                           // 229
     visible: function () {                                                                                          // 230
       return true;                                                                                                  // 231
     }},                                                                                                             // 232
    {fieldName: 'password-again', fieldLabel: 'Password (again)',                                                    // 233
     inputType: 'password',                                                                                          // 234
     visible: function () {                                                                                          // 235
       // No need to make users double-enter their password if                                                       // 236
       // they'll necessarily have an email set, since they can use                                                  // 237
       // the "forgot password" flow.                                                                                // 238
       return _.contains(                                                                                            // 239
         ["USERNAME_AND_OPTIONAL_EMAIL", "USERNAME_ONLY"],                                                           // 240
         passwordSignupFields());                                                                                    // 241
     }}                                                                                                              // 242
  ];                                                                                                                 // 243
                                                                                                                     // 244
  return loginButtonsSession.get('inSignupFlow') ? signupFields : loginFields;                                       // 245
};                                                                                                                   // 246
                                                                                                                     // 247
Template._loginButtonsLoggedOutPasswordService.inForgotPasswordFlow = function () {                                  // 248
  return loginButtonsSession.get('inForgotPasswordFlow');                                                            // 249
};                                                                                                                   // 250
                                                                                                                     // 251
Template._loginButtonsLoggedOutPasswordService.inLoginFlow = function () {                                           // 252
  return !loginButtonsSession.get('inSignupFlow') && !loginButtonsSession.get('inForgotPasswordFlow');               // 253
};                                                                                                                   // 254
                                                                                                                     // 255
Template._loginButtonsLoggedOutPasswordService.inSignupFlow = function () {                                          // 256
  return loginButtonsSession.get('inSignupFlow');                                                                    // 257
};                                                                                                                   // 258
                                                                                                                     // 259
Template._loginButtonsLoggedOutPasswordService.showCreateAccountLink = function () {                                 // 260
  return !Accounts._options.forbidClientAccountCreation;                                                             // 261
};                                                                                                                   // 262
                                                                                                                     // 263
Template._loginButtonsLoggedOutPasswordService.showForgotPasswordLink = function () {                                // 264
  return _.contains(                                                                                                 // 265
    ["USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL", "EMAIL_ONLY"],                                             // 266
    passwordSignupFields());                                                                                         // 267
};                                                                                                                   // 268
                                                                                                                     // 269
Template._loginButtonsFormField.inputType = function () {                                                            // 270
  return this.inputType || "text";                                                                                   // 271
};                                                                                                                   // 272
                                                                                                                     // 273
                                                                                                                     // 274
//                                                                                                                   // 275
// loginButtonsChangePassword template                                                                               // 276
//                                                                                                                   // 277
                                                                                                                     // 278
Template._loginButtonsChangePassword.events({                                                                        // 279
  'keypress #login-old-password, keypress #login-password, keypress #login-password-again': function (event) {       // 280
    if (event.keyCode === 13)                                                                                        // 281
      changePassword();                                                                                              // 282
  },                                                                                                                 // 283
  'click #login-buttons-do-change-password': function (event) {                                                      // 284
    event.stopPropagation();                                                                                         // 285
    changePassword();                                                                                                // 286
  }                                                                                                                  // 287
});                                                                                                                  // 288
                                                                                                                     // 289
Template._loginButtonsChangePassword.fields = function () {                                                          // 290
  return [                                                                                                           // 291
    {fieldName: 'old-password', fieldLabel: 'Current Password', inputType: 'password',                               // 292
     visible: function () {                                                                                          // 293
       return true;                                                                                                  // 294
     }},                                                                                                             // 295
    {fieldName: 'password', fieldLabel: 'New Password', inputType: 'password',                                       // 296
     visible: function () {                                                                                          // 297
       return true;                                                                                                  // 298
     }},                                                                                                             // 299
    {fieldName: 'password-again', fieldLabel: 'New Password (again)',                                                // 300
     inputType: 'password',                                                                                          // 301
     visible: function () {                                                                                          // 302
       // No need to make users double-enter their password if                                                       // 303
       // they'll necessarily have an email set, since they can use                                                  // 304
       // the "forgot password" flow.                                                                                // 305
       return _.contains(                                                                                            // 306
         ["USERNAME_AND_OPTIONAL_EMAIL", "USERNAME_ONLY"],                                                           // 307
         passwordSignupFields());                                                                                    // 308
     }}                                                                                                              // 309
  ];                                                                                                                 // 310
};                                                                                                                   // 311
                                                                                                                     // 312
                                                                                                                     // 313
//                                                                                                                   // 314
// helpers                                                                                                           // 315
//                                                                                                                   // 316
                                                                                                                     // 317
var elementValueById = function(id) {                                                                                // 318
  var element = document.getElementById(id);                                                                         // 319
  if (!element)                                                                                                      // 320
    return null;                                                                                                     // 321
  else                                                                                                               // 322
    return element.value;                                                                                            // 323
};                                                                                                                   // 324
                                                                                                                     // 325
var trimmedElementValueById = function(id) {                                                                         // 326
  var element = document.getElementById(id);                                                                         // 327
  if (!element)                                                                                                      // 328
    return null;                                                                                                     // 329
  else                                                                                                               // 330
    return element.value.replace(/^\s*|\s*$/g, ""); // trim() doesn't work on IE8;                                   // 331
};                                                                                                                   // 332
                                                                                                                     // 333
var loginOrSignup = function () {                                                                                    // 334
  if (loginButtonsSession.get('inSignupFlow'))                                                                       // 335
    signup();                                                                                                        // 336
  else                                                                                                               // 337
    login();                                                                                                         // 338
};                                                                                                                   // 339
                                                                                                                     // 340
var login = function () {                                                                                            // 341
  loginButtonsSession.resetMessages();                                                                               // 342
                                                                                                                     // 343
  var username = trimmedElementValueById('login-username');                                                          // 344
  var email = trimmedElementValueById('login-email');                                                                // 345
  var usernameOrEmail = trimmedElementValueById('login-username-or-email');                                          // 346
  // notably not trimmed. a password could (?) start or end with a space                                             // 347
  var password = elementValueById('login-password');                                                                 // 348
                                                                                                                     // 349
  var loginSelector;                                                                                                 // 350
  if (username !== null) {                                                                                           // 351
    if (!validateUsername(username))                                                                                 // 352
      return;                                                                                                        // 353
    else                                                                                                             // 354
      loginSelector = {username: username};                                                                          // 355
  } else if (email !== null) {                                                                                       // 356
    if (!validateEmail(email))                                                                                       // 357
      return;                                                                                                        // 358
    else                                                                                                             // 359
      loginSelector = {email: email};                                                                                // 360
  } else if (usernameOrEmail !== null) {                                                                             // 361
    // XXX not sure how we should validate this. but this seems good enough (for now),                               // 362
    // since an email must have at least 3 characters anyways                                                        // 363
    if (!validateUsername(usernameOrEmail))                                                                          // 364
      return;                                                                                                        // 365
    else                                                                                                             // 366
      loginSelector = usernameOrEmail;                                                                               // 367
  } else {                                                                                                           // 368
    throw new Error("Unexpected -- no element to use as a login user selector");                                     // 369
  }                                                                                                                  // 370
                                                                                                                     // 371
  Meteor.loginWithPassword(loginSelector, password, function (error, result) {                                       // 372
    if (error) {                                                                                                     // 373
      loginButtonsSession.errorMessage(error.reason || "Unknown error");                                             // 374
    } else {                                                                                                         // 375
      loginButtonsSession.closeDropdown();                                                                           // 376
    }                                                                                                                // 377
  });                                                                                                                // 378
};                                                                                                                   // 379
                                                                                                                     // 380
var toggleDropdown = function() {                                                                                    // 381
  $('#login-dropdown-list .dropdown-menu').dropdown('toggle');                                                       // 382
};                                                                                                                   // 383
                                                                                                                     // 384
var signup = function () {                                                                                           // 385
  loginButtonsSession.resetMessages();                                                                               // 386
                                                                                                                     // 387
  var options = {}; // to be passed to Accounts.createUser                                                           // 388
                                                                                                                     // 389
  var username = trimmedElementValueById('login-username');                                                          // 390
  if (username !== null) {                                                                                           // 391
    if (!validateUsername(username))                                                                                 // 392
      return;                                                                                                        // 393
    else                                                                                                             // 394
      options.username = username;                                                                                   // 395
  }                                                                                                                  // 396
                                                                                                                     // 397
  var email = trimmedElementValueById('login-email');                                                                // 398
  if (email !== null) {                                                                                              // 399
    if (!validateEmail(email))                                                                                       // 400
      return;                                                                                                        // 401
    else                                                                                                             // 402
      options.email = email;                                                                                         // 403
  }                                                                                                                  // 404
                                                                                                                     // 405
  // notably not trimmed. a password could (?) start or end with a space                                             // 406
  var password = elementValueById('login-password');                                                                 // 407
  if (!validatePassword(password))                                                                                   // 408
    return;                                                                                                          // 409
  else                                                                                                               // 410
    options.password = password;                                                                                     // 411
                                                                                                                     // 412
  if (!matchPasswordAgainIfPresent())                                                                                // 413
    return;                                                                                                          // 414
                                                                                                                     // 415
  Accounts.createUser(options, function (error) {                                                                    // 416
    if (error) {                                                                                                     // 417
      loginButtonsSession.errorMessage(error.reason || "Unknown error");                                             // 418
    } else {                                                                                                         // 419
      loginButtonsSession.closeDropdown();                                                                           // 420
    }                                                                                                                // 421
  });                                                                                                                // 422
};                                                                                                                   // 423
                                                                                                                     // 424
var forgotPassword = function () {                                                                                   // 425
  loginButtonsSession.resetMessages();                                                                               // 426
                                                                                                                     // 427
  var email = trimmedElementValueById("forgot-password-email");                                                      // 428
  if (email.indexOf('@') !== -1) {                                                                                   // 429
    Accounts.forgotPassword({email: email}, function (error) {                                                       // 430
      if (error)                                                                                                     // 431
        loginButtonsSession.errorMessage(error.reason || "Unknown error");                                           // 432
      else                                                                                                           // 433
        loginButtonsSession.infoMessage("Email sent");                                                               // 434
    });                                                                                                              // 435
  } else {                                                                                                           // 436
    loginButtonsSession.infoMessage("Email sent");                                                                   // 437
  }                                                                                                                  // 438
};                                                                                                                   // 439
                                                                                                                     // 440
var changePassword = function () {                                                                                   // 441
  loginButtonsSession.resetMessages();                                                                               // 442
                                                                                                                     // 443
  // notably not trimmed. a password could (?) start or end with a space                                             // 444
  var oldPassword = elementValueById('login-old-password');                                                          // 445
                                                                                                                     // 446
  // notably not trimmed. a password could (?) start or end with a space                                             // 447
  var password = elementValueById('login-password');                                                                 // 448
  if (!validatePassword(password))                                                                                   // 449
    return;                                                                                                          // 450
                                                                                                                     // 451
  if (!matchPasswordAgainIfPresent())                                                                                // 452
    return;                                                                                                          // 453
                                                                                                                     // 454
  Accounts.changePassword(oldPassword, password, function (error) {                                                  // 455
    if (error) {                                                                                                     // 456
       loginButtonsSession.errorMessage(error.reason || "Unknown error");                                            // 457
    } else {                                                                                                         // 458
      loginButtonsSession.infoMessage("Password changed");                                                           // 459
                                                                                                                     // 460
      // wait 3 seconds, then expire the msg                                                                         // 461
      Meteor.setTimeout(function() {                                                                                 // 462
        loginButtonsSession.resetMessages();                                                                         // 463
      }, 3000);                                                                                                      // 464
      // loginButtonsSession.set('inChangePasswordFlow', false);                                                     // 465
      // loginButtonsSession.set('inMessageOnlyFlow', true);                                                         // 466
      // loginButtonsSession.infoMessage("Password changed");                                                        // 467
    }                                                                                                                // 468
  });                                                                                                                // 469
};                                                                                                                   // 470
                                                                                                                     // 471
var matchPasswordAgainIfPresent = function () {                                                                      // 472
  // notably not trimmed. a password could (?) start or end with a space                                             // 473
  var passwordAgain = elementValueById('login-password-again');                                                      // 474
  if (passwordAgain !== null) {                                                                                      // 475
    // notably not trimmed. a password could (?) start or end with a space                                           // 476
    var password = elementValueById('login-password');                                                               // 477
    if (password !== passwordAgain) {                                                                                // 478
      loginButtonsSession.errorMessage("Passwords don't match");                                                     // 479
      return false;                                                                                                  // 480
    }                                                                                                                // 481
  }                                                                                                                  // 482
  return true;                                                                                                       // 483
};                                                                                                                   // 484
                                                                                                                     // 485
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/accounts-ui-bootstrap-dropdown/login_buttons_dialogs.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// for convenience                                                                                                   // 1
var loginButtonsSession = Accounts._loginButtonsSession;                                                             // 2
                                                                                                                     // 3
                                                                                                                     // 4
//                                                                                                                   // 5
// populate the session so that the appropriate dialogs are                                                          // 6
// displayed by reading variables set by accounts-urls, which parses                                                 // 7
// special URLs. since accounts-ui depends on accounts-urls, we are                                                  // 8
// guaranteed to have these set at this point.                                                                       // 9
//                                                                                                                   // 10
                                                                                                                     // 11
if (Accounts._resetPasswordToken) {                                                                                  // 12
  loginButtonsSession.set('resetPasswordToken', Accounts._resetPasswordToken);                                       // 13
}                                                                                                                    // 14
                                                                                                                     // 15
if (Accounts._enrollAccountToken) {                                                                                  // 16
  loginButtonsSession.set('enrollAccountToken', Accounts._enrollAccountToken);                                       // 17
}                                                                                                                    // 18
                                                                                                                     // 19
// Needs to be in Meteor.startup because of a package loading order                                                  // 20
// issue. We can't be sure that accounts-password is loaded earlier                                                  // 21
// than accounts-ui so Accounts.verifyEmail might not be defined.                                                    // 22
Meteor.startup(function () {                                                                                         // 23
  if (Accounts._verifyEmailToken) {                                                                                  // 24
    Accounts.verifyEmail(Accounts._verifyEmailToken, function(error) {                                               // 25
      Accounts._enableAutoLogin();                                                                                   // 26
      if (!error)                                                                                                    // 27
        loginButtonsSession.set('justVerifiedEmail', true);                                                          // 28
      // XXX show something if there was an error.                                                                   // 29
    });                                                                                                              // 30
  }                                                                                                                  // 31
});                                                                                                                  // 32
                                                                                                                     // 33
                                                                                                                     // 34
//                                                                                                                   // 35
// resetPasswordDialog template                                                                                      // 36
//                                                                                                                   // 37
                                                                                                                     // 38
Template._resetPasswordDialog.events({                                                                               // 39
  'click #login-buttons-reset-password-button': function () {                                                        // 40
    resetPassword();                                                                                                 // 41
  },                                                                                                                 // 42
  'keypress #reset-password-new-password': function (event) {                                                        // 43
    if (event.keyCode === 13)                                                                                        // 44
      resetPassword();                                                                                               // 45
  },                                                                                                                 // 46
  'click #login-buttons-cancel-reset-password': function () {                                                        // 47
    loginButtonsSession.set('resetPasswordToken', null);                                                             // 48
    Accounts._enableAutoLogin();                                                                                     // 49
  }                                                                                                                  // 50
});                                                                                                                  // 51
                                                                                                                     // 52
var resetPassword = function () {                                                                                    // 53
  loginButtonsSession.resetMessages();                                                                               // 54
  var newPassword = document.getElementById('reset-password-new-password').value;                                    // 55
  if (!validatePassword(newPassword))                                                                                // 56
    return;                                                                                                          // 57
                                                                                                                     // 58
  Accounts.resetPassword(                                                                                            // 59
    loginButtonsSession.get('resetPasswordToken'), newPassword,                                                      // 60
    function (error) {                                                                                               // 61
      if (error) {                                                                                                   // 62
        loginButtonsSession.errorMessage(error.reason || "Unknown error");                                           // 63
      } else {                                                                                                       // 64
        loginButtonsSession.set('resetPasswordToken', null);                                                         // 65
        Accounts._enableAutoLogin();                                                                                 // 66
      }                                                                                                              // 67
    });                                                                                                              // 68
};                                                                                                                   // 69
                                                                                                                     // 70
Template._resetPasswordDialog.inResetPasswordFlow = function () {                                                    // 71
  return loginButtonsSession.get('resetPasswordToken');                                                              // 72
};                                                                                                                   // 73
                                                                                                                     // 74
                                                                                                                     // 75
//                                                                                                                   // 76
// enrollAccountDialog template                                                                                      // 77
//                                                                                                                   // 78
                                                                                                                     // 79
Template._enrollAccountDialog.events({                                                                               // 80
  'click #login-buttons-enroll-account-button': function () {                                                        // 81
    enrollAccount();                                                                                                 // 82
  },                                                                                                                 // 83
  'keypress #enroll-account-password': function (event) {                                                            // 84
    if (event.keyCode === 13)                                                                                        // 85
      enrollAccount();                                                                                               // 86
  },                                                                                                                 // 87
  'click #login-buttons-cancel-enroll-account': function () {                                                        // 88
    loginButtonsSession.set('enrollAccountToken', null);                                                             // 89
    Accounts._enableAutoLogin();                                                                                     // 90
  }                                                                                                                  // 91
});                                                                                                                  // 92
                                                                                                                     // 93
var enrollAccount = function () {                                                                                    // 94
  loginButtonsSession.resetMessages();                                                                               // 95
  var password = document.getElementById('enroll-account-password').value;                                           // 96
  if (!validatePassword(password))                                                                                   // 97
    return;                                                                                                          // 98
                                                                                                                     // 99
  Accounts.resetPassword(                                                                                            // 100
    loginButtonsSession.get('enrollAccountToken'), password,                                                         // 101
    function (error) {                                                                                               // 102
      if (error) {                                                                                                   // 103
        loginButtonsSession.errorMessage(error.reason || "Unknown error");                                           // 104
      } else {                                                                                                       // 105
        loginButtonsSession.set('enrollAccountToken', null);                                                         // 106
        Accounts._enableAutoLogin();                                                                                 // 107
      }                                                                                                              // 108
    });                                                                                                              // 109
};                                                                                                                   // 110
                                                                                                                     // 111
Template._enrollAccountDialog.inEnrollAccountFlow = function () {                                                    // 112
  return loginButtonsSession.get('enrollAccountToken');                                                              // 113
};                                                                                                                   // 114
                                                                                                                     // 115
                                                                                                                     // 116
//                                                                                                                   // 117
// justVerifiedEmailDialog template                                                                                  // 118
//                                                                                                                   // 119
                                                                                                                     // 120
Template._justVerifiedEmailDialog.events({                                                                           // 121
  'click #just-verified-dismiss-button': function () {                                                               // 122
    loginButtonsSession.set('justVerifiedEmail', false);                                                             // 123
  }                                                                                                                  // 124
});                                                                                                                  // 125
                                                                                                                     // 126
Template._justVerifiedEmailDialog.visible = function () {                                                            // 127
  return loginButtonsSession.get('justVerifiedEmail');                                                               // 128
};                                                                                                                   // 129
                                                                                                                     // 130
                                                                                                                     // 131
//                                                                                                                   // 132
// loginButtonsMessagesDialog template                                                                               // 133
//                                                                                                                   // 134
                                                                                                                     // 135
Template._loginButtonsMessagesDialog.events({                                                                        // 136
  'click #messages-dialog-dismiss-button': function () {                                                             // 137
    loginButtonsSession.resetMessages();                                                                             // 138
  }                                                                                                                  // 139
});                                                                                                                  // 140
                                                                                                                     // 141
Template._loginButtonsMessagesDialog.visible = function () {                                                         // 142
  var hasMessage = loginButtonsSession.get('infoMessage') || loginButtonsSession.get('errorMessage');                // 143
  return !dropdown() && hasMessage;                                                                                  // 144
};                                                                                                                   // 145
                                                                                                                     // 146
                                                                                                                     // 147
//                                                                                                                   // 148
// configureLoginServiceDialog template                                                                              // 149
//                                                                                                                   // 150
                                                                                                                     // 151
Template._configureLoginServiceDialog.events({                                                                       // 152
  'click .configure-login-service-dismiss-button': function () {                                                     // 153
    loginButtonsSession.set('configureLoginServiceDialogVisible', false);                                            // 154
  },                                                                                                                 // 155
  'click #configure-login-service-dialog-save-configuration': function () {                                          // 156
    if (loginButtonsSession.get('configureLoginServiceDialogVisible') &&                                             // 157
        ! loginButtonsSession.get('configureLoginServiceDialogSaveDisabled')) {                                      // 158
      // Prepare the configuration document for this login service                                                   // 159
      var serviceName = loginButtonsSession.get('configureLoginServiceDialogServiceName');                           // 160
      var configuration = {                                                                                          // 161
        service: serviceName                                                                                         // 162
      };                                                                                                             // 163
                                                                                                                     // 164
      // Fetch the value of each input field                                                                         // 165
      _.each(configurationFields(), function(field) {                                                                // 166
        configuration[field.property] = document.getElementById(                                                     // 167
          'configure-login-service-dialog-' + field.property).value                                                  // 168
          .replace(/^\s*|\s*$/g, ""); // trim;                                                                       // 169
      });                                                                                                            // 170
                                                                                                                     // 171
      // Configure this login service                                                                                // 172
      Meteor.call("configureLoginService", configuration, function (error, result) {                                 // 173
        if (error)                                                                                                   // 174
          Meteor._debug("Error configuring login service " + serviceName, error);                                    // 175
        else                                                                                                         // 176
          loginButtonsSession.set('configureLoginServiceDialogVisible', false);                                      // 177
      });                                                                                                            // 178
    }                                                                                                                // 179
  },                                                                                                                 // 180
  // IE8 doesn't support the 'input' event, so we'll run this on the keyup as                                        // 181
  // well. (Keeping the 'input' event means that this also fires when you use                                        // 182
  // the mouse to change the contents of the field, eg 'Cut' menu item.)                                             // 183
  'input, keyup input': function (event) {                                                                           // 184
    // if the event fired on one of the configuration input fields,                                                  // 185
    // check whether we should enable the 'save configuration' button                                                // 186
    if (event.target.id.indexOf('configure-login-service-dialog') === 0)                                             // 187
      updateSaveDisabled();                                                                                          // 188
  }                                                                                                                  // 189
});                                                                                                                  // 190
                                                                                                                     // 191
// check whether the 'save configuration' button should be enabled.                                                  // 192
// this is a really strange way to implement this and a Forms                                                        // 193
// Abstraction would make all of this reactive, and simpler.                                                         // 194
var updateSaveDisabled = function () {                                                                               // 195
  var anyFieldEmpty = _.any(configurationFields(), function(field) {                                                 // 196
    return document.getElementById(                                                                                  // 197
      'configure-login-service-dialog-' + field.property).value === '';                                              // 198
  });                                                                                                                // 199
                                                                                                                     // 200
  loginButtonsSession.set('configureLoginServiceDialogSaveDisabled', anyFieldEmpty);                                 // 201
};                                                                                                                   // 202
                                                                                                                     // 203
// Returns the appropriate template for this login service.  This                                                    // 204
// template should be defined in the service's package                                                               // 205
var configureLoginServiceDialogTemplateForService = function () {                                                    // 206
  var serviceName = loginButtonsSession.get('configureLoginServiceDialogServiceName');                               // 207
  return Template['configureLoginServiceDialogFor' + capitalize(serviceName)];                                       // 208
};                                                                                                                   // 209
                                                                                                                     // 210
var configurationFields = function () {                                                                              // 211
  var template = configureLoginServiceDialogTemplateForService();                                                    // 212
  return template.fields();                                                                                          // 213
};                                                                                                                   // 214
                                                                                                                     // 215
Template._configureLoginServiceDialog.configurationFields = function () {                                            // 216
  return configurationFields();                                                                                      // 217
};                                                                                                                   // 218
                                                                                                                     // 219
Template._configureLoginServiceDialog.visible = function () {                                                        // 220
  return loginButtonsSession.get('configureLoginServiceDialogVisible');                                              // 221
};                                                                                                                   // 222
                                                                                                                     // 223
Template._configureLoginServiceDialog.configurationSteps = function () {                                             // 224
  // renders the appropriate template                                                                                // 225
  return configureLoginServiceDialogTemplateForService()();                                                          // 226
};                                                                                                                   // 227
                                                                                                                     // 228
Template._configureLoginServiceDialog.saveDisabled = function () {                                                   // 229
  return loginButtonsSession.get('configureLoginServiceDialogSaveDisabled');                                         // 230
};                                                                                                                   // 231
                                                                                                                     // 232
                                                                                                                     // 233
// XXX from http://epeli.github.com/underscore.string/lib/underscore.string.js                                       // 234
var capitalize = function(str){                                                                                      // 235
  str = str == null ? '' : String(str);                                                                              // 236
  return str.charAt(0).toUpperCase() + str.slice(1);                                                                 // 237
};                                                                                                                   // 238
                                                                                                                     // 239
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['accounts-ui-bootstrap-dropdown'] = {};

})();

//# sourceMappingURL=83cf84f6a56b5353b5cf17293c5c63acedc6ac4d.map
