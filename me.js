(function(){
  "use strict";

  // Translate to Traditional Chinese.
  TongWen.trans2Trad(document);

  // Automatically go to the next sentense.
  var a = document.querySelector('body>p>a');
  if(a) a.click();

}());