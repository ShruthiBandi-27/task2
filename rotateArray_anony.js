var result = (function(a,k){
    
    for(let i =0;i<k;i++){
        a.unshift(a.pop());
    }
    return a;
})

console.log(result([1,2,3,4,5],2));
