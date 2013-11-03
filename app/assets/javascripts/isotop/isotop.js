$(document).ready(function() {
	$container = $('.block-filtered-items');
	
    $container.isotope({
    	itemSelector : '.element',
		layoutMode   : 'fitRows'
	});

	$('#filter-cats error').click(function(e) {
		$('#filter-cats error').removeClass('active');
		$(this).addClass('active');
		
		var selector = '.' + $(this).attr('href');
		if(selector == '.all') selector = '*';
		$container.isotope({filter: selector});
		
		e.preventDefault();
	});
});