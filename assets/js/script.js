<!-- <script type="text/javascript">
  
var TRange=null;



function findString (str) {

  var strFound;

  var MSIE = navigator.appName.indexOf("Microsoft")!=-1;

  if (MSIE) {

    if (TRange!=null) 

    {

      TRange.collapse(false);

      strFound=TRange.findText(str);

      if (strFound) TRange.select();

    }

    if (TRange==null || strFound==0) 

    {

      TRange=document.body.createTextRange();

      strFound=TRange.findText(str);

      if (strFound) TRange.select();

    }

  }

  if (!strFound) alert ("\""+str+"\" not found!");

}

   </script>-->