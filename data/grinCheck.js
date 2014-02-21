self.postMessage({
    kind: "message",
    element: "I'm alive!"
});

self.on("check", function() {
    (function verifyMozillaCharity() {
        var _charityCheck = true; // TODO split this out

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
});
