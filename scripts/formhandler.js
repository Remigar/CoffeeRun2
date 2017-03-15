var cheevo = false;

(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    function FormHandler(selector) {
        if (!selector) {
            throw new Error('no selector provided');
        }
        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('could not find element with selector: ' + selector);
        }
        FormHandler.prototype.addSubmitHandler = function(fn) {
            console.log('Setting submit handler for form');
            this.$formElement.on('submit', function (event) {
                event.preventDefault();
                cheevo = false;
                var data = {};
                $(this).serializeArray().forEach(function(item) {
                    data[item.name] = item.value;
                    console.log(item.name + ' is ' + item.value);
                });
                console.log(data);
                fn(data);
                //this is where we will handle the SIKK CHEEVOS
                if (!cheevo && data['size'] == 'COFFEE-ZILLA' && data['flavor'] != '' && data['strength'] == 100) {
                    console.log('cheevo UNLOCKED');
                    cheevo = true;
                    $('#cheevoModal').modal('show');
                    //probably a really roundabout way of getting the input from the user but whatevs
                    $('[id="noButton"]').click(function() {
                        console.log($('[id="noButton"]').text());
                        //choice = $('[id="noButton"]').text();

                    });
                    $('[id="yesButton"]').click(function() {
                        console.log($('[id="yesButton"]').text());
                        //choice = $('[id="yesButton"]').text();
                        //add the powerups!
                        $('[id="hiddenMenu"]').css('display', 'block');
                    });
                    /*if (choice === 'No') {
                        console.log(choice + ' was chosen');

                    }
                    if (choice === 'Yes') {
                        console.log(choice + ' was chosen');
                    }*/
                    this.reset();
                    this.elements[0].focus();
                }

                this.reset();
                this.elements[0].focus();

            });
        };
    }
    App.FormHandler = FormHandler;
    window.App = App;
})(window);
