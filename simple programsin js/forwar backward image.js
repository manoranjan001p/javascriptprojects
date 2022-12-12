<!DOCTYPE html>
<html>
<body>

<img src="/try/flo.jpg" id="m1" width="200" height="200">

<button onclick="forward()"><h3>></h3></button>

<button onclick="backward()"><h3><</h3></button>

<script>
   x=["/try/flo.jpg", "/movie website/image-missing.png","images/S3.PNG"];
   count=-1;
   function forward()
   {
    if (count<=x.length){
        count=count+1;

        if (count==3)
        {
            count=0;
        }

    }
    console.log(count)
    document.getElementById('m1').src=x[count];
   }

   function backward()
   {
    console.log(count,'**')
    count=count-1;
    if (count<=x.length)
    {
        if (count==-1 || count==-2)
        {
            a=x.length-1;
            count=a;
        }
        console.log(count)
        document.getElementById('m1').src=x[count];
    }
   // document.getElementById('m1').src=x[count];
   }

   
   
   
</script>

</body>
</html>
