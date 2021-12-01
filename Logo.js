$().ready(function(){
	$('signupForm').validate({
		rules: {
			Email: {
				required: true,
				email: true
			}
			Pass: {
				required: true,
				minlength: 8
			}
		}
	})
})
// function validate(){
// 	if(document.Email.value == ""){
// 		var $val = 
// 		document.Email.focus();
// 		return false
// 	}
// }