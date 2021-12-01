$(function(){
	$("form[name='registration']").validate({
		rules: {
			Email: {
				required: true,
				email: true
			}
			Username:{
				required: true,
				minlength: 4
			}
			Pass: {
				required: true,
				minlength: 8
			}
			confirm_pass{
				required: true,
				minlength: 8, 
				equalTo: ".Password"
			}
		}
		messages: {
			Email: "Please enter your email correctly",
			Username: {
				required: "Please enter a username",
				minlength: "Your username must consist of at least 4 characters"
			}
			Pass:{
				required: "Please provide a password",
				minlength: "Your password must be at least 8 characters"
			}
			confirm_pass:{
				required: "Please provide a password",
				minlength: "Your password must be at least 8 characters",
				equalTo: "Please enter the same password as above"
			}
		}
	})
	submitHandler: function(form){
		form.submit()
	}	
})