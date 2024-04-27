function recursiva(i = 1){
    if (i === 11) return
    console.log(i);
    return recursiva(i + 1);
};

recursiva();
