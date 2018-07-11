$(document).on('click', '.browse', function () {
    var file = $(this).parent().parent().parent().find('.file');
    file.trigger('click');
});
$(document).on('change', '.file', function () {
    $(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
});



$(document).ready(function () {
    $('.datepicker').datepicker({

        format: 'dd/mm/yyyy'
    });
    $("#workhide").hide();
    
    //(month < 10 ? '0' : '') + month + '/' +
    // (day < 10 ? '0' : '') + day;

    //$("#JoiningDate").val(output);

    $(document).on('click', '#printButton', function (event) {
        event.preventDefault();
        var $print = $("#modalcontent");
        $(document.body).wrapInner('<div style="display: none"></div>');
        var $div = $('<div />').append($print.clone().contents()).appendTo(document.body);
        window.print();
        $div.remove();
        $(document.body).children().contents().unwrap();
    });

    //$('#printButton').on('click', function () {
    //    if ($('.modal').is(':visible')) {
    //    //  var modalId = $(event.target).closest('.modal').attr('id');
    //      $('body').css('visibility', 'hidden');
    //      $('#printbody').css('visibility', 'visible');
    //     // $('#printbody).removeClass('modal-body');
    //       window.print();
    //      $('body').css('visibility', 'visible');
    //      $('#printbody').addClass('modal-body');
    //   } else {
    //     window.print();
    //    }
    //});


    //  $('.nav li').not('.active').addClass('disabled');
    //to actually disable clicking the bootstrap tab, as noticed in comments by user3067524//
    // $('.nav li').not('.active').find('a').removeAttr("data-toggle");

    $(".OnlyAlphabets").on('input', function (event) {
       
        this.value = this.value.replace(/[^a-zA-Z\s]/g,'');


    });

    $("#FirstName,#LastName,#Email,#PermanentAddress,#PermanentCity,#PermanentState,#PermanentPincode,#PermanentMobile").keyup(function (e) {

        if ($("#FirstName").val() != '' && $('#LastName').val() != '' && $("#Email").val() != '' && $("#PermanentAddress").val() != '' && $("#PermanentCity").val() != '' && $("#PermanentState").val() != '' && $("#PermanentPincode").val() != '' && $("#PermanentMobile").val() != '') {

            $('#savebutton1').prop('disabled', false);
        }


        else {
            $('#savebutton1').prop('disabled', true);
        }
    });
    //" + i + "
    var i = 1;
    $("#add_row").click(function () {
        if (i < 8) {
            $('#addr' + i).html("<td>" + (i + 1) + "</td><td><input name='InsuredName" + i + "' type='text' id='InsuredName" + i + "' placeholder='Name' class='form-control OnlyAlphabets' /> </td><td><input  name='InsuredDOB" + i + "' id='InsuredDOB" + i + "' type='text'  class='form-control datepicker' placeholder='dd/mm/yyyy'></td><td><select class='form-control' id='Relationship" + i + "' name='Relationship" + i + "'><option selected>Self</option><option>Spouse</option><option>Father</option><option>Mother</option><option>Son</option><option>Daughter</option><option>Mother-In-Law</option><option>Father-In-Law</option></select></td>");

            $('#insuredtab_logic').append('<tr id="addr' + (i + 1) + '"></tr>');
            i++;
        }
        $('.datepicker').datepicker({

            format: 'dd/mm/yyyy'
        });
    });

    $("#delete_row").click(function () {
        if (i > 1) {
            $("#addr" + (i - 1)).html('');
            i--;
        }
    });
    var j = 1
    $("#add_device").click(function () {

        $('#deviceaddr' + j).html("<td>" + (j + 1) + "</td><td class='col-sm-2'><select class='form-control' id='DeviceType" + j + "' name='DeviceType" + j + "'><option>Laptop</option><option>Mobile</option><option>Ipad</option></select> </td><td><input  name='Make" + j + "'id='Make" + j + "' type='text'  class='form-control input-md'></td><td class='col-sm-2'><input  name='ModelNo" + j + "' id='ModelNo" + j + "' type='text'   class='form-control input-md'></td><td class='col-sm-2'><input name='SerialNo" + j + "'id='SerialNo" + j + "' type='text'  class='form-control input-md'  /> </td><td><input name='HDD" + j + "' id='HDD" + j + "' type='text'  class='form-control input-md'  /> </td><td><input name='RAM" + j + "' id='RAM" + j + "' type='text'  class='form-control input-md'  /> </td><td class='col-sm-2'><input name='DeviceIssue" + j + "' id='DeviceIssue" + j + "' type='text'  class='form-control datepicker' placeholder='dd/mm/yyyy' /> </td class='col-sm-2'><td><input name='DeviceReturn" + j + "'id='DeviceReturn" + j + "' type='text'  class='form-control datepicker' placeholder='dd/mm/yyyy' /> </td>");

        $('#devicetab_logic').append('<tr id="deviceaddr' + (j + 1) + '"></tr>');
        j++;
        $('.datepicker').datepicker({

            format: 'dd/mm/yyyy'
        });
    });
    $("#delete_device").click(function () {
        if (j > 1) {
            $("#deviceaddr" + (j - 1)).html('');
            j--;
        }
    });
    var k = 1;
    $("#add_visa").click(function () {
        if (k < 8) {
            $('#visaaddr' + k).html("<td>" + (k + 1) + "</td><td><input name='VisaType" + k + "' type='text' id='VisaType" + k + "'  class='form-control OnlyAlphabets' /> </td><td><input  name='Country" + k + "' id='Country" + k + "' type='text'  class='form-control OnlyAlphabets' ></td><td><input  name='VisaExpired" + k + "' id='VisaExpired" + k + "' type='text'   class='form-control datepicker' placeholder='dd/mm/yyyy'></td>");

            $('#visatable_logic').append('<tr id="visaaddr' + (k + 1) + '"></tr>');
            k++;
        }
        $('.datepicker').datepicker({

            format: 'dd/mm/yyyy'
        });
    });

    $("#delete_visa").click(function () {
        if (k > 1) {
            $("#visaaddr" + (k - 1)).html('');
            k--;
        }
    });

    var m= 1;
    $("#add_pdf").click(function () {
        if (m < 10) {
            $('#filerow' + m).html("<td class='text-center col-md-1'>" + (m + 1) + "</td><td class='text-center col-md-5'><select name='FileDescription' type='text' id='FileDescription" + m + "'  class='form-control input-md'><option selected>PAN Card </option><option>Birth Certificate</option><option>10th Marks Card</option> <option>Degree Certificate</option><option>Address Proof</option><option>Passport</option><option>Driving Licence</option><option>Visa</option><option>Technical Certifications</option><option>Others</option></select></td><td class='text-center col-md-6'><div class='form-group'><input type='file' name='files' class='file' ><div class='input-group col-xs-10'><span class='input-group-addon'><i class='glyphicon glyphicon-file'></i></span> <input type='text' class='form-control input-lg' disabled placeholder='Upload .PDF file'> <span class='input-group-btn'><button class='browse btn btn-primary input-lg' type='button'><i class='glyphicon glyphicon-search'></i> Browse</button></span></div></div></td>");

            $('#pdfFilestable').append('<tr id="filerow' + (m + 1) + '" style="background-color:white;"></tr>');
            m++;
        }
    });

    $("#delete_pdf").click(function () {
        if (m > 1) {
            $("#filerow" + (m - 1)).html('');
            m--;
        }
    });



   

    $('#passnotexist,#passapplied,#passexpired').click(function () {

        $('#PassportNo,#PassportFirstName,#PassportLastName,#PassportIssue,#PassportExpiry,#BirthPlace').val('');
        $('#PassportNo,#PassportFirstName,#PassportLastName,#PassportIssue,#PassportExpiry,#BirthPlace').attr('readonly', true);



        // Do something interesting here
    });
    $('#passexist').click(function () {


        $('#PassportNo,#PassportFirstName,#PassportLastName,#PassportIssue,#PassportExpiry,#BirthPlace').attr('readonly', false);



        // Do something interesting here
    });
    $("#PresentPhone,#PermanentPhone,#Phone,#Access").on('input', function (event) {
        this.value = this.value.replace(/[^0-9+-]/g, '');
    });


   



    $('#radioyes').click(function () {
       

        $("#PresentAddress").val($("#PermanentAddress").val());
        $("#PresentCity").val($("#PermanentCity").val());
      
        $("#PresentState").val($('select[name="PermanentState" ]').val());
        $("#PresentPincode").val($("#PermanentPincode").val());
        $("#PresentMobile").val($("#PermanentMobile").val());
        $("#PresentPhone").val($("#PermanentPhone").val());
        $('#PresentAddress,#PresentCity,#PresentState,#PresentPincode,#PresentMobile,#PresentPhone').attr('readonly', true);

    });
    $('#radiono').click(function () {
        $("#PresentAddress,#PresentCity,#PresentState,#PresentPincode,#PresentMobile,#PresentPhone").val('');
        $('#PresentAddress,#PresentCity,#PresentState,#PresentPincode,#PresentMobile,#PresentPhone').attr('readonly', false);


    });
    $("#next").click(function (e) {
        e.preventDefault();
        $('#mytab a[href="#menu1"]').tab('show');
    });

    $("#savebutton1").button().click(function () {
        var radiogender = $('input[name="gender"]:checked').val();

        var radiocheck;
        if (radiogender === "Male") {
            radiocheck = 'Male';
        }
        else {
            radiocheck = 'Female';
        }


        var radiomarital = $('input[name="gender"]:checked').val();

        var radiocheckmarital;
        if (radiomarital === "Married") {
            radiocheckmarital = 'Married';
        } else {
            radiocheckmarital = 'Unmarrried';
        }
        



        var radiowork = $('input[name="workpermit"]:checked').val();

        var radiocheck1;
        if (radiowork === "workyes") {
            radiocheck1 = 'Yes';
        }
        else {
            radiocheck1 = 'No';
        }



        //  $('.nav li.active').next('li').removeClass('disabled');
        // $('.nav li.active').next('li').find('a').attr("data-toggle", "tab")
        // $('#home').addClass('hide').find('a').removeAttr("data-toggle");
        /*enable next tab*/


        // $('#myTab a[href="#menu1"]').tab('show');
        // $('#myTab a[href="#home"]').tab('hide');
        //  $('#home').next('#menu1').removeClass('disabled');
        // $('#home').next('#menu1').find('a').attr("data-toggle", "tab");
        //  $('#pill2').not('.active').removeClass('disabled');
        //  $('#mytab li.disabled').find('a').attr('data-toggle',"tab");
        //   $('#home,#menu2,#menu3,#menu4,#menu5').not('.active').find('a').removeAttr("data-toggle");

        var now = new Date();

        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);

        var today = day + "/" + month + "/" + now.getFullYear();
        $.ajax({
          

            type: "POST",
            async: true,
            data: JSON.stringify({


                employee: {
                    JoiningDate: today,
                    FirstName: $('#FirstName').val(),
                    LastName: $('#LastName').val(),
                    DOB: $('#DOB').val(),
                    Email: $('#Email').val(),
                    BloodGroup: $('#BloodGroup').val(),
                    Gender: radiocheck,
                    MaritalStatus: radiocheckmarital,
                    Location: $('#Location').val(),
                    Designation: $('#Designation').val(),
                    Citizenship: $('#Citizenship').val(),
                    WorkPermit: radiocheck1,
                    PermanentCountry: $('#PermanentCountry').val(),
                    PermanentAddress: $('#PermanentAddress').val(),
                    PermanentCity: $('#PermanentCity').val(),
                    PermanentState: $('#PermanentState').val(),
                    PermanentPincode: $('#PermanentPincode').val(),
                    PermanentPhone: $('#PermanentPhone').val(),
                    PermanentMobile: $('#PermanentMobile').val(),
                    PresentCountry: $('#PresentCountry').val(),
                    PresentAddress: $('#PresentAddress').val(),
                    PresentCity: $('#PresentCity').val(),
                    PresentState: $('#PresentState').val(),
                    PresentPincode: $('#PresentPincode').val(),
                    PresentMobile: $('#PresentPhone').val(),
                    PresentPhone: $('#PresentPhone').val()
                }
            }),
            url: "PersonalDetails",
            contentType: 'application/json; charset=utf-8',
            success: function (response) {

                $('#mytab a[href="#menu1"]').tab('show');
                $('#pill1').addClass('disabled');
                $('#pill1').find('a').removeAttr("data-toggle");
                /*enable next tab*/

            },
            error: function (error) {
                bootbox.alert("error");

            }

        });




    });
    $("#chevron1").button().click(function () {
        $('#mytab a[href="#menu1"]').tab('show');

    });
    ///////////////////////////////////////////////////////////////////////////////////
    $("#savebutton2").button().click(function () {

        $.ajax({

            type: "POST",
            data: JSON.stringify({
                emergency: {
                    EmergencyName1: $('#EmergencyName1').val(),
                    EmergencyRelation1: $('#EmergencyRelation1').val(),
                    EmergencyMobile1: $('#EmergencyMobile1').val(),
                    EmergencyPhone1: $('#EmergencyPhone1').val(),
                    EmergencyAddress1: $('#EmergencyAddress1').val(),
                    EmergencyName2: $('#EmergencyName2').val(),
                    EmergencyRelation2: $('#EmergencyRelation2').val(),
                    EmergencyMobile2: $('#EmergencyMobile2').val(),
                    EmergencyPhone2: $('#EmergencyPhone2').val(),
                    EmergencyAddress2: $('#EmergencyAddress2').val()
                }
            }),
            url: "EmergencyContacts",
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                $('#hiddenval').val(response);



                $('#mytab a[href="#menu2"]').tab('show');
            },
            error: function (response) {
                bootbox.alert(response);
            }
        });
    });

    $("#chevronleft2").button().click(function () {
        $('#mytab a[href="#home"]').tab('show');

    });
    $("#chevronright2").button().click(function () {
        $('#mytab a[href="#menu2"]').tab('show');

    });
    //////////////////////////////////////////////////////////////////////////

    $("#savebutton3").button().click(function () {



        var values = $('#insuredtab_logic tr:has(td)').map(function (i, v) {
            var $td = $('td', this);
            return {
                EmployeeNumber :$('#hiddenval').val(),
                InsuredName: $($td[1]).find("input").val(),
                InsuredDOB: $($td[2]).find("input").val(),
                Relationship: $($td[3]).find("select").val(),

            }
        }).get();
        //Convert data to JSON
        var estimateObject = JSON.stringify({ 'insurance': values });
        //post data to Controller Action



        $.ajax({
            type: 'POST',
            url: "InsuranceDetails",
            data: estimateObject,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                if (data)


                    $('#mytab a[href="#menu3"]').tab('show');
            },
            error: function (response) {
                debugger;
                bootbox.alert(response);
            }
        });


    });



    $("#chevronleft3").button().click(function () {
        $('#mytab a[href="#menu1"]').tab('show');

    });
    $("#chevronright3").button().click(function () {
        $('#mytab a[href="#menu3"]').tab('show');

    });
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////  
    $("#savebutton4").button().click(function () {
        var radio = $('input[name="passportstatus"]:checked').val();
        var radio_label = "Passport Status";
        var rdo;
        if (radio === "exist") {
            rdo = 'Available';
        } else if (radio === "applied") {
            rdo = 'Applied';
        }
        else if (radio === "expired") {
            rdo = 'Expired';
        }
        else if (radio === "notexist") {
            rdo = "Doesn't Exist";
        }

        var checkbox = $('input[name="docprovided"]').val();
        var checkbox_label = "Documents Provided";
        var chkArray = [];
        $('input[name="docprovided"]:checked').each(function () {
            chkArray.push($(this).val());
        });
        var chkval = '';
        var chkSelected1 = false;
        var chkSelected2 = false;
        var chkSelected3 = false;
        $.each(chkArray, function (index, value) {
            if (value === "pancheck") {
                chkSelected1 = true;
                chkval += 'PAN Card';
            } else if (value === "addresscheck") {
                if (chkSelected1) {
                    chkval += ', ';
                }
                chkSelected2 = true;
                chkval += 'Address-Proof';
            } else if (value === "degree") {
                if (chkSelected2) {
                    chkval += ', ';
                }
                chkSelected3 = true;
                chkval += 'Degree-Certificates ';

            }
        });

        var documentdetails = $('#visatable_logic tr:has(td)').map(function (i, v) {
            var $td = $('td', this);
            return {
                EmployeeNumber: $('#hiddenval').val(),
                PANNo: $('#PANNo').val(),
                PANName: $('#PANName').val(),
                PANFatherName: $('#PANFatherName').val(),
                PANDOB: $('#PANDOB').val(),
                PassportStatus: rdo,
                PassportFirstName: $('#PassportFirstName').val(),
                PassportLastName: $('#PassportLastName').val(),
                PassportNo: $('#PassportNo').val(),
                BirthPlace: $('#BirthPlace').val(),
                PassportIssue:$('#PassportIssue').val(),
                PassportExpiry: $('#PassportExpiry').val(),
                DocumentsProvided: chkval,
                OfferedDate: $('#OfferedDate').val(),
                FirstJobDate: $('#FirstJobDate').val(),

                Country: $($td[1]).find("input").val(),
                VisaType: $($td[2]).find("input").val(),
                VisaExpiry: $($td[3]).find("input").val(),
            }
        }).get();
        //Convert data to JSON
        var documentObject = JSON.stringify({ 'document': documentdetails });
        //post data to Controller Action


        $.ajax({
            type: "POST",
            data: documentObject,
            url: "DocumentDetails",
            contentType: 'application/json; charset=utf-8',
            success: function (response) {

                $('#mytab a[href="#menu6"]').tab('show');
            },
            error: function (error) {
                bootbox.alert("Error");
            }
        });
    });



    $("#chevronleft4").button().click(function () {
        $('#mytab a[href="#menu2"]').tab('show');

    });
    $("#chevronright4").button().click(function () {
        $('#mytab a[href="#menu4"]').tab('show');

    });
    //-----------------------------------------------------------------------------------------------------------------------
    $("#savebutton6").button().click(function () {

        $.ajax({

            type: "POST",
            data: JSON.stringify({
                bank: {
                    EmployeeNumber: $('#hiddenval').val(),
                    BankName: $('#BankName').val(),
                    AccountName: $('#AccountName').val(),
                    AccountNo: $('#AccountNo').val(),
                    Branch: $('#Branch').val(),
                    IFSCcode: $('#IFSCcode').val(),
                   

                }
            }),
            url: "BankDetails",
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
               



                $('#mytab a[href="#menu4"]').tab('show');
            },
            error: function (response) {
                bootbox.alert(response);
            }
        });
    });
    //----------------------------------------------------------------------------------------------------------------------
    $("#savebutton5").button().click(function () {

        if ($("#DeviceReturn").val() === "") {
            $("#DeviceReturn").val("");
            if ($("#DeviceIssue").val() === "1800-01-01") {
                $("#DeviceIssue").val("1800-01-01");
            }
        }


        var checkArray = [];
        $('input[name="peripherals"]:checked').each(function () {
            checkArray.push($(this).val());
        });
        var checkval = '';
        var checkSelected1 = false;
        var checkSelected2 = false;
        var checkSelected3 = false;
        var checkSelected4 = false;
        $.each(checkArray, function (index, value) {
            if (value === "keyboard") {
                checkSelected1 = true;
                checkval += 'Keyboard';
            } else if (value === "mouse") {
                if (checkSelected1) {
                    checkval += ', ';
                }
                checkSelected2 = true;
                checkval += 'Mouse';
            } else if (value === "monitor") {
                if (checkSelected2) {
                    checkval += ', ';
                }
                checkSelected3 = true;
                checkval += 'Monitor ';

            }
            else if (value === "headphone") {
                if (checkSelected3) {
                    checkval += ', ';
                }
                checkSelected4 = true;
                checkval += 'HeadPhone ';

            }
        });

        var devices = $('#devicetab_logic tr:has(td)').map(function (i, v) {
            var $td = $('td', this);

            return {
                EmployeeNumber: $('#hiddenval').val(),
                DeviceType: $($td[1]).find("select").val(),
                Make: $($td[2]).find("input").val(),
                ModelNo: $($td[3]).find("input").val(),
                SerialNo: $($td[4]).find("input").val(),
                HDD: $($td[5]).find("input").val(),
                RAM: $($td[6]).find("input").val(),
                DeviceIssue: $($td[7]).find("input").val(),
                DeviceReturn:$($td[8]).find("input").val(),
                Peripherals: checkval,
                AccessCardNo: $("#Access").val()
            }
        }).get();





        //Convert data to JSON
        var estimateObject = JSON.stringify({
            device: devices
        });
        //post data to Controller Action



        $.ajax({
            type: 'POST',
            url: "DeviceDetails",
            data: estimateObject,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                if (data)
                   
                $('#mytab a[href="#menu5"]').tab('show');

            },
            error: function (response) {
                debugger;
                alert(response);
            }
        });

    });


    
    //-------------------------------------------------------------------------------------------------------------------------------------------------

    $("#uploadimage").click(function () {
        var file = new FormData();

        file.append("file", jQuery("#file").get(0).files[0]);

        $.ajax({
            type: "POST",
            url: "UploadPhoto",
            data: file,
            contentType: false,
            processData: false,

            success: function (response) {
                $('#showpreview').prop('disabled', false);
                bootbox.alert(response);
              //  $('#viewbag').text.alert(response);

            }
        });
    });

    //$("#uploadAllpdf").click(function () {
     
    //    var Filedetails = $('#pdfFilestable tr:has(td)').map(function (i, v) {
    //        var $td = $('td', this);
    //        return {
               

    //            FileDescription: $($td[1]).find("select").val()
               
    //        }
    //    }).get();
    //    //Convert data to JSON
    //    var FileObject = JSON.stringify({ 'FileDescription': Filedetails });

     
       
    //    $.ajax({
    //        type: "POST",
    //        url: "UploadFiles",
    //        data: FileObject,
    //        dataType: 'json',
    //        contentType: 'application/json; charset=utf-8',

    //        success: function () {


    //        }
    //    });
    //});



    $("#loginbutton").button().click(function () {

        $.ajax({

            type: "POST",
            data: JSON.stringify({
                login: {
                    LoginUserName: $('#UserName').val(),
                    LoginUserPassword: $('#Pass').val(),

                }
            }),
            url: "Home/ValidateLogin",
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',

        });
    });



    $('#PassportExpiry').on('blur', function () {


        var first = document.getElementById('PassportIssue').value;
        var second = document.getElementById('PassportExpiry').value;



        if ((new Date(first).getTime() > new Date(second).getTime())) {
            bootbox.alert("Invalid Issue Or Expiry Date" + "!");

            $("#savebutton4").prop("disabled", true);
        }


        else {

            $("#savebutton4").prop("disabled", false);
        }


    });
    $('#radiobankyes').click(function () {

      
        $("#BankName").val("HDFC");
        $("#BankName").prop("disabled", true);

    });
    $('#radiobankno').click(function () {

        $("#BankName").val('');
       
        $("#BankName").prop("disabled", false);


    });
   
    $('#Citizenship').on('blur', function () {
        if ($("#Citizenship").val() != "IN")
        {
            $("#workhide").show();
        }
        else
        {
            $("#workhide").hide();
        }

    });
    $('#Email').blur(function () {
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (testEmail.test(this.value)) {

        }
        else {
            bootbox.alert("Email Adress Format is Incorrect" + "!");
            $("#Email").val('');
        }
        

    });
    $('#OfficialMail')
        .blur(function() {
            var testEmail = /^[A-Za-z]+\.([A-Za-z])+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
            if (testEmail.test(this.value)) {

            } else {
                bootbox.alert("Email Adress Format is Incorrect" + "!");
                $("#OfficialMail").val('');
            }
        });
    $('#PANNo').blur(function () {
        var nPANNo = document.getElementById('PANNo').value;
        if (nPANNo.value != '') {
            var ObjVal = nPANNo;
            var pancardPattern = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
            var patternArray = ObjVal.match(pancardPattern);
            if (patternArray == null) {
                bootbox.alert('PAN Card No Invalid !');
                return false;
            }
            return true;
        }


    });
 
   


    function readURL(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#previewpic').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }
    function PreviewImage(frameid, fileid) {
        var frameid = frameid
        var fileid = fileid
        pdffile = document.getElementById(fileid).files[0];
        pdffile_url = URL.createObjectURL(pdffile);
        $('#' + frameid).attr('src', pdffile_url);
    }
    $("#showpreview").button().click(function () {
        preview();
    });

    $("#file").change(function () {
        readURL(this);
    });
    
   
   

   





    function preview() {
        var radiogender = $('input[name="gender"]:checked').val();

        var radiocheck;
        if (radiogender === "Male") {
            radiocheck = 'Male';
        }
        else {
            radiocheck = 'Female';
        }


        var radiomarital = $('input[name="gender"]:checked').val();

        var radiocheckmarital;
        if (radiomarital === "Married") {
            radiocheckmarital = 'Married';
        } else {
            radiocheckmarital = 'Unmarrried';
        }
        var JoiningDate = $('#JoiningDate').val();
        var firstname = $('#FirstName').val();
        var lastname = $('#LastName').val();
        var DOB = $('#DOB').val();
        var BloodGroup = $('#BloodGroup').val();
        var Email = $('#Email').val();
        var Gender = radiocheck;
        var MaritalStatus = radiocheckmarital;
        var Location = $('#Location').val();
        var Designation = $('#Designation').val();
        var Citizenship = $('#Citizenship').val();
        var PermanentCountry = $('#PermanentCountry').val();
        var PermanentAddress = $('#PermanentAddress').val();
        var PermanentCity = $('#PermanentCity').val();
        var PermanentState = $('#PermanentState').val();
        var PermanentPincode = $('#PermanentPincode').val();
        var PermanentPhone = $('#PermanentPhone').val();
        var PermanentMobile = $('#PermanentMobile').val();
        var PresentCountry = $('#PresentCountry').val();
        var PresentAddress = $('#PresentAddress').val();
        var PresentCity = $('#PresentCity').val();
        var PresentState = $('#PresentState').val();
        var PresentPincode = $('#PresentPincode').val();
        var PresentMobile = $('#PresentMobile').val();
        var PresentPhone = $('#PresentPhone').val();

        var EmergencyName1 = $('#EmergencyName1').val();
        var EmergencyRelation1 = $('#EmergencyRelation1').val();
        var EmergencyMobile1 = $('#EmergencyMobile1').val();
        var EmergencyPhone1 = $('#EmergencyPhone1').val();
        var EmergencyAddress1 = $('#EmergencyAddress1').val();
        var EmergencyName2 = $('#EmergencyName2').val();
        var EmergencyRelation2 = $('#EmergencyRelation2').val();
        var EmergencyMobile2 = $('#EmergencyMobile2').val();
        var EmergencyPhone2 = $('#EmergencyPhone2').val();
        var EmergencyAddress2 = $('#EmergencyAddress2').val();


        var PANNo = $('#PANNo').val();
        var PANName = $('#PANName').val();
        var PANFatherName = $('#PANFatherName').val();
        var PANDOB = $('#PANDOB').val();
        var BirthPlace = $('#BirthPlace').val();
        var PassportFirstName = $('#PassportFirstName').val();
        var PassportLastName = $('#PassportLastName').val();
        var PassportNo = $('#PassportNo').val();
        var PassportIssue = $('#PassportIssue').val();
        var PassportExpiry = $('#PassportExpiry').val();

        var InsuredName = [$('#InsuredName').val(), $('#InsuredName1').val(), $('#InsuredName2').val(), $('#InsuredName3').val(), $('#InsuredName4').val(), $('#InsuredName5').val(), $('#InsuredName6').val(), $('#InsuredName7').val()];
        var InsuredDOB = [$('#InsuredDOB').val(), $('#InsuredDOB1').val(), $('#InsuredDOB2').val(), $('#InsuredDOB3').val(), $('#InsuredDOB4').val(), $('#InsuredDOB5').val(), $('#InsuredDOB6').val(), $('#InsuredDOB7').val()];
        var Relationship = [$('#Relationship').val(), $('#Relationship1').val(), $('#Relationship2').val(), $('#Relationship3').val(), $('#Relationship4').val(), $('#Relationship5').val(), $('#Relationship6').val(), $('#Relationship7').val(), ];

        var DeviceType = [$('#DeviceType').val(), $('#DeviceType1').val(), $('#DeviceType2').val(), $('#DeviceType3').val(), $('#DeviceType4').val(), $('#DeviceType5').val()];
        var Make = [$('#Make').val(), $('#Make1').val(), $('#Make2').val(), $('#Make3').val(), $('#Make4').val(), $('#Make5').val()];
        var ModelNo = [$('#ModelNo').val(), $('#ModelNo1').val(), $('#ModelNo2').val(), $('#ModelNo3').val(), $('#ModelNo4').val(), $('#ModelNo5').val()];
        var SerialNo = [$('#SerialNo').val(), $('#SerialNo1').val(), $('#SerialNo2').val(), $('#SerialNo3').val(), $('#SerialNo4').val(), $('#SerialNo5').val()];
        var HDD = [$('#HDD').val(), $('#HDD1').val(), $('#HDD2').val(), $('#HDD3').val(), $('#HDD4').val(), $('#HDD5').val()];
        var RAM = [$('#RAM').val(), $('#RAM1').val(), $('#RAM2').val(), $('#RAM3').val(), $('#RAM4').val(), $('#RAM5').val()];
        var DeviceIssue = [$('#DeviceIssue').val(), $('#DeviceIssue1').val(), $('#DeviceIssue2').val(), $('#DeviceIssue3').val(), $('#DeviceIssue4').val(), $('#DeviceIssue5').val()];
        var DeviceReturn = [$('#DeviceReturn').val(), $('#DeviceReturn1').val(), $('#DeviceReturn2').val(), $('#DeviceReturn3').val(), $('#DeviceReturn4').val(), $('#DeviceReturn5').val()];

        var Country = [$('#Country').val(), $('#Country1').val(), $('#Country2').val(), $('#Country3').val(), $('#Country4').val()];
        var VisaType = [$('#VisaType').val(), $('#VisaType1').val(), $('#VisaType2').val(), $('#VisaType3').val(), $('#VisaType4').val()];
        var VisaExpiry = [$('#VisaExpiry').val(), $('#VisaExpiry1').val(), $('#VisaExpiry2').val(), $('#VisaExpiry3').val(), $('#VisaExpiry4').val()];

        var OfferDate = $('#OfferedDate').val();
        var FirstJobDate = $('#FirstJobDate').val();



        $.each(InsuredName, function (index, value) {

            if (value === undefined) {
                InsuredName[index] = "";
            }

        });

        $.each(InsuredDOB, function (index, value) {

            if (value === undefined) {
                InsuredDOB[index] = "";
            }

        });

        $.each(Relationship, function (index, value) {

            if (value === undefined) {
                Relationship[index] = "";
            }

        });
        $.each(DeviceType, function (index, value) {

            if (value === undefined) {
                DeviceType[index] = "";
            }

        });
        $.each(Make, function (index, value) {

            if (value === undefined) {
                Make[index] = "";
            }

        });
        $.each(ModelNo, function (index, value) {

            if (value === undefined) {
                ModelNo[index] = "";
            }

        });
        $.each(SerialNo, function (index, value) {

            if (value === undefined) {
                SerialNo[index] = "";
            }

        });
        $.each(HDD, function (index, value) {

            if (value === undefined) {
                HDD[index] = "";
            }

        });
        $.each(RAM, function (index, value) {

            if (value === undefined) {
                RAM[index] = "";
            }

        });
        $.each(DeviceIssue, function (index, value) {

            if (value === undefined) {
                DeviceIssue[index] = "";
            }

        });
        $.each(DeviceReturn, function (index, value) {

            if (value === undefined) {
                DeviceReturn[index] = "";
            }

        });

        $.each(Country, function (index, value) {

            if (value === undefined) {
                Country[index] = "";
            }

        });
        $.each(VisaType, function (index, value) {

            if (value === undefined) {
                VisaType[index] = "";
            }

        });
        $.each(VisaExpiry, function (index, value) {

            if (value === undefined) {
                VisaExpiry[index] = "";
            }

        });


        var firstname_label = "First Name";
        var lastname_label = "Last Name";
        var Email_label = "Personal Email";
        var DOB_label = "Date Of Birth";
        var BloodGroup_label = "Blood Group";
        var Gender_label = "Gender";
        var MaritalStatus_label = "Marital Status"
        var Location_label = "Location";
        var Designation_label = "Designation";
        var Citizenship_label = "Citizenship";
        var PermanentCountry_label = "PermanentCountry";
        var PermanentAddress_label = "Address";
        var PermanentCity_label = "City";
        var PermanentState_label = "State";
        var PermanentPincode_label = "Pincode";
        var PermanentPhone_label = "Phone";
        var PermanentMobile_label = "Mobile";
        var PresentCountry_label = "PresentCountry";
        var PresentAddress_label = "Address";
        var PresentCity_label = "City";
        var PresentState_label = "State";
        var PresentPincode_label = "Pincode";
        var PresentPhone_label = "Phone";
        var PresentMobile_label = "Mobile";
        var JoiningDate_label = "Joining Date";

        var Name_label = "Name";
        var Relation_label = "Relation";
        var Mobile_label = "Mobile";
        var Phone_label = "Phone";
        var Address_label = "Address"
        var PANNo_label = "PANNo";
        var BirthPlace_label = "Place of Birth"
        var PANName_label = "Name";
        var PANDOB_label = "Date of Birth";
        var PassportNo_label = "PassportNo";
        var PassportFirstName_label = "Given Name";
        var PassportLastName_label = "Surname";
        var PassportIssue_label = "Date of Issue";
        var PassportExpiry_label = " Date of Expiry";
        var FatherName_label = "Father's Name"


        var radio = $('input[name="passportstatus"]:checked').val();
        var radio_label = "Passport Status";
        var rdo;
        if (radio === "exist") {
            rdo = 'Available';
        } else if (radio === "applied") {
            rdo = 'Applied';
        }
        else if (radio === "expired") {
            rdo = 'Expired';
        }
        else if (radio === "notexist") {
            rdo = "Not Available";
        }

        var checkbox = $('input[name="docprovided"]').val();
        var checkbox_label = "Documents Provided";
        var chkArray = [];
        $('input[name="docprovided"]:checked').each(function () {
            chkArray.push($(this).val());
        });
        var chkval = '';
        var chkSelected1 = false;
        var chkSelected2 = false;
        var chkSelected3 = false;
        $.each(chkArray, function (index, value) {
            if (value === "pancheck") {
                chkSelected1 = true;
                chkval += 'PAN Card';
            } else if (value === "addresscheck") {
                if (chkSelected1) {
                    chkval += ', ';
                }
                chkSelected2 = true;
                chkval += 'Address-Proof';
            } else if (value === "degree") {
                if (chkSelected2) {
                    chkval += ', ';
                }
                chkSelected3 = true;
                chkval += 'Degree-Certificates ';

            }
        });



        var text_data1 = '<table class="table table-striped table-bordered" ><tbody ><tr ><td ><strong >' + JoiningDate_label + '</strong> : ' + JoiningDate + '</td>' + '<td ><strong> ' + Location_label + '</strong> : ' + Location + '</td></tr>' + '<tr><td><strong>' + firstname_label + '</strong> : ' + firstname + '</td>' +
        '<td><strong>' + lastname_label + '</strong> : ' + lastname + '</td></tr>' + '<tr><td><strong>' + Email_label + '</strong> : ' + Email + '</td>' + '<td><strong>' + Designation_label + '</strong> : ' + Designation + '</td></tr>' + '<tr><td><strong>' + DOB_label + '</strong> : ' + DOB + '</td>' + '<td><strong>' + BloodGroup_label + '</strong> : ' + BloodGroup + '</td></tr>' + '<tr><td><strong>' + Gender_label + '</strong> : ' + Gender + '</td>' + '<td><strong>' + MaritalStatus_label + '</strong> : ' + MaritalStatus + '</td></tr><tr><td><strong>' + Citizenship_label + '</strong> : ' + Citizenship +'</td></tr></tbody></table>' +
         '<h4>PermanentAddress:</h4>' + '<table class="table table-striped table-bordered"><tbody><tr><td><strong>' + PermanentCountry_label + '</strong> : ' + PermanentCountry + '</td>'+'<td><strong>' + PermanentState_label + '</strong> : ' + PermanentState + '</td>' + '<td><strong>' + PermanentCity_label + '</strong> : ' + PermanentCity + '</td></tr></tbody></table>' + '<table class="table table-striped table-bordered"><tbody><tr><td><strong>' + PermanentAddress_label + '</strong> : ' + PermanentAddress + '</td></tr></tbody></table>'+
        '<table class="table table-striped table-bordered"><tbody><tr><td><strong>' + PermanentPincode_label + '</strong> : ' + PermanentPincode + '</td>' + '<td><strong>' + PermanentPhone_label + '</strong> : ' + PermanentPhone + '</td>' + '<td><strong>' + PermanentMobile_label + '</strong> : ' + PermanentMobile + '</td></tr></tbody></table>' + '<h4>PresentAddress:</h4><table class="table table-striped table-bordered"><tbody><tr><td><strong>' + PresentCountry_label + '</strong> : ' + PresentCountry + '</td>'+'<td><strong>' + PresentState_label + '</strong> : ' + PresentState + '</td>' + '<td><strong>' + PresentCity_label + '</strong> : ' + PresentCity + '</td></tr></tbody></table><table class="table table-striped table-bordered"><tbody><tr><td><strong>' + PresentAddress_label + '</strong> : ' + PresentAddress + '</td></tr></tbody></table>'  +
        '<table class="table table-striped table-bordered"><tbody><tr><td><strong>' + PresentPincode_label + '</strong> : ' + PresentPincode + '</td>' + '<td><strong>' + PresentPhone_label + '</strong> : ' + PresentPhone + '</td>' + '<td><strong>' + PresentMobile_label + '</strong> : ' + PresentMobile + '</td></tr></tbody></table>';



        var text_data2 = '<h4>Person to contact in case of emergency:</h4><br><h5><strong>Emergency Person 1:</strong></h3><table class="table table-striped table-bordered"><tbody><tr><td><strong>' + Name_label + '</strong> : ' + EmergencyName1 + '</td>' + '<td><strong>' + Relation_label + '</strong> : ' + EmergencyRelation1 + '</td></tr>' + '<tr><td><strong>' + Mobile_label + '</strong> : ' + EmergencyMobile1 + '</td>' + '<td><strong>' + Phone_label + '</strong> : ' + EmergencyPhone1 + '</td></tr><tr><td><strong>' + Address_label + '</strong> : ' + EmergencyAddress1 + '</td></tr></tbody></table>';

        var text_data_emergency2 = '<h5><strong>Emergency Person 2:</strong></h5><table class="table table-striped table-bordered"><tbody><tr><td><strong>' + Name_label + '</strong> : ' + EmergencyName2 + '</td>' + '<td><strong>' + Relation_label + '</strong> : ' + EmergencyRelation2 + '</td></tr>' + '<tr><td><strong>' + Mobile_label + '</strong> : ' + EmergencyMobile2 + '</td>' + '<td><strong>' + Phone_label + '</strong> : ' + EmergencyPhone2 + '</td></tr><tr><td><strong>' + Address_label + '</strong> : ' + EmergencyAddress2 + '</td></tr></tbody></table>';

        var blank = '<p class="footer" style="page-break-after:always ;border-bottom:1px solid black"></p>'
        var text_data3 = '<h4 >Medical Insurance:</h4><table class="table table-striped table-bordered"><thead><tr><th>InsuredName</th><th>Date of Birth</th><th>Relationship</th></thead>'
           + ' <tr><td>' + InsuredName[0] + '</td>' + '<td>' + InsuredDOB[0] + '</td>' + '<td "> ' + Relationship[0] + '</td></tr>'
           + ' <tr><td>' + InsuredName[1] + '</td>' + '<td>' + InsuredDOB[1] + '</td>' + '<td "> ' + Relationship[1] + '</td></tr>'
           + ' <tr><td>' + InsuredName[2] + '</td>' + '<td>' + InsuredDOB[2] + '</td>' + '<td "> ' + Relationship[2] + '</td></tr>'
           + ' <tr><td>' + InsuredName[3] + '</td>' + '<td>' + InsuredDOB[3] + '</td>' + '<td "> ' + Relationship[3] + '</td></tr>'
           + ' <tr><td>' + InsuredName[4] + '</td>' + '<td>' + InsuredDOB[4] + '</td>' + '<td "> ' + Relationship[4] + '</td></tr>'
           + ' <tr><td>' + InsuredName[5] + '</td>' + '<td>' + InsuredDOB[5] + '</td>' + '<td "> ' + Relationship[5] + '</td></tr>'
           + ' <tr><td>' + InsuredName[6] + '</td>' + '<td>' + InsuredDOB[6] + '</td>' + '<td "> ' + Relationship[6] + '</td></tr>'
           + ' <tr><td>' + InsuredName[7] + '</td>' + '<td>' + InsuredDOB[7] + '</td>' + '<td "> ' + Relationship[7] + '</td></tr>'

           + '</table>';
        var text_data4 = '<h4>PAN Card:</h4><table class="table table-striped table-bordered"><tbody><tr><td><strong>' + PANNo_label + '</strong> : ' + PANNo + '</td>' + '<td><strong>' + PANName_label + '</strong> : ' + PANName + '</td></tr>' + '<tr><td><strong>' + FatherName_label + '</strong> : ' + PANFatherName + '</td><td><strong>' + PANDOB_label + '</strong> : ' + PANDOB + '</td></tr></tbody></table>';


        var text_data5 = '<p><strong>' + radio_label + '</strong> : ' + rdo + '</p>' + '<table class="table table-striped table-bordered"><tbody><tr><td><strong>' + PassportNo_label + '</strong> : ' + PassportNo + '</td>' + '<td><strong>' + BirthPlace_label + '</strong> : ' + BirthPlace + '</td></tr>' + '<tr><td><strong>' + PassportFirstName_label + '</strong> : ' + PassportFirstName + '</td>' + '<td><strong>' + PassportLastName_label + '</strong> : ' + PassportLastName + '</td></tr><tr><td><strong>' + PassportIssue_label + '</strong> : ' + PassportIssue + '</td><td><strong>' + PassportExpiry_label + '</strong> : ' + PassportExpiry + '</td></tr></tbody></table>';

        var checkbox_data = '<p><strong>' + checkbox_label + '</strong> : ' + chkval + '</p>';
        var checkbox_data1 = '<p><strong>Employee Contract Date </strong> : ' + OfferDate + '</p><hr />';
        var checkbox_data2 = '<p><strong>Date of First Job </strong> : ' + FirstJobDate + '</p><hr />';

        var visa_data = '<h4 ><strong>Visa:</strong></h4><table class="table table-striped table-bordered"><thead><tr><th>Country</th><th>VisaType</th><th>Expired Date</th></thead>'
           + ' <tr><td>' + Country[0] + '</td>' + '<td>' + VisaType[0] + '</td>' + '<td "> ' + VisaExpiry[0] + '</td></tr>'
           + ' <tr><td>' + Country[1] + '</td>' + '<td>' + VisaType[1] + '</td>' + '<td "> ' + VisaExpiry[1] + '</td></tr>'
           + ' <tr><td>' + Country[2] + '</td>' + '<td>' + VisaType[2] + '</td>' + '<td "> ' + VisaExpiry[2] + '</td></tr>'
           + ' <tr><td>' + Country[3] + '</td>' + '<td>' + VisaType[3] + '</td>' + '<td "> ' + VisaExpiry[3] + '</td></tr>'
           + ' <tr><td>' + Country[4] + '</td>' + '<td>' + VisaType[4] + '</td>' + '<td "> ' + VisaExpiry[4] + '</td></tr>'
         + '</table>';




        var text_data6 = '<h4>Device Details:</h4><table class="table table-striped table-bordered"><thead><tr><th>DeviceType</th><th>Make</th><th>ModelNo</th><th>SerialNo</th><th>HDD(GB)</th><th>RAM(GB)</th><th>DeviceIssue</th><th>DeviceReturn</th></thead>'
         + ' <tr><td>' + DeviceType[0] + '</td>' + '<td>' + Make[0] + '</td>' + '<td "> ' + ModelNo[0] + '</td>' + '<td "> ' + SerialNo[0] + '</td>' + '<td "> ' + HDD[0] + '</td>' + '<td "> ' + RAM[0] + '</td>' + '<td "> ' + DeviceIssue[0] + '</td>' + '<td "> ' + DeviceReturn[0] + '</td></tr>'
         + ' <tr><td>' + DeviceType[1] + '</td>' + '<td>' + Make[1] + '</td>' + '<td "> ' + ModelNo[1] + '</td>' + '<td "> ' + SerialNo[1] + '</td>' + '<td "> ' + HDD[1] + '</td>' + '<td "> ' + RAM[1] + '</td>' + '<td "> ' + DeviceIssue[1] + '</td>' + '<td "> ' + DeviceReturn[1] + '</td></tr>'
         + ' <tr><td>' + DeviceType[2] + '</td>' + '<td>' + Make[2] + '</td>' + '<td "> ' + ModelNo[2] + '</td>' + '<td "> ' + SerialNo[2] + '</td>' + '<td "> ' + HDD[2] + '</td>' + '<td "> ' + RAM[2] + '</td>' + '<td "> ' + DeviceIssue[2] + '</td>' + '<td "> ' + DeviceReturn[2] + '</td></tr>'
         + ' <tr><td>' + DeviceType[3] + '</td>' + '<td>' + Make[3] + '</td>' + '<td "> ' + ModelNo[3] + '</td>' + '<td "> ' + SerialNo[3] + '</td>' + '<td "> ' + HDD[3] + '</td>' + '<td "> ' + RAM[3] + '</td>' + '<td "> ' + DeviceIssue[3] + '</td>' + '<td "> ' + DeviceReturn[3] + '</td></tr>'
         + ' <tr><td>' + DeviceType[4] + '</td>' + '<td>' + Make[4] + '</td>' + '<td "> ' + ModelNo[4] + '</td>' + '<td "> ' + SerialNo[4] + '</td>' + '<td "> ' + HDD[4] + '</td>' + '<td "> ' + RAM[4] + '</td>' + '<td "> ' + DeviceIssue[4] + '</td>' + '<td "> ' + DeviceReturn[4] + '</td></tr>'
         + ' <tr><td>' + DeviceType[5] + '</td>' + '<td>' + Make[5] + '</td>' + '<td "> ' + ModelNo[5] + '</td>' + '<td "> ' + SerialNo[5] + '</td>' + '<td "> ' + HDD[5] + '</td>' + '<td "> ' + RAM[5] + '</td>' + '<td "> ' + DeviceIssue[5] + '</td>' + '<td "> ' + DeviceReturn[5] + '</td></tr>'

         + '</table>';
        var text_data7 = '<div style="padding-top: 10px;border-top: 1px solid black;"> <div  style=" font-weight: bold;"> <p>Employee Signature:</p></div><div style="margin-right: 150px; float: right;margin-top: -29px;font-weight: bold;">  <p>Approved By: </div></div>'


        var data = text_data1 + blank + text_data2 + text_data_emergency2 + text_data3 + text_data4 + text_data5 + checkbox_data1 + checkbox_data2 + visa_data + blank + text_data6 + text_data7;// radio_data + checkbox_data + optionval_data + textarea_data;
        $('#preview_data').html('');
        $('#preview_data').append(data);
    }
});