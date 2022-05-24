
$().ready(function() {
    //$("#text").html("This is a test of javascript, from test.js");
    $.getJSON("../refs/veracode.json", function(data) {
        console.log(data);
    })
});