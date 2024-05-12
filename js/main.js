$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    })

    $('form').validate({
        rules: {
            telefone: {
                minlength: 15
            }
        },
        submitHandler: function(form) {
            console.log(form);
            form.reset();
        }
    });
});