!function(){var a=function(){};a.Encode={TEXT_TYPE:"TEXT_TYPE",EMAIL_TYPE:"EMAIL_TYPE",PHONE_TYPE:"PHONE_TYPE",SMS_TYPE:"SMS_TYPE",CONTACT_TYPE:"CONTACT_TYPE",LOCATION_TYPE:"LOCATION_TYPE"},a.prototype.scan=function(a,b,c){function d(b){b.cancelled=1==b.cancelled,a.call(null,b)}return b||(b=function(){}),"function"!=typeof b?(console.log("BarcodeScanner.scan failure: failure parameter not a function"),void 0):"function"!=typeof a?(b("success callback parameter must be a function"),void 0):(null==c&&(c=[]),Cordova.exec(d,b,"org.apache.cordova.barcodeScanner","scan",c))},a.prototype.encode=function(a,b,c,d,e){return d||(d=function(){}),"function"!=typeof d?(console.log("BarcodeScanner.scan failure: failure parameter not a function"),void 0):"function"!=typeof c?(d("success callback parameter must be a function"),void 0):Cordova.exec(c,d,"org.apache.cordova.barcodeScanner","encode",[{type:a,data:b,options:e}])},window.plugins||(window.plugins={}),window.plugins.barcodeScanner||(window.plugins.barcodeScanner=new a)}();