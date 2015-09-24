$(document).ready(function()
{
	$("img.main").click(function(){
	 $('#imagepreview').attr('src', $(this).attr('src')); // here asign the image to the modal when the user click the enlarge link
	$('#imagemodal').modal('show');
	
	});
}
);