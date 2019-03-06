function loadingBar (procent) {
    let neededProcents=procent/10;
    let procents='';
    let dots='';
    for (let i = 0; i < neededProcents; i++) {
        procents+='%'
    }
    for (let j = 0; j < 10-neededProcents; j++) {
        dots+='.'
    }
    if(procent==100){
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    }else{
        console.log(`${procent}% [${procents}${dots}]`);
        console.log('Still loading...');
    }
}
loadingBar(30);