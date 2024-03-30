
$(document).ready(function () {

    var $userName = $('#userName');
    var $email = $('#email');
    var $password = $('#password');
    var $confirmPassword = $('#confirm-password');
    var $oneliner = $('#oneliner');
    var $firstName = $('#first-name');
    var $lastName = $('#last-name');
    var $about = $('#about');
    var $checkbox = $('input[type="checkbox"]');
    var $radio = $('input[type="radio"]');
    var $submit = $('#submitBtn');

    $userName.on('click input', validateUserName);
    $email.on('click input', validateEmail);
    $password.on('click input', validatePassword);
    $confirmPassword.on('click input', validateConfirmPassword);
    $oneliner.on('click input', validateOneliner);
    $firstName.on('click input', validateFirstName);
    $lastName.on('click input', validateLastName);
    $about.on('click input', validateAbout);
    $checkbox.on('click input', validateCheckBox);
    $radio.on('click input', radioValidate);

    var isNameValid = false;
    var isEmailValid = false;
    var isPasswordValid = false;
    var isConfirmPasswordValid = false;
    var isOnelinerValid = false;
    var isFirstNameValid = false;
    var isLastNameValid = false;
    var isAboutValid = false;
    var isCheckBoxValid = false;
    var isRadioValid = false;

    $submit.on('click', function (event) {
        event.preventDefault();
        if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isOnelinerValid && isFirstNameValid && isLastNameValid && isAboutValid && isCheckBoxValid && isRadioValid) {
            printData();

            hideNoData();
            // Empty the form
            $userName.val('');
            $email.val('');
            $password.val('');
            $confirmPassword.val('');
            $oneliner.val('');
            $firstName.val('');
            $lastName.val('');
            $about.val('');
            $checkbox.prop('checked', false);
            $radio.prop('checked', false);
            
            //reset borders
            $userName.css({"border-color": "", "box-shadow": ""});
            $userName.prev('span').css({"border-color": "", "box-shadow": ""});

            $email.css({"border-color": "", "box-shadow": ""});
            $email.prev('span').css({"border-color": "", "box-shadow": ""});

            $password.css({"border-color": "", "box-shadow": ""});
            $password.prev('span').css({"border-color": "", "box-shadow": ""});

            $confirmPassword.css({"border-color": "", "box-shadow": ""});
            $confirmPassword.prev('span').css({"border-color": "", "box-shadow": ""});

            $oneliner.css({"border-color": "", "box-shadow": ""});
            $oneliner.prev('span').css({"border-color": "", "box-shadow": ""});

            $firstName.css({"border-color": "", "box-shadow": ""});
            $firstName.prev('span').css({"border-color": "", "box-shadow": ""});

            $lastName.css({"border-color": "", "box-shadow": ""});
            $lastName.prev('span').css({"border-color": "", "box-shadow": ""});

            $about.css({"border-color": "", "box-shadow": ""});
            $about.prev('span').css({"border-color": "", "box-shadow": ""});
            
            //reset star clicks
            $("#d1, #d2, #d3, #d4, #d5").removeClass("fa-solid").addClass("fa-regular");
            $("#i1, #i2, #i3, #i4, #i5").removeClass("fa-solid").addClass("fa-regular");
            //reset star clicks
            $("#design-output").text("");
            $("#info-output").text("");

            // Reset validation boolean
            isNameValid = false;
            isEmailValid = false;
            isPasswordValid = false;
            isConfirmPasswordValid = false;
            isOnelinerValid = false;
            isFirstNameValid = false;
            isLastNameValid = false;
            isAboutValid = false;
            isCheckBoxValid = false;
            isRadioValid = false;

        } else {
            // Validate all fields
            validateUserName();
            validateEmail();
            validatePassword();
            validateConfirmPassword();
            validateOneliner();
            validateFirstName();
            validateLastName();
            validateAbout();
            validateCheckBox();
            radioValidate();

            // if no rating is clicked
             $("#design-output").text("Please rate the design");
             // if no rating is clicked
             $("#info-output").text("Please rate the information");
        }
    });

    //! Design Star

    $("#d1").on('click', function () {
        $("#d1").removeClass("fa-regular").addClass("fa-solid");
        $("#d2, #d3, #d4, #d5").removeClass("fa-solid").addClass("fa-regular");
        $("#design-output").text("You Rated 1/5");
    });
    $("#d2").on('click', function () {
        $("#d1, #d2").removeClass("fa-regular").addClass("fa-solid");
        $("#d3, #d4, #d5").removeClass("fa-solid").addClass("fa-regular");
        $("#design-output").text("You Rated 2/5");
    });
    $("#d3").on('click', function () {
        $("#d1, #d2, #d3").removeClass("fa-regular").addClass("fa-solid");
        $("#d4, #d5").removeClass("fa-solid").addClass("fa-regular");
        $("#design-output").text("You Rated 3/5");
    });
    $("#d4").on('click', function () {
        $("#d1, #d2, #d3, #d4").removeClass("fa-regular").addClass("fa-solid");
        $("#d5").removeClass("fa-solid").addClass("fa-regular");
        $("#design-output").text("You Rated 4/5");
    });
    $("#d5").on('click', function () {
        $("#d1, #d2, #d3, #d4, #d5").removeClass("fa-regular").addClass("fa-solid");
        $("#design-output").text("You Rated 5/5");
    });



    //! Information Star

    $("#i1").on('click', function () {
        $("#i1").removeClass("fa-regular").addClass("fa-solid");
        $("#i2, #i3, #i4, #i5").removeClass("fa-solid").addClass("fa-regular");
        $("#info-output").text("You Rated 1/5");
    });
    $("#i2").on('click', function () {
        $("#i1, #i2").removeClass("fa-regular").addClass("fa-solid");
        $("#i3, #i4, #i5").removeClass("fa-solid").addClass("fa-regular");
        $("#info-output").text("You Rated 2/5");
    });
    $("#i3").on('click', function () {
        $("#i1, #i2, #i3").removeClass("fa-regular").addClass("fa-solid");
        $("#i4, #i5").removeClass("fa-solid").addClass("fa-regular");
        $("#info-output").text("You Rated 3/5");
    });
    $("#i4").on('click', function () {
        $("#i1, #i2, #i3, #i4").removeClass("fa-regular").addClass("fa-solid");
        $("#i5").removeClass("fa-solid").addClass("fa-regular");
        $("#info-output").text("You Rated 4/5");
    });
    $("#i5").on('click', function () {
        $("#i1, #i2, #i3, #i4, #i5").removeClass("fa-regular").addClass("fa-solid");
        $("#info-output").text("You Rated 5/5");
    });


    //! Red Color Border 
    function setRedBorder($element) {
        $element.css({
            "border-color": "#FF0000",
            "box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6)"
        });
        $element.prev('span').css({
            "border-color": "#FF0000",
            "box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6)"
        });
    }
    //! Green Color Border 
    function setGreenBorder($element) {
        $element.css({
            "border-color": "#00FF00",
            "box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 255, 0, 0.6)"
        });
        $element.prev('span').css({
            "border-color": "#00FF00",
            "box-shadow": "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 255, 0, 0.6)"
        });
    }

    function validateUserName(userName) {

        var userName = $userName.val();
        var userNameRegex = /^[a-z0-9]+$/;
        if (userName.length == 0) {
            $("#user-error").text("UserName is required *");
            setRedBorder($userName);
            isNameValid = false;
        }
        else if (userName.length < 10) {
            $("#user-error").text("UserName must be at least 10 characters long *");
            setRedBorder($userName);
            isNameValid = false;
        }
        else if (userName.length > 20) {
            $("#user-error").text("UserName must not be more than 20 characters long *");
            setRedBorder($userName);
            isNameValid = false;
        }
        else if (!userNameRegex.test(userName)) {
            $("#user-error").text("UserName can only contain lowercase letters, numbers and no space *");
            setRedBorder($userName);
            isNameValid = false;
        }
        else {
            $("#user-error").text("");
            setGreenBorder($userName);
            isNameValid = true;
        }
        return isNameValid;
    }

    function validateEmail(email) {
        var email = $email.val();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.length == 0) {
            $("#email-error").text("Email is required *");
            setRedBorder($email);
            isEmailValid = false;

        }
        else if (!emailRegex.test(email)) {
            $("#email-error").text("Invalid email format *");
            setRedBorder($email);
            isEmailValid = false;

        }
        else {
            $("#email-error").text("");
            setGreenBorder($email);
            isEmailValid = true;
        }
    }

    function validatePassword(password) {
        var password = $password.val();
        var passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* )/
        if (password.length == 0) {
            $("#password-error").text("Password is required *");
            setRedBorder($password);
            isPasswordValid = false;
        }
        else if (password.length < 8) {
            $("#password-error").text("Password must be at least 8 characters long *");
            setRedBorder($password);
            isPasswordValid = false;
        }
        else if (!passwordRegex.test(password)) {
            $("#password-error").text("Password must contain one Capital letter,number and special character *");
            setRedBorder($password);
            isPasswordValid = false;

        } else if (password.length > 20) {
            $("#password-error").text("Password should not be more than 20 characters long *");
            setRedBorder($password);
            isPasswordValid = false;
        }
        else {
            $("#password-error").text("");
            setGreenBorder($password);
            isPasswordValid = true;
        }
    }

    function validateConfirmPassword(confirmPassword) {
        var confirmPassword = $confirmPassword.val();
        var password = $password.val();
        if (confirmPassword.length == 0) {
            $("#confirm-password-error").text("Confirm password is required *");
            setRedBorder($confirmPassword);
            isConfirmPasswordValid = false;
        }
        else if (confirmPassword != password) {
            $("#confirm-password-error").text("Passwords do not match *");
            setRedBorder($confirmPassword);
            isConfirmPasswordValid = false;
        }
        else {
            $("#confirm-password-error").text("");
            setGreenBorder($confirmPassword);
            isConfirmPasswordValid = true;
        }
    }

    function validateOneliner(oneliner) {
        var oneliner = $oneliner.val();
        if (oneliner.length == 0) {
            $("#oneliner-error").text("Oneliner is required *");
            setRedBorder($oneliner);
            isOnelinerValid = false;
        }
        else if (oneliner.length < 10) {
            $("#oneliner-error").text("Oneliner should be atleast 10 characters long *");
            setRedBorder($oneliner);
            isOnelinerValid = false;
        }
        else if (oneliner.length > 30) {
            $("#oneliner-error").text("Oneliner should not more then 30 characters long *");
            setRedBorder($oneliner);
            isOnelinerValid = false;

        }
        else {
            $("#oneliner-error").text("");
            setGreenBorder($oneliner);
            isOnelinerValid = true;
        }
    }

    function validateFirstName(firstName) {
        var firstName = $firstName.val();
        if (firstName.length == 0) {
            $("#first-name-error").text("First name is required *");
            setRedBorder($firstName);
            isFirstNameValid = false;
        }
        else if (firstName.length < 3) {
            $("#first-name-error").text("First name should be atleast 3 characters long *");
            setRedBorder($firstName);
            isFirstNameValid = false;
        }
        else if (firstName.length > 8) {
            $("#first-name-error").text("First name should not more then 8 characters long *");
            setRedBorder($firstName);
            isFirstNameValid = false;
        }
        else {
            $("#first-name-error").text("");
            setGreenBorder($firstName);
            isFirstNameValid = true;
        }
    }

    function validateLastName(lastName) {
        var lastName = $lastName.val();
        if (lastName.length == 0) {
            $("#last-name-error").text("Last name is required *");
            setRedBorder($lastName);
            isLastNameValid = false;
        }
        else if (lastName.length < 3) {
            $("#last-name-error").text("Last name should be atleast 3 characters long *");
            setRedBorder($lastName);
            isLastNameValid = false;
        }
        else if (lastName.length > 8) {
            $("#last-name-error").text("Last name should not more then 8 characters long *");
            setRedBorder($lastName);
            isLastNameValid = false;
        } else {
            $("#last-name-error").text("");
            setGreenBorder($lastName);
            isLastNameValid = true;
        }
    }

    function validateAbout(about) {
        var about = $about.val();
        if (about.length == 0) {
            $("#about-error").text("About is required *");
            setRedBorder($about);
            isAboutValid = false;
        }
        else if (about.length < 10) {
            $("#about-error").text("About should be atleast 10 characters long *");
            setRedBorder($about);
            isAboutValid = false;
        }
        else if (about.length > 100) {
            $("#about-error").text("About should not more then 100 characters long *");
            setRedBorder($about);
            isAboutValid = false;
        }
        else {
            $("#about-error").text("");
            setGreenBorder($about);
            isAboutValid = true;
        }
    }

    function radioValidate() {
        if ($("input[type='radio']:checked").length == 0) {
            $("#radio-error").text("Please select one *");
            isRadioValid = false;
        } else {
            $("#radio-error").text("");
            isRadioValid = true;
        }
    }

    function validateCheckBox() {
        let checked = $("input[type='checkbox']:checked").length;
        if (!checked) {
            $("#checkbox-error").text("Please check atleast one movie *");
            isCheckBoxValid = false;
        } else {
            $("#checkbox-error").text("");
            isCheckBoxValid = true;
        }
    }

    function printData() {
        var userName = $userName.val();
        var email = $email.val();
        var oneliner = $oneliner.val();
        var firstName = $firstName.val();
        var lastName = $lastName.val();
        var about = $about.val();
        var radio = $("input[type='radio']:checked").map(function () {
            return $(this).val();
        }).get().join(", ");
        var checkbox = $("input[type='checkbox']:checked").map(function () {
            return $(this).val();
        }).get().join(", ");
        var designStar = $("#design-output").text();
        var infoStar = $("#info-output").text();

        $("#output").append("<tr><td>" + userName + "</td><td>" + email + "</td><td>" + oneliner + "</td><td>" + firstName + "</td><td>" + lastName + "</td><td>" + about + "</td><td>" + radio + "</td><td>" + checkbox + "</td><td>" + designStar + "</td><td>" + infoStar + "</td></tr>");
    }

    function hideNoData() {
        $("#no-data").hide();
    }
});