(function conditionalRedirectToSmile() {
    var _charityCheck = true; // TODO split this out

    // is this not running on an amazon site?
    if (!window.location.host.contains('amazon')) {
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

    // should we verify the charity choice?
    if (!_charityCheck) {
        return;
    }

    var charity = document.getElementById('nav-pldn-org-name').textContent;

    // is the mozilla foundation already the selected charity?
    if (charity === 'Mozilla Foundation') {
        _charityCheck = false;
        return;
    }

    // are we on the select a charity page?
    if (window.location.href.contains('charity/change.html')) {
        window.alert('Please select the Mozilla Foundation');
        return;
    }

    // redirect to the select a charity page featuring Mozilla Foundation
    window.location.replace(
        'http://smile.amazon.com/gp/charity/change.html#q=mozilla' +
        '&page=1&ref=smi_se_cycsc_srch_cycsr&orig='
    );
})();
