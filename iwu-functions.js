//Фунцкия возвращает ряд со строками, где нечетные строки - натуральные числа от 1 до n,
// а четные - обратная последовательность, то есть от n до 1, n - натуральное число

function sequences(n) {
    if (n > 0 && n < 1000000) {
      let arr = [];
      let str = '';
      for (i = 1; i <= n; i++) {
          str = str.split('-').reverse().join('-');
        if (i % 2) {
          str = `${str}-${i}`;
          console.log('нечетные строки ' + str);          
          if (str[0] == '-') {
              str = str.replace(str[0], '');
          }
        } else {
          str = `${i}-${str}`;
          console.log('четные строки ' + str);
        }
        arr.push(str);
      }
      return arr;
    }
  }

  console.log(sequences(5)); //["1", "2-1", "1-2-3", "4-3-2-1", "1-2-3-4-5"]
  
  //-------------------*_*_*_*_*_*_*-----------------
  
//Функция считает количество пар натуральных чисел в arr, разница которых равна k
  
  function pairdiffcount(arr, k) {
    let count = 0;
    arr.forEach((value, index) => {
        let firstNum = value;
        let firstIndex = index;
        arr.forEach((value, index) => {
            //console.log('1num - ' + firstNum, 'value - ' + value);
            
            if (k!==0) {
              if((firstNum - value === k || value - firstNum === k)){
                
            console.log('!!! 1num - ' + firstNum, 'value - ' + value);
              count++;}
            }
            else if (k == 0 ){
              if ((firstIndex !== index) && (firstNum == value)){
                //console.log('firstIndex - ' +firstIndex, 'localIndex - '+index);
                //console.log('!!! 1num - ' + firstNum, 'value - ' + value);
                
              count++;
              //console.log(count);
            }
            }
          
        })
    })
    return count/2
}

let _array = [4, 8, 15, 16, 23, 42, 46, 46]
console.log(pairdiffcount(_array, 0)) // 1
