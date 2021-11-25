console.log("Hello World!");

function add(a,b){
    return a+b;
}

//console.log(add(5,6));
//console.log(process.argv.slice(1));

var args=process.argv.slice(2);
console.log(add(parseInt(args[0]),parseInt(args[1])));