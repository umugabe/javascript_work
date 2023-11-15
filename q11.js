function pattern(rows, columns){

    for(let i = rows; i > 0; i--){
        let row = '';
    for(let j = 0; j < i; j++){
        row = row + '1 ';
    }
        console.log(row);
    }
}
pattern(4, 5);