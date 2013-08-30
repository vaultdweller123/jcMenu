// Menu
/*
HTML mark up:
	<ul id="myid">
		<li>
			<a href="#">root item 1
				<ul>
					<li><a href="#">root item 1.1</a></li>
					<li><a href="#">root item 1.2</a></li>
				</ul>
			</a>
		</li>
		<li>
			<a href="#">root item 2</a>
		</li>
	</ul>
	
function call:
	jQuery.jcMenu('myid');	
*/

var jcMenu = function (id) {

	// default state, hide child menu items
   jQuery("ul#"+id+" ul").css("display","none");

	// get current page
	var page = window.location.pathname;

	// toogle upon click
	jQuery("a").click(function(){
		if(jQuery(this).attr("href")=="#"||jQuery(this).attr("href")==""||jQuery(this).attr("href")=="javascript:void(0);"){
			jQuery(this).next().slideToggle();
		}
	});

	// remember menu state
	jQuery("#"+id+" a").each(function(){
		if(jQuery(this).attr("href")==page){
			jQuery(this).parentsUntil("body").filter("ul").show();	
			jQuery(this).attr("href","javascript:void(0);");
		}
	}); 
	
};