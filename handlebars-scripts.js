UI.registerHelper("facebookScript", function() {
    var appId = this.appId && this.appId.length ? "&appId=" + this.appId : null;
    if (appId) {
        Meteor.startup(function() {
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id))
                    return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/all.js#xfbml=1" + appId;
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        });
    }
    return Template.uiscript_facebookScript;
});

UI.registerHelper("googleTagManagerScript", function() {
    var self = this;
    if (self.containerId && self.containerId.length) {
        Meteor.startup(function() {
            (function(w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
                var f = d.getElementsByTagName(s)[0],
                        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', self.containerId);
        });
    }
    return Template.uiscript_googleTagManagerScript;
});

UI.registerHelper("googlePlusOneScript", function() {
    Meteor.startup(function() {
        (function() {
            var po = document.createElement('script');
            po.type = 'text/javascript';
            po.async = true;
            po.src = 'https://apis.google.com/js/plusone.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(po, s);
        })();
    });
    return Template.uiscript_googlePlusOneScript;
});

UI.registerHelper("twitterWidgetsScript", function() {
    Meteor.startup(function() {
        !function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + '://platform.twitter.com/widgets.js';
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, 'script', 'twitter-wjs');
    });
    return Template.uiscript_twitterWidgetsScript;
});

UI.registerHelper("addThisWidgetsScript", function() {
    var self = this;
    if (self.profileId && self.profileId.length) {
        Meteor.startup(function() {
            var js, id = 'addthis-wjs', fjs = document.getElementsByTagName('script')[0];
            if (!document.getElementById(id)) {
                js = document.createElement('script');
                js.id = id;
                js.src = '//s7.addthis.com/js/300/addthis_widget.js#pubid=' + self.profileId;
                fjs.parentNode.insertBefore(js, fjs);
            }
        });
    }
    return Template.uiscript_addThisWidgetsScript;
});