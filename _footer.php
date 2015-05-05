
<script>
var $container = $('.item_container');

// initialize
$container.imagesLoaded( function(){
  $container.masonry({
    columnWidth: 25,
    itemSelector : '.item'
  });
});
</script>
    </body>
</html>