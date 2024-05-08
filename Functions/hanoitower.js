function solution(n, source, auxiliary, target){

    if (n === 1){
        console.log("Mover disco 1 da torre ",source," para a torre ", target)
        return
    }

    solution(n - 1, source, target, auxiliary)
    console.log("Mover disco 1 da torre ",source," para a torre ", target)

    solution(n - 1, auxiliary, source, target)
}


solution(4, 'A', 'B', 'C')