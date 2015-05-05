<!doctype html>
<html lang="en-US">
    <head>
        <meta charset="utf-8">
        <title>Gregoryljackson.com - <?php echo $page_name; ?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="inc/normalize.css">
        <link href='//fonts.googleapis.com/css?family=Leckerli+One' rel='stylesheet' type='text/css'>
        <link href='//fonts.googleapis.com/css?family=Imprima' rel='stylesheet' type='text/css'>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script src="inc/js/imagesloaded.pkgd.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/masonry/3.2.2/masonry.pkgd.min.js"></script>
        <!--[if lt IE 9]>
            <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.2/html5shiv.js"></script>
        <![endif]-->
    </head>
    <style>
#fakeNav{height:38px;width:100%;display:block;z-index:98;position:absolute;background: url(images/sprite-menu.png) repeat-x;}
div.menu{height:34px;width:1000px;display:block;text-align:left;position:absolute;z-index:99;  left: 0;right: 0;margin-left: auto;margin-right: auto;}
#fakeNav .boton-home{color:#707070;background:url(images/sprite-menu.png) 0 -82px no-repeat;width:38px;height:38px;display:block;font-size:0;line-height:0;position:relative;text-indent:-9999px;float:left;margin-top:-2px;margin-right:10px}
#fakeNav .menu a{font-weight:600}
.menu a{color:#707070;text-decoration:none;font-size:12px;line-height:34px}
.menu a.selected,.menu a:hover{color:#000}

.social{float:right;right:40px;margin-top:7px}
.facebook,.behance, .twitter{background:url(images/sprite-menu.png) no-repeat;position:relative;width:20px;height:19px;float:left;margin-left:4px}
.facebook{background-position:-20px -122px}.facebook:hover{background-position:-20px -142px}.behance{background-position:0px -122px}.behance:hover{background-position:0px -142px}
.twitter{background-position:-21px -162px;margin-left: 6px!important;}.twitter:hover{background-position:0px -162px}


a img{border:none;}
*{margin:0;padding:0}
body{font-family:'Open Sans',sans-serif;background:#ececec;margin:0;padding:0}
a{cursor:pointer;text-decoration:none}





div.botones-del-menu{position:absolute;left:62px}
div.botones-de-idiomas{position:absolute;right:80px;color:#707070}
.botones-del-menu a{padding:0 10px}
#nav .botones-del-menu a{padding:0 10px 0 11px}
#resalta{background-color:#666;float:none;height:4px;position:absolute;top:30px;margin-left:65px;padding:0 5px;display:none}

.item { width: 15%; }
    .item img { width: 100%;}


.wrapper {padding: 50px 0;  max-width: 1060px;margin: 0 auto;}
h1 {  font-size: 23px;font-weight: normal;color: #5a5a5a; margin-bottom:7px;font-family: 'Leckerli One', cursive;}
p {  font-family: Imprima, sans-serif;font-size: 14px;}
.cont_info {width: 20%;float: left;}
.contact {  font-size: 14px;color: #5a5a5a;font-weight: bold;font-family: 'Imprima', sans-serif;}
.home > div {margin-bottom: 20%;}
    </style>
    <body>

  <div id='fakeNav'>
    <div class='menu'>
      <div class='botones-del-menu'> 
        <a href='#home' class='boton-home'></a> 
        <a href='#portfolio' class='boton-portfolio'>Portfolio</a> <a href='#estudio' class='boton-estudio'>About Me</a> 
        <a href='#clientes' class='boton-clientes'>Clients</a> <a href='#contacto' class='boton-contacto'>Contact</a> </div>
      <div class='botones-de-idiomas'> <a href='./' class='boton-espaniol'>Español</a> / <a class='boton-ingles'>English</a></div>
      <div class='social'> 
        <a href='http://www.facebook.com/profile.php?id=30311633' target="_blank" class='facebook'></a>
        <a href='https://twitter.com/' target="_blank" class='twitter'></a>
      </div>       
    </div>
  </div>