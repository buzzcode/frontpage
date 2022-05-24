
$().ready(function() {
    //$("#text").html("This is a test of javascript, from test.js");
    $.getJSON("./data/veracode.json", function(data) {
        console.log(data);
    })
});