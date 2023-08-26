$(document).ready(function() {
    $.get('/get_predicted_price/apple_price', function(data) {
        $('#predictedPrice').text('Predicted Price: ' + data.predicted_price.toFixed(2));
    });
});
