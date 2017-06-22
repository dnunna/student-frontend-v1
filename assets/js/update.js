/**
 * Use the jQuery Validate and the bootstrap-select plugin to enhance this page
 *
 * Here's what this you will need to do:
 *
 * 1. When the page is loaded all form fields should be disabled except
 *    for the dropdown to select a student
 *
 * 2. Using the bootstrap-selct plugin render dropdown on the page
 *
 * 3. Use the live search functionality to make the dropdown searchable
 *
 * 4. Add the user glyphicons next to each student in the list
 *
 * 6. Add a menu header to the dropdown
 *
 * 7. Customize further with anything you find intersting
 *
 * 8. When an student is selected the form fields should be enabled
      and populated with the data for the selected student
 *
 * 9. Use jQuery validate and add validation to the form with the following requirements
 *    First Name - required, at least 2 characters
 *    Last Name  - required, at least 2 characters
 *	  start_date - make sure date is yyyy-mm-dd
 *	  ADD any other validation that makes you happy
 *
 * 10. Make the color of the error text red
 *
 *
 *
 * Here's the documentation you need:
 * https://jqueryvalidation.org/validate/
 * https://jqueryvalidation.org/documentation/#link-list-of-built-in-validation-methods
 * https://silviomoreto.github.io/bootstrap-select/
 * https://silviomoreto.github.io/bootstrap-select/examples/
 * http://getbootstrap.com/components/#glyphicons
 * https://api.jquery.com/jQuery.get/
 * http://stackoverflow.com/questions/9807426/use-jquery-to-re-populate-form-with-json-data
 *
 */

(function() {

    $(function() {

        //declaring the variables for retrieving the data and repopulating on UI
        var first_name = $("#first_name");
        var last_name  = $("#last_name");
        var start_date = $("#start_date");
        var gpa = $("#gpa");
        var sat = $("#sat");
        var major_id = $("#major_id");
        var student_id = $("#student_id");

        //code goes here
        //this is to envoke bootstrap dropdown
        $('#studentId').selectpicker({
          style: 'btn-info',
          size: 4
        });

        //this is to disable the form fields before selecting the student name to update
        $("#updateStudentForm :input").prop("disabled", true);

        //this is to enable the form fields after selecting the student name to update
        $("#studentId").on("changed.bs.select", function() {
          $("#updateStudentForm :input").prop("disabled", false);
        });


        //function that upon a change will identify the correct ID that is selected
        $("#studentId").change(function() {
            var idClick = $(this).val();
            console.log(idClick);

            //retrieving the data to populate the form
            var url = ("http://localhost:1337/student" + "/" + idClick);

              $.get(url, function(data) {
                first_name.val(data.first_name);
                last_name.val(data.last_name);
                start_date.val(data.start_date);
                gpa.val(data.gpa);
                sat.val(data.sat);
                major_id.val(data.major_id);
                student_id.val(data.student_id);

            });
            });
            errorClass: "text-danger",

            $("#updateStudentForm").validate({
            rules: {
            first_name: {
              required: true,
              minlength: 2
            },
            last_name: {
              required: true,
              minlength: 2
            },
            start_date: {
              reuired: true,
            },
            gpa: {
              min: 2,
              max: 4.0
            },
            sat: {
              min: 500,
              max: 2000
            }
          },
          messages: {
            first_name: {
              required: "First name is required",
              minlength: "At least 2 characters required!"
            },
            last_name: {
              required: "Last name is required",
              minlength: "At least 2 characters required!"
            },
            start_date: {
               required: "start_date is required",
             },
            gpa: {
              min: "The min gpa should be 2",
              max: "The max gpa is 4"
            },
            sat: {
              min: "The min sat should be 500",
              max: "The max sat is 2000"
            }
          }
        });



          // var myData = $("form#updateStudentForm").serialize();
          // $.get({
          // url: "http://localhost:1337/student",
          // type: "post",
          // data: myData,
          // }
          // });

        })

    })();
