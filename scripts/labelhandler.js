(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    function LabelHandler(selector) {
        if (!selector) {
            throw new Error('no selector provided');
        }
        this.$labelElement = $(selector);
        if (this.$labelElement.length === 0) {
            throw new Error('could not find element with selector: ' + selector);
        }
        LabelHandler.prototype.addSliderChangeHandler = function() {
            console.log('Setting slider change handler for label');
            this.$labelElement.on('change', function() {
                var data = {};
                $(this).serializeArray().forEach(function(item) {
                    data[item.name] = item.value;
                    console.log(item.name + ' is ' + item.value);
                });
                if (data['strength'] < 30) {
                    $(selector).parent().css('color', 'green');
                }
                else if (data['strength'] >= 30 && data['strength'] < 60) {
                    $(selector).parent().css('color', 'orange');
                }
                else {
                    $(selector).parent().css('color', 'red');
                }
                $(selector).siblings().text('Caffeine Rating: ' + data['strength']);
            });
        };
    }
    App.LabelHandler = LabelHandler;
    window.App = App;
})(window);
