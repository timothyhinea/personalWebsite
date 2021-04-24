/* global $ */
/* global io */



$(document).ready(function() {
   
	
	// Prompt user to login or register
	$('#main-dialog').show();
	

    var specialElementHandlers = {
        "#editor": function (element, renderer) {
            return true;
            }
    };	
    
    var doc = new jsPDF();
    
    $('#cmd').click(function () {
        doc.fromHTML($('#content').html(), 15, 15, {
            'width': 170,
                'elementHandlers': specialElementHandlers
        });
        doc.save('sample-file.pdf');
    });
	

	$('a.dialog-link').click(function() {
		var dialog_id = $(this).attr('data-selector');
		$('#main-dialog').hide();
		$('#dialog-overlay').fadeIn(200);
		$(dialog_id).fadeIn(200);
		return false;
	});

	/* Login Form Begin */
	$("#loginForm").submit(function(event) {
		// event.preventDefault();
		const loginName = $("#loginName").val();
		const loginPassword = $("#loginPassword").val();
		
		// socket.emit('login_request', { name: loginName, pass: loginPassword });

	});

	$("#loginButton").click(function(){
		$("#loginForm").submit();
	});
	/* Login Form End */

	/* Register Form Begin */
	$("#registerForm").submit(function(event) {
		console.log($("#accountName").val());
		console.log($("#password").val());
		console.log($("#repeatPassword").val());
		console.log($("#displayName").val());
	});

	$("#registerButton").click(function(){
		$("#registerForm").submit();
	});
	/* Register Form End */

	$('.close-button, #dialog-overlay').click(function() { 
		$('.dialog-popup').hide();
		$('#dialog-overlay').hide();
		$('#main-dialog').show();
		return false;
	});
});