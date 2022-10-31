$(document).ready(function () {
        $("#specCodeError").hide();
        $("#specNameError").hide();
        $("#specNoteError").hide();
        var specCodeError = false;
        var specNameError = false;
        var specNoteError = false;
        function validate_specCode() {
          var val = $("#specCode").val();
          var exp = /^[A-Z]{4,12}$/;
          if (val == "") {
            $("#specCodeError").show();
            specCodeError = false;
            $("#specCodeError").html("<b>*code</b> can not be empty");
            $("#specCodeError").css("color", "red");
          } else if (!exp.test(val)) {
            $("#specCodeError").show();
            $("#specCodeError").html("<b>*code</b> must be 4-12 chars");
            $("#specCodeError").css("color", "red");
            specCodeError = false;
          } else {
            $("#specCodeError").hide();
            specCodeError = true;
          }
          return specCodeError;
        }
        function validate_specName() {
          var val = $("#specName").val();
          if (val == "") {
            $("#specNameError").show();
            specNameError = false;
            $("#specNameError").html("<b>*Name</b> can not be empty");
            $("#specCodeError").css("color", "red");
          } else {
            $("#specNameError").hide();
            specNameError = true;
          }
          return specNameError;
        }
        function validate_specNote() {
          var val = $("#specNote").val();
          if (val == "") {
            $("#specNoteError").show();
            $("#specNoteError").html("Notes should not be empty");
            $("#specNoteError").css("color", "red");
            specNoteError = false;
          } else {
            $("#specNoteError").hide();
            specNoteError = true;
          }
          return specNoteError;
        }
        $("#specCode").keyup(function () {
          $(this).val($(this).val().toUpperCase());
          validate_specCode();
        });
        $("#specName").keyup(function () {
          validate_specName();
        });
        $("#specNote").keyup(function () {
          validate_specNote();
        });
        $("#specForm").submit(function () {
          validate_specCode();
          validate_specName();
          validate_specNote();

          if (specCodeError && specNameError && specNoteError) return true;
          else return false;
        });
      });