// add video button
jQuery( "ul.nav.navbar-nav.navbar-right").prepend('' +
	'<li id="video-demo">' +
	'   <a href="" class="dropdown-toggle" data-toggle="dropdown">' +
	'       <i class="fa fa-male"></i>Vidéo de démonstration' +
	'   </a>' +
	'</li>'
);

// add modal which contains the video
jQuery( "div.ui-view-container.full-height-item.is-grow").append('' +
	'<!-- Modal Video-->' +
	'<div class="modal fade" id="myModalVideo" tabindex="1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false">' +
	'   <div class="modal-dialog" id="dialogVideo">' +
	'       <div class="modal-content">' +
	'           <div class="modal-header">' +
	'               <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
	'                   <h4 class="modal-title" id="myModalLabel">' +
	'                       Vidéo de démonstration' +
	'                   </h4>' +
	'          </div>' +
	'           <div class="modal-body">' +
					'<div id="videoDemo"></div>' +
	'           </div>' +
	'           <div class="modal-footer">' +
	'               <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>' +
	'           </div>' +
	'       </div>' +
	'   </div>' +
	'</div>'
);

// modal options
jQuery('#myModalVideo').modal({
	keyboard: true,
	backdrop: false,
	show: false,
});

$('#dialogVideo').css('width', '1313px');

// start video when user click on video button
// insert video inside modal before show it
jQuery( "#video-demo" ).click(function() {
	$( "#videoDemo" ).html('<iframe width="1280" height="720" src="//www.youtube.com/embed/c4_mdowBn1M?rel=0" frameborder="0" allowfullscreen></iframe>');
	$( '#myModalVideo' ).modal('show');
});

// destroy video when hiding the modal to stop it
jQuery('#myModalVideo').on('hidden.bs.modal', function (e) {
	$( "#videoDemo" ).html('');
});