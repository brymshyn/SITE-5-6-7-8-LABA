console.log(jQuery().jquery);

$('#subscription_form').on('submit', function (e) {
    e.preventDefault();
    var $form = $(this);
    $.ajax({
        type: 'POST',
        url: 'subscription_ajax.php',
        data: $form.serialize()
    }).done(function () {
        $form[0].reset()
        console.log($form);
        alert('Thank you for the subscription!')
    }).fail(function () {
        console.log($form);
        alert('Something went wrong')

    });
});