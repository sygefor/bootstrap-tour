var tourTeasing = new Tour({
	name: "tourTeasing",
	template:   "<div class='popover tour'>" +
			    "   <div class='arrow'></div>" +
				"   <h3 class='popover-title'></h3>" +
				"   <div class='popover-content'></div>" +
				"   <div class='popover-navigation'>" +
				"      <button class='btn btn-sm btn-default' data-role='end'>Fermer</button>" +
				"   </div>" +
				"</div>",
	steps: [
		{
			element: 'li#bootstrap-tour',
			orphan: true,
			title: "Visite guidée",
			placement: 'left',
			content: "Cliquez sur ce bouton pour démarrer la visite guidée.",
		},
	]});

// create bootstrap tour with the different steps
var tour = new Tour({
	name: "tour",
	template:   "<div class='popover tour'>" +
		"   <div class='arrow'></div>" +
		"   <h3 class='popover-title'></h3>" +
		"   <div class='popover-content'></div>" +
		"   <div class='popover-navigation'>" +
		"   	    <button class='btn btn-sm btn-default' data-role='prev'>« Précédent</button>" +
		"           <button class='btn btn-sm btn-default' data-role='next'>Suivant »</button>" +
		"           <button class='btn btn-sm btn-default' data-role='end'>Terminer</button>" +
		"           </div>" +
		"   </div>" +
		"</div>",
	steps: [
	{
		path: "/#/dashboard",
		element: '',
		title: "Bonjour",
		orphan: true,
		placement: 'top',
		content: "La page d'accueil est composée d'un dashbord paramétrable, qui reprend les fonctionnalités les plus utilisées.",
	},
	{
		path: "/#/dashboard",
		element: ".navbar-nav",
		title: "Menu de navigation",
		content: "Le menu permet d'accéder aux différents espaces.<br />" +
		"Vous rentrouverez ici l'intégralité de des formations, des participants et des formateurs.",
		},
	{
		path: "/#/dashboard",
		element: "div.uv-icon.uv-bottom-right ",
		orphan: true,
		title: "Nous faire des retours",
		backdrop: true,
		placement: "left",
		content: "Voici le bouton qui vous permettra de nous faire un retour sur vos impressions, suggestions et besoins.",
	},
	{
		path: "/#/dashboard",
		element: '',
		orphan: true,
		title: "Voyons maintenant comment accéder rapidement à l'information sur SYGEFOR3",
		content: "Nous allons accéder à l'espace consacré aux inscriptions.",
		placement: 'top',
	},
	{
		path: "/#/inscription",
		element: "div.center-group.form-group",
		placement: 'right',
		title: "La barre de recherche",
		orphan: true,
		backdrop: true,
		content: "Cette barre est un champ unique de recherche, présent sur toute l'application.<br />" +
	    "Un clic à l'intérieur permet de découvrir les options de tri.",
	},
	{
		element: "div.center-group.form-group",
		placement: 'right',
		title: "La barre de recherche",
		content: "Accédons par exemple aux inscriptions en attente de validation.<br />" +
		"Cliquez sur \"Statut inscription\" puis sur \"Liste d'attente\".",
		onShow: function (tour) {
			$("div.SB-placeholder").trigger("click");
		},
	},
	{
		element: "div.center-group.form-group",
		placement: 'right',
		orphan: true,
		title: "La barre de recherche",
		content: "Sélectionnons maintenant un type de public, ici les étudiants.<br />" +
		"Vous pouvez aussi bien-sûr effectuer des recherches par mot clef.",
		onShow: function (tour) {
			$("div.SB-placeholder").trigger("click");
		},
	},
	{
		element: "table.table.table-search.table-hover",
		orphan: true,
		placement: "top",
		title: "Résultats",
		content: "Nous obtenons une liste filtrée, sur laquelle nous sommes prêts à travailler.",
	},
	{
		element: "i.fa.fa-eye",
		title: "Changer de vue",
		placement: "left",
		content: "Ce bouton vous permet d'accéder au détail de chaque fiche tout en conservant le tri de liste en cours.<br />" +
		"Vous pouvez ainsi naviguer entre chaque fiche et les sélectionner individuellement dans la colonne de gauche.",
		onNext: function(tour) {
			$("i.fa.fa-eye").trigger("click");
		},
	},
	{
		element: "div.full-height-item.is-full-width.is-grow.is-overflow-y",
		title: "Actions groupées",
		placement: "right",
		content: "Après avoir sélectionné plusieurs plusieurs fiches, vous avez accès aux actions groupées.",
		},
	{
		element: "div.full-height-item.is-full-width.is-grow.is-overflow-y",
		title: "Actions groupées",
		placement: "right",
		content: "Acceptons les inscriptions de quelques stagiaires.",
		},
	{
		element: "div.modal-content",
		title: "Actions groupées",
		placement: "right",
		orphan: true,
		content: "Selon les paramètres définis par votre organisme, vous êtes directement en mesure d'envoyer un email de confirmation à l'ensemble des stagiaires " +
		"sélectionnés, email qui peut comporter des pièces jointes comme un programme de formation ou un plan d'accès.",
		},
	{
		element: "div.btn-group.btn-mass-operation",
		title: "Actions groupées",
		placement: "right",
		onShown:  function(tour) {
			$("div.btn-group.btn-mass-operation").trigger("click");
		},
		content: "Mais vous pouvez aussi sélectionner l'ensemble de vos résultats de recherche pour les exporter sur Word ou sur Excel.",
	},
	{
		element: "button.btn.btn-primary.dropdown-toggle",
		placement: "left",
		title: "Ajouter un nouvel élément",
		content: "Vous pouvez ajouter à tout moment un événement, un stagiaire ou un intervenant grâce à ce bouton depuis leurs pages associées.",
	},
	{
		path: "/#/dashboard",
		element: "path.uv-bubble-background",
		title: "Voilà pour l'essentiel !",
		backdrop: true,
		placement: "left",
		content: "Pour finir, n'hésitez pas à vous servir de ce bouton qui vous permettra de nous faire un retour sur vos impressions, suggestions et besoins !",
		onHide:  function(tour) {
			$("div.uv-icon.uv-bottom-right").trigger("click");
		},
	},
]});


