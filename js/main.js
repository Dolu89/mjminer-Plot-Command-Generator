
$(document).ready(function(){
  $('#nonce-calc').on('submit', function(e){
    e.preventDefault();

    var numId = $("#num-id").val();
    var plotPath = $("#plot-path").val();
    var start = $('#start-nonce').val();
    var hdd = $("#hdd-space").val();
    var ram = $("#ram").val();
    var thread = $("#thread").val();
    ram = (ram*1048576)/256;
    hdd = (Math.floor(((hdd*1048576)/256)/ram))*ram;
    var mjminer = "./plot -k "+numId+" -d "+ plotPath +" -s "+ start +" -n "+ hdd +" -m "+ ram +" -t "+thread;
    $('#jminer-win').val(mjminer);
  });
  //Clipboard script
  var clipboard = new Clipboard('.btn');

  clipboard.on('success', function(e) {
      console.log(e);
  });

  clipboard.on('error', function(e) {
      console.log(e);
  });
})
