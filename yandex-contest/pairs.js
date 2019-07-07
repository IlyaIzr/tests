//Дан массив целых чисел и целое число k. Нужно определить, есть ли в массиве два числа, сумма которых равна k . 

function pairs (nums, k){
  let temp = [];    //it would be a Dbase, where temp[k-value] = value, so once we find out that temp[value] = k-value we're good
        for(let i = 0; i < nums.length; i++){
          console.log('iteration ' + i + ' temp array: ' + temp);          
            if(temp[nums[i]] == k - nums[i]){ //we need == k - nums[i] in case k = 0 and there're zeros at given array
              console.log(`Hey! it's ${i} iteration, & at index ${nums[i]} there's a value (${k}(it's k) - ${nums[i]}) = ${k - nums[i]}`);
              console.log(`And if we're minus from K(${k}) our curent value ${nums[i]} it'll be same, means there are values which sum = k, so it's`);                            
              console.log(true);              
              return true;
            }
            else{
                console.log(`temp index: ${k} - ${nums[i]} = ${k - nums[i]} ; inserting ${nums[i]}`);                
                temp[k - nums[i]] = nums[i]; 
                console.log(`inserted: "${nums[i]}" at index ${k - nums[i]}`);                
            }
        }
        return false;
}
pairs([1, 3, 5, 7, 15, 215125, 7, 0, 0], 0) //true

//       A L T E R N A T I V E

 function testo2(nums, k){
  let isTrue = false;
 for (let i=0; i<nums.length; i++){
   //console.log(nums[i]);
   if (!isTrue){
   nums.forEach((value, index) =>{
     if ((i !== index) && (nums[i]+value==k)){
       console.log(`DONE with nums[${nums[i]}] value ${value}`);
       isTrue = true;
       console.log("DONE");       
       return true
     }
   })}
   else break
 }
}
//testo2([1, 3, 5, 7, 215125, 7, 0, 0], 15) //false
testo2([1, 3, 5, 7, 215125, 7, 0, 0], 12) //true
//testo2([1, 3, 5, 7, 215125, 7, 0, 0], 0) //true
