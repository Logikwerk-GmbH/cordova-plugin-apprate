/*
  *
  * Licensed to the Apache Software Foundation (ASF) under one
  * or more contributor license agreements. See the NOTICE file
  * distributed with this work for additional information
  * regarding copyright ownership. The ASF licenses this file
  * to you under the Apache License, Version 2.0 (the
  * "License"); you may not use this file except in compliance
  * with the License. You may obtain a copy of the License at
  *
  * http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing,
  * software distributed under the License is distributed on an
  * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  * KIND, either express or implied. See the License for the
  * specific language governing permissions and limitations
  * under the License.
  *
  */;
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ES6Promise=e()}(this,function(){"use strict";function t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function e(t){return"function"==typeof t}function n(t){W=t}function r(t){z=t}function o(){return function(){return process.nextTick(a)}}function i(){return"undefined"!=typeof U?function(){U(a)}:c()}function s(){var t=0,e=new H(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}function c(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<N;t+=2){var e=Q[t],n=Q[t+1];e(n),Q[t]=void 0,Q[t+1]=void 0}N=0}function f(){try{var t=Function("return this")().require("vertx");return U=t.runOnLoop||t.runOnContext,i()}catch(e){return c()}}function l(t,e){var n=this,r=new this.constructor(p);void 0===r[V]&&x(r);var o=n._state;if(o){var i=arguments[o-1];z(function(){return T(o,r,i,n._result)})}else j(n,r,t,e);return r}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return w(n,t),n}function p(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function _(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function y(t,e,n){z(function(t){var r=!1,o=_(n,e,function(n){r||(r=!0,e!==n?w(t,n):A(t,n))},function(e){r||(r=!0,S(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,S(t,o))},t)}function m(t,e){e._state===Z?A(t,e._result):e._state===$?S(t,e._result):j(e,void 0,function(e){return w(t,e)},function(e){return S(t,e)})}function b(t,n,r){n.constructor===t.constructor&&r===l&&n.constructor.resolve===h?m(t,n):void 0===r?A(t,n):e(r)?y(t,n,r):A(t,n)}function w(e,n){if(e===n)S(e,v());else if(t(n)){var r=void 0;try{r=n.then}catch(o){return void S(e,o)}b(e,n,r)}else A(e,n)}function g(t){t._onerror&&t._onerror(t._result),E(t)}function A(t,e){t._state===X&&(t._result=e,t._state=Z,0!==t._subscribers.length&&z(E,t))}function S(t,e){t._state===X&&(t._state=$,t._result=e,z(g,t))}function j(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+Z]=n,o[i+$]=r,0===i&&t._state&&z(E,t)}function E(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?T(n,r,o,i):o(i);t._subscribers.length=0}}function T(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=!0;if(i){try{s=r(o)}catch(a){c=!1,u=a}if(n===s)return void S(n,d())}else s=o;n._state!==X||(i&&c?w(n,s):c===!1?S(n,u):t===Z?A(n,s):t===$&&S(n,s))}function M(t,e){try{e(function(e){w(t,e)},function(e){S(t,e)})}catch(n){S(t,n)}}function P(){return tt++}function x(t){t[V]=tt++,t._state=void 0,t._result=void 0,t._subscribers=[]}function C(){return new Error("Array Methods must be provided an Array")}function O(t){return new et(this,t).promise}function k(t){var e=this;return new e(L(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function F(t){var e=this,n=new e(p);return S(n,t),n}function Y(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function q(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function D(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===r&&!n.cast)return}t.Promise=nt}var K=void 0;K=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var L=K,N=0,U=void 0,W=void 0,z=function(t,e){Q[N]=t,Q[N+1]=e,N+=2,2===N&&(W?W(a):R())},B="undefined"!=typeof window?window:void 0,G=B||{},H=G.MutationObserver||G.WebKitMutationObserver,I="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),J="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Q=new Array(1e3),R=void 0;R=I?o():H?s():J?u():void 0===B&&"function"==typeof require?f():c();var V=Math.random().toString(36).substring(2),X=void 0,Z=1,$=2,tt=0,et=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[V]||x(this.promise),L(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?A(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&A(this.promise,this._result))):S(this.promise,C())}return t.prototype._enumerate=function(t){for(var e=0;this._state===X&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===h){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(u){s=!0,i=u}if(o===l&&t._state!==X)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===nt){var c=new n(p);s?S(c,i):b(c,t,o),this._willSettleAt(c,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===X&&(this._remaining--,t===$?S(r,n):this._result[e]=n),0===this._remaining&&A(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;j(t,void 0,function(t){return n._settledAt(Z,e,t)},function(t){return n._settledAt($,e,t)})},t}(),nt=function(){function t(e){this[V]=P(),this._result=this._state=void 0,this._subscribers=[],p!==e&&("function"!=typeof e&&Y(),this instanceof t?M(this,e):q())}return t.prototype["catch"]=function(t){return this.then(null,t)},t.prototype["finally"]=function(t){var n=this,r=n.constructor;return e(t)?n.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})}):n.then(t,t)},t}();return nt.prototype.then=l,nt.all=O,nt.race=k,nt.resolve=h,nt.reject=F,nt._setScheduler=n,nt._setAsap=r,nt._asap=z,nt.polyfill=D,nt.Promise=nt,nt.polyfill(),nt});

var AppRate, Locales, localeObj, exec, Storage;

Locales = require('./locales');

exec = require('cordova/exec');

Storage = require('./storage')

AppRate = (function() {
  var FLAG_NATIVE_CODE_SUPPORTED, LOCAL_STORAGE_COUNTER, counter, getAppTitle, getAppVersion, showDialog, updateCounter;

  function AppRate() {}

  LOCAL_STORAGE_COUNTER = 'counter';

  FLAG_NATIVE_CODE_SUPPORTED = /(iPhone|iPod|iPad|Android)/i.test(navigator.userAgent.toLowerCase());

  PREF_STORE_URL_PREFIX_IOS9 = "itms-apps://itunes.apple.com/app/viewContentsUserReviews/id";
  PREF_STORE_URL_POSTFIX_IOS9 = "?action=write-review";
  PREF_STORE_URL_FORMAT_IOS8 = "http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewContentsUserReviews?pageNumber=0&sortOrdering=1&type=Purple+Software&mt=8&id=";

  counter = {
    applicationVersion: void 0,
    countdown: 0
  };

  promptForAppRatingWindowButtonClickHandler = function (buttonIndex) {
    var base = AppRate.preferences.callbacks, currentBtn = null;
    switch (buttonIndex) {
      case 0:
        updateCounter('reset');
        break;
      case 1:
        currentBtn = localeObj.noButtonLabel;
        if(typeof base.handleNegativeFeedback === "function") {
          navigator.notification.confirm(localeObj.feedbackPromptMessage, promptForFeedbackWindowButtonClickHandler, localeObj.feedbackPromptTitle, [localeObj.noButtonLabel, localeObj.yesButtonLabel]);
        }
        break;
      case 2:
        currentBtn = localeObj.yesButtonLabel;
        navigator.notification.confirm(localeObj.message, promptForStoreRatingWindowButtonClickHandler, localeObj.title, [localeObj.cancelButtonLabel, localeObj.laterButtonLabel, localeObj.rateButtonLabel])
        break;
    }
    return typeof base.onButtonClicked === "function" ? base.onButtonClicked(buttonIndex, currentBtn, "AppRatingPrompt") : function(){ };
  };

  promptForStoreRatingWindowButtonClickHandler = function(buttonIndex) {
    var base = AppRate.preferences.callbacks, currentBtn = null;
    switch (buttonIndex) {
      case 0:
        updateCounter('reset');
        break;
      case 1:
        currentBtn = localeObj.cancelButtonLabel;
        updateCounter('stop');
        break;
      case 2:
        currentBtn = localeObj.laterButtonLabel;
        updateCounter('reset');
        break;
      case 3:
        currentBtn = localeObj.rateButtonLabel;
        updateCounter('stop');
        AppRate.navigateToAppStore();
        break;
    }
    //This is called only in case the user clicked on a button
    typeof base.onButtonClicked === "function" ? base.onButtonClicked(buttonIndex, currentBtn, "StoreRatingPrompt") : function(){ };
    //This one is called anyway once the process is done
    return typeof base.done === "function" ? base.done() : function(){ };
  };

  promptForFeedbackWindowButtonClickHandler = function(buttonIndex) {
    var base = AppRate.preferences.callbacks, currentBtn = null;
    switch (buttonIndex) {
      case 1:
        currentBtn = localeObj.noButtonLabel;
        updateCounter('stop');
        break;
      case 2:
        currentBtn = localeObj.yesButtonLabel;
        updateCounter('stop');
        base.handleNegativeFeedback();
        break;
    }
    return typeof base.onButtonClicked === "function" ? base.onButtonClicked(buttonIndex, currentBtn, "FeedbackPrompt") : function(){ };
  };

  updateCounter = function(action) {
    if (action == null) {
      action = 'increment';
    }
    switch (action) {
      case 'increment':
        if (counter.countdown <= AppRate.preferences.usesUntilPrompt) {
          counter.countdown++;
        }
        break;
      case 'reset':
        counter.countdown = 0;
        break;
      case 'stop':
        counter.countdown = AppRate.preferences.usesUntilPrompt + 1;
    }
    Storage.set(LOCAL_STORAGE_COUNTER, counter);
    return counter;
  };

  showDialog = function(immediately) {
    updateCounter();
    if (counter.countdown === AppRate.preferences.usesUntilPrompt || immediately) {
      localeObj = Locales.getLocale(AppRate.preferences.useLanguage, AppRate.preferences.displayAppName, AppRate.preferences.customLocale);

      if(AppRate.preferences.simpleMode) {
        navigator.notification.confirm(localeObj.message, promptForStoreRatingWindowButtonClickHandler, localeObj.title, [localeObj.cancelButtonLabel, localeObj.laterButtonLabel, localeObj.rateButtonLabel]);
      } else {
        navigator.notification.confirm(localeObj.appRatePromptMessage, promptForAppRatingWindowButtonClickHandler, localeObj.appRatePromptTitle, [localeObj.noButtonLabel, localeObj.yesButtonLabel]);
      }

      var base = AppRate.preferences.callbacks;
      if (typeof base.onRateDialogShow === "function") {
        base.onRateDialogShow(promptForStoreRatingWindowButtonClickHandler);
      }
    }
    return AppRate;
  };

  getAppVersion = function(successCallback, errorCallback) {
    if (FLAG_NATIVE_CODE_SUPPORTED) {
      exec(successCallback, errorCallback, 'AppRate', 'getAppVersion', []);
    } else {
      successCallback(counter.applicationVersion);
    }
    return AppRate;
  };

  getAppTitle = function(successCallback, errorCallback) {
    if (FLAG_NATIVE_CODE_SUPPORTED) {
      exec(successCallback, errorCallback, 'AppRate', 'getAppTitle', []);
    } else {
      successCallback(AppRate.preferences.displayAppName);
    }
    return AppRate;
  };

  AppRate.init = function() {
    AppRate.ready = Promise.all([
      Storage.get(LOCAL_STORAGE_COUNTER).then(function (storedCounter) {
        counter = storedCounter || counter
      })
    ])

    getAppVersion((function(_this) {
      return function(applicationVersion) {
        if (counter.applicationVersion !== applicationVersion) {
          counter.applicationVersion = applicationVersion;
          if (_this.preferences.promptAgainForEachNewVersion) {
            updateCounter('reset');
          }
        }
        return _this;
      };
    })(this));
    getAppTitle((function(_this) {
      return function(displayAppName) {
        _this.preferences.displayAppName = displayAppName;
        return _this;
      };
    })(this));
    return this;
  };

  AppRate.locales = Locales;

  AppRate.preferences = {
    useLanguage: null,
    displayAppName: '',
    simpleMode: false,
    promptAgainForEachNewVersion: true,
    usesUntilPrompt: 3,
    inAppReview: true,
    callbacks: {
      onButtonClicked: null,
      onRateDialogShow: null,
      handleNegativeFeedback: null,
      done: null
    },
    storeAppURL: {
      ios: null,
      android: null,
      blackberry: null,
      windows8: null,
      windows: null
    },
    customLocale: null,
    openUrl: function (url) {
        cordova.InAppBrowser.open(url, '_system', 'location=no');
    }
  };

  AppRate.promptForRating = function(immediately) {
    AppRate.ready.then(function() {
      if (immediately == null) {
        immediately = true;
      }

      // see also: https://cordova.apache.org/news/2017/11/20/migrate-from-cordova-globalization-plugin.html
      if (AppRate.preferences.useLanguage === null && window.Intl && typeof window.Intl === 'object') {
        AppRate.preferences.useLanguage = window.navigator.language;
      }

      showDialog(immediately);
    });
    return this;
  };

  AppRate.navigateToAppStore = function() {
    var iOSVersion;
    var iOSStoreUrl;

    if (/(iPhone|iPod|iPad)/i.test(navigator.userAgent.toLowerCase())) {
      if (this.preferences.inAppReview) {
        var showNativePrompt = true;
        exec(null, null, 'AppRate', 'launchiOSReview', [this.preferences.storeAppURL.ios, showNativePrompt]);
      } else {
        iOSVersion = navigator.userAgent.match(/OS\s+([\d\_]+)/i)[0].replace(/_/g, '.').replace('OS ', '').split('.');
        iOSVersion = parseInt(iOSVersion[0]) + (parseInt(iOSVersion[1]) || 0) / 10;
        if (iOSVersion < 9) {
          iOSStoreUrl = PREF_STORE_URL_FORMAT_IOS8 + this.preferences.storeAppURL.ios;
        } else {
          iOSStoreUrl = PREF_STORE_URL_PREFIX_IOS9 + this.preferences.storeAppURL.ios + PREF_STORE_URL_POSTFIX_IOS9;
        }
	AppRate.preferences.openUrl(iOSStoreUrl);
      }
    } else if (/(Android)/i.test(navigator.userAgent.toLowerCase())) {
      AppRate.preferences.openUrl(this.preferences.storeAppURL.android);
    } else if (/(Windows|Edge)/i.test(navigator.userAgent.toLowerCase())) {
	  Windows.Services.Store.StoreRequestHelper.sendRequestAsync(Windows.Services.Store.StoreContext.getDefault(), 16, "");
    } else if (/(BlackBerry)/i.test(navigator.userAgent.toLowerCase())) {
      AppRate.preferences.openUrl(this.preferences.storeAppURL.blackberry);
    } else if (/(IEMobile|Windows Phone)/i.test(navigator.userAgent.toLowerCase())) {
      AppRate.preferences.openUrl(this.preferences.storeAppURL.windows8);
    }
    return this;
  };

  return AppRate;

})();

document.addEventListener("deviceready", function() {
  AppRate.init();
}, false)

module.exports = AppRate;
