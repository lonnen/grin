(function conditionalRedirectToSmile() {
    var _charityCheck = true; // TODO split this out

    // is this not running on an amazon site?
    if (!window.location.host.contains('amazon')) {
        return;
    }

    // is this an amazon blog?
    if (window.location.host.contains('blogs')) {
        return;
    }

    // is this on a non-smile subdomain?
    if (!window.location.host.contains('smile')) {
        var _url = window.location.protocol +
            '//' +
            window.location.host.replace(/^www\./, 'smile.') +
            window.location.pathname +
            window.location.search +
            window.location.hash;

        window.location.replace(_url);
        return;
    }
})();
