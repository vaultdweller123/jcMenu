jcMenu
======

[ABOUT]
a javascript menu using jquery
	
[HOW-TO]
include external javascript files:
jcPagination is powered by jquery so we need to load jquery first before we can use it
<script type="text/javascript" src="/javascript/jquery/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="/javascript/jcpagination/jcMenu.js"></script>

html mark up:
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
jcMenu('myid');	
			
[EXAMPLE]
<html>
<head>
<title>jcPagination</title>
<script type="text/javascript" src="/javascript/jquery/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="/javascript/jcpagination/jcMenu.js"></script>
<script>
jQuery(document).ready(function(){
	jcMenu('myid');
});
</script>
</head>
<body>
<h1>jcMenu</h1>
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
<body>
</html>