$(document).ready(function()
{
	$("#submit").on('click',function(event){
		$('#crossword tr td').each(function() {
		var cellValue = $(this).html();    
		console.log(cellValue)
		});
		
	});
}
);