jQuery( document ).ready(function() {

	// add tour button
	jQuery( "ul.nav.navbar-nav.navbar-right").prepend('' +
		'<li id="bootstrap-tour">' +
		'   <a href="" class="dropdown-toggle" data-toggle="dropdown">' +
		'       <i class="fa fa-male"></i>Visite guidée' +
		'   </a>' +
		'</li>'
	);

	// add teasing tour button
	jQuery( "ul.nav.navbar-nav.navbar-right").prepend('' +
		'<li id="teasing-bootstrap-tour"></li>'
	);

	// add welcome message modal before tour begin
	jQuery( "div.ui-view-container.full-height-item.is-grow").append('' +
	'<!-- Modal -->' +
	'<div class="modal fade" id="myModal" tabindex="1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false">' +
	'   <div class="modal-dialog">' +
	'       <div class="modal-content">' +
	'           <div class="modal-header">' +
	'               <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
	'                   <h4 class="modal-title" id="myModalLabel">' +
	'                       Bonjour et bienvenue sur cet espace de démonstration de SYGEFOR3, le logiciel de gestion de formation OpenSource.' +
	'                   </h4>' +
	'          </div>' +
	'           <div class="modal-body">' +
	'               Vous pourrez sur cet espace tester les principales fonctionnalités de ce logiciel.<br />' +
	'               Vous aurez aussi la possibilité de nous faire simplement des retours sur ce que vous avez apprécié ou bien même sur les besoins spécifiques à votre organisme, ' +
	'                   et que vous souhaiteriez voir pris en charge.<br /><br />' +
	'               Mais tout d\'abord, laissez-vous guider pour la visite afin de mieux prendre en main cet outil. Pour cela, cliquez sur "Démarrer la visite".' +
	'           </div>' +
	'           <div class="modal-footer">' +
	'               <button type="button" class="btn btn-default" data-dismiss="modal">Démarrer la visite</button>' +
	'           </div>' +
	'       </div>' +
	'   </div>' +
	'</div>'
	);

	// modal options
	jQuery('#myModal').modal({
		keyboard: true,
		backdrop: false,
		show: false,
	});

	// start tour when modal is closed
	jQuery('#myModal').on('hidden.bs.modal', function (e) {
		tour.restart();
	});

	jQuery( "#teasing-bootstrap-tour" ).click(function() {
		tourTeasing.init();
		tourTeasing.start();
	});

	// start tour when user click on begin tour button
	jQuery( "#bootstrap-tour" ).click(function() {
		tour.init();
		if (tour.ended()) {
			$('#myModal').modal('show');
		}
		else {
			tour.start();
		}
	});

});

// restart the tour at the same step after a angular page is loaded unless the tour has ended
angular.module("conjecto.sygefor.app").run(['$rootScope', '$timeout', function ($rootScope, $timeout) {
	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		$timeout(function () {
			if (!tour.ended()) {
				jQuery( "#bootstrap-tour" ).trigger('click');
			}
			else {
				jQuery( "#teasing-bootstrap-tour" ).trigger('click');
			}
		});
	});
}]);