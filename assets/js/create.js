/**
 * Use the jQuery Validate plugin to add validation to the form
 *
 * Here's what this you will need to do:
 *
 * 1. Include the following jQuery Validate JavaScript in layout.ejs
 *    <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.15.0/jquery.validate.min.js"></script>
 *
 * 2. Use jQuery validate and add validation to the form with the following requirements
 *    First Name - required, at least 2 characters
 *    Last Name  - required, at least 2 characters
 *	  start_date - make sure date is yyyy-mm-dd
 *	  ADD any other validation that makes you happy
 *
 * 3. Use a custom message for one validation
 *
 * 4. Make the color of the error text red
 *
 *
 *
 * Here's the documentation you need:
 * https://jqueryvalidation.org/validate/
 * https://jqueryvalidation.org/documentation/#link-list-of-built-in-validation-methods
 *
 */

(function() {

  $(function() {

    //code goes here
    errorClass: "text-danger",
    $("#addStudentForm").validate({
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
          pattern: '/^\d{4}-((0\d)|(1[012]))-(([012]\d)|3[01])$/'
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
           pattern: "The format should be yyyy-mm-dd"
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

  })

})();
