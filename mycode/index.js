function hello(){
    setTimeout(()=>{
        console.log('hello from node container');
        hello();;
    },1000)
}

hello()