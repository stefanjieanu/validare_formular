$('document').ready(function () {

    var filesize = 0;
    $('.thank-you').fadeOut('fast');

    $('#target').submit(function (e) {

        e.preventDefault();
        
        // Remove previuos errors
        $('span').remove();

        let nume = $('#nume').val();
        let prenume = $('#prenume').val();
        let email = $('#email').val();
        let telefon = $('#telefon').val();
        let upload = $('#upload');
        let biografia = $('#biografia').val();

        let ok = true;

        // Validare nume
        if (nume.length < 1) {
            $('#nume').after('<span>This field is required</span>');
            ok = false;
        }
        if (nume.length > 60) {
            $('#nume').after('<span>Your name is too long</span>');   
            ok = false;
        }
        // Validare prenume
        if (prenume.length < 1) {
            console.log('This field is required');
            $('#prenume').after('<span>This field is required</span>');
            ok = false;
        }
        if (prenume.length > 60) {
            console.log('Field maximum is 60 characters');
            $('#prenume').after('<span>Your name is too long</span>');
            ok = false;
        }

        // Validare email
        let eamiltest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.length > 0) {
            if (!(eamiltest.test(email))) {
                $('#email').after('<span>Enter a valid email address</span>');
                ok = false;
            }
        } else {
            $('#email').after('<span>This field is required</span>');
            ok = false;
        }


        // Validare telefon
        let phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        if (telefon.length > 0) {
            if (!(telefon.match(phoneno))) {
                $('#telefon').after('<span>Enter a valid phone number</span>');
                ok = false;
            }    
        } else {
            $('#telefon').after('<span>This field is required</span>');
            ok = false;  
        }

        // Validare upload
        if (filesize == 0) {
            $('#upload').after('<span>Please upload a file</span>');
            ok = false;
        } 
        if (filesize / 1024 / 1024 > 2) {
            $('#upload').after('<span>File too large</span>');
            ok = false;
        }
        console.log(filesize / 1024 / 1024);

        // Validare biografie
        if (biografia.length > 200) {
            $('#biografia').after('<span>Field maximum is 200 characters</span>');
            ok = false;
        }

        if (ok) {
            $('#target').animate({
                bottom: '1000px',
            });
            $('.thank-you').animate({
                bottom: '700px'
            });
            $('.thank-you').fadeIn('slow');
        } else {
            // do something else / do nothing
        }
    });

    $('#upload').bind('change', function () {

        //this.files[0].size gets the size of your file.
        filesize = this.files[0].size;
    });

});

