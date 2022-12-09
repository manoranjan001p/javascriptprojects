<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #div{
            height: 100px;
            width: 35%; 
            background-color: blue; 
            border:solid;
            scroll-behavior: auto;
            

        }
        #id{
            width:34.56%;
            background-color:yellow;
            padding-top: 10px;
        }
    </style>
</head>
<body>
    <p>Create New html element</p>
    <div id="div"> 
     <p id="divv"> kk</p><br>

     
     </div>
    
    <input type="text" id="id">
    <input type="submit" value="Punch here" onclick="punch()">

    <script>
        function punch(){
         get=document.getElementById("id").value
       /* cre=document.createElement("p");
        text=document.createTextNode(get);
        cre.appendChild(get);

        put=document.getElementById("div")
        put.appendChild(cre); */
        
        put=document.getElementById("div")
        putt=document.createElement('p')
        pp=document.createTextNode(get)
        vv=putt.appendChild(pp); 
        put.appendChild(vv);
        
        }
    </script>
    
</body>
</html>
