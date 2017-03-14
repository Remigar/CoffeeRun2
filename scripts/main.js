(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var LABEL_SELECTOR = '[data-label="strengthLevel"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var LabelHandler = App.LabelHandler;
    var myTruck = new Truck('ncc-1701', new DataStore());
    window.myTruck = myTruck;
    var formHandler = new FormHandler(FORM_SELECTOR);
    var labelHandler = new LabelHandler(LABEL_SELECTOR);

    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    labelHandler.addSliderChangeHandler();
    console.log(formHandler);
    console.log(labelHandler);
})(window);
