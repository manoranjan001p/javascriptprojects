<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .p,p1{
            text-align:center;
            color:red;
        }
        .p1{
            background-color: yellow;
            width: 100px;
            height:60px;
            text-align: center;
            padding-top: 5%;
            margin-left: 40%;
            
            
        }
        button{
           background-color:blue;
           color:white;
           margin-left: 28%;
        }
    </style>
</head>
<body>

    <p class="p">DATE FUNCTION</p>
    <P class="p1" id="date"> </P>
    <button onclick="start()">start</button>
    <button onclick="stop()">stop</button> <br>

    <script>
        function d(){
         date = new Date();
         //document.write(date);
         time=date.toLocaleTimeString();
         //document.write(time);
         c=document.getElementById("date")
         c.innerHTML= time;
         d=date.getSeconds()
         if(d%2==0)
         {
            c.style.color="red";
         }
         else{
            c.style.color='blue'
         }
        }
        
        function start(){
         clear=setInterval(d,1000);
        }

        function stop(){
            clearInterval(clear);
        }
    </script>
    
</body>
</html>
