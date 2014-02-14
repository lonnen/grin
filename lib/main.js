var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.amazon.com",
  contentScript: 'window.alert("Page matches ruleset");'
});
