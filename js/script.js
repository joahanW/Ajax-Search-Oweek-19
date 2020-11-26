

$(function() {
    // setTimeout() function will be fired after page is loaded
    // it will wait for 5 sec. and then will fire
    // $("#successMessage").hide() function
    setTimeout(function() {
			$("#status").fadeOut();
					// will fade out the whole DIV that covers the website.
			$("#preloader").fadeOut("slow");
    }, 2000);
});

$(document).ready(function() {
	var cari = $('#cari');
	cari.on('keyup', function() {
		$.ajax({
			url: 'cari.php',
			type: 'POST',
			data: { cari: cari.val() },
			success: function(hasil) {
				$('.containernama').html(hasil);
			}
		});
	});
});


$(document).ready(function() {
	var nim = $('#nim');
	nim.on('keyup', function() {
		$.ajax({
			url: 'cari.php',
			type: 'POST',
			data: { nim: nim.val() },
			success: function(hasil) {
				$('.containernama1').html(hasil);
			}
		});
	});
});

var $about = $('#about-accordion');
$about.on('show.bs.collapse','.collapse', function() {
    $about.find('.collapse.in').collapse('hide');
});
