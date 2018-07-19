$(function () {
    $(".submit").click(function () {
        var isvalid = $("#regform").validate({
            rules: {
                usn: {
                    required: true,
                    minlength: 10,
                    maxlength: 10,
                },
                name: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    email: true,
                },
                mobile: {
                    required: true,

                },
                percentage: {
                    required: true,
                    min: 55,
                    max: 100,

                },
                course: {
                    required: true,
                }
            },
            messages: {
                usn: {
                    required: "USN can't be empty",

                },
                name: {
                    required: "Name can't be empty",
                    minlength: "Nmae should have atleast 3 charecter"
                },
                email: {
                    required: "please enter your email"
                },
                mobile: {
                    required: "Mobile number can't be empty"
                },
                percentage: {
                    required: "Please enter your percentage",
                    min: "Your not Eligible for placement drive",
                    max: "Invalid percentage, it should be below 100",
                },
                course: {
                    required: "Please select your course",
                }
            }
        }).form();
        if (isvalid) {
            var usn = $("#usn").val();
            var name = $("#name").val();
            var email = $("#email").val();
            var mobile = $("#mobile").val();
            var course = $("#course").val();
            var percentage = $("#percentage").val();
            $(".reset").click();

            student = {
                "usn": usn,
                "name": name,
                "email": email,
                "mobile": mobile,
                "course": course,
                "percentage": percentage,
            }
            console.log(student)
            return false;
        }

    });

});
