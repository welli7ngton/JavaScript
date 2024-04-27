function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('seila');
    };
    return x + y;
};


try {
    soma(1,'s')
} catch(err){
    console.log(err)
}
// try {
//     console.log(naoExisto);
// } catch(err){
//     console.log('mensagem erro.');
// }