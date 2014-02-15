var data = require('sdk/self').data;
var pageMod = require('sdk/page-mod');

pageMod.PageMod({
  attachTo: 'top',
  include: '*.amazon.com',
  contentScriptFile: data.url('grin.js')
});


if (require('sdk/simple-prefs').prefs.charityCheck) {
    require('sdk/tabs').open(data.url("index.html"));
}
