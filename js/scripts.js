$(document).ready(function() {
  $("#customerinformation").submit(function(event) {
    var customerName = $("input#customerName").val();
    var address1 = $("input#address1").val();
    var address2 = $("input#address2").val();
    var city = $("input#city").val();
    var state = $("input#state").val();
    var zip = $("input#zipCode").val();
    var product = $("input#theirName").val();

    #(".theygohere").text(customerName);
    #(".theygohere").text(address1);
    #(".theygohere").text(address2);
    #(".theygohere").text(city);
    #(".theygohere").text(state);
    #(".theygohere").text(zip);
    #(".theygohere").text(product);

    event.preventDefault;
  });
});
