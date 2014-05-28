var data = require('sdk/self').data;
var pageMod = require('sdk/page-mod');

pageMod.PageMod({
  attachTo: 'top',
  include: '*.amazon.com',
  contentScriptFile: data.url('grin.js')
});


var check = pageMod.PageMod({
  attachTo: 'top',
  include: 'www.amazon.com',
  contentScriptFile: data.url('grinCheck.js')
});

// show the set up page once and only once
var prefs = require('sdk/simple-prefs').prefs;
if (prefs.charityCheck) {
    require('sdk/tabs').open(data.url("index.html"));
    prefs.charityCheck = false;
}
