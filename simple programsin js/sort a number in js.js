
let a=[1,2,3,22,5,88,1,3]
var count=0

console.log(a.sort(),"before")

console.log(a.sort((a,b)=> {
    console.log(a,b)
    if (a>b)
    {
        console.log(a,'>',b);
        count+=1
        return 1;
    }
    else if(a<b)
    {
        
        console.log(a,'<',b);
        count+=1
        return -1;
    }
    else
    {
        
        console.log(a,'=',b);
        count+=1
        return 0;
    }
}));

console.log(count,'how many times comparing numbers')
