// Translations for en_US
i18n_register({
    "plural": function (n) {
        return n == 1 ? 0 : 1;
    },
    "catalog": {}
});

require(['jquery', 'splunkjs/mvc/simplexml/ready!'], function ($) {

    // Grab the DOM for the first dashboard row
    var thirdRow = $('#SLA.dashboard-row').first();
    //var fourthRow =  $('.dashboard-row4').first();

    // Get the dashboard cells (which are the parent elements of the actual panels and define the panel size)
    var panelCells3 = $(thirdRow).children('.dashboard-cell');
    // Adjust the cells' width
    $(panelCells3[0]).css('width', '20%');
    $(panelCells3[1]).css('width', '50%');
    $(panelCells3[2]).css('width', '30%');

});


require(['jquery', 'underscore', 'splunkjs/mvc', 'util/console'], function ($, _, mvc, console) {
    function setToken(name, value) {
        console.log('Setting Token %o=%o', name, value);
        var defaultTokenModel = mvc.Components.get('default');
        if (defaultTokenModel) {
            defaultTokenModel.set(name, value);
        }
        var submittedTokenModel = mvc.Components.get('submitted');
        if (submittedTokenModel) {
            submittedTokenModel.set(name, value);
        }
    }
    $('.dashboard-body').on('click', '[data-set-token],[data-unset-token],[data-token-json]', function (e) {
        e.preventDefault();
        var target = $(e.currentTarget);
        var setTokenName = target.data('set-token');
        if (setTokenName) {
            setToken(setTokenName, target.data('value'));
        }
        var unsetTokenName = target.data('unset-token');
        if (unsetTokenName) {
            setToken(unsetTokenName, undefined);
        }
        var tokenJson = target.data('token-json');
        if (tokenJson) {
            try {
                if (_.isObject(tokenJson)) {
                    _(tokenJson).each(function (value, key) {
                        if (value == null) {
                            // Unset the token
                            setToken(key, undefined);
                        } else {
                            setToken(key, value);
                        }
                    });
                }
            } catch (e) {
                console.warn('Cannot parse token JSON: ', e);
            }
        }
    });
});