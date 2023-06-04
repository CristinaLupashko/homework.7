
// ---------------------------------1

// Задан объект someObj с произвольными сво-ми. Напишите функцию getKeys(), которая в качестве аргумента получает объект 
// и возвращает результат согласно примеру ниже:

// Примечание: Использовать класс Object нельзя.

// Пример:
// let someObj = {
// key1: 'value1',
// key2: 'value2',
// key3: 'value3',
// key4: 'value4',
// }

// Результат: ['key1','key2','key3','key4']

//   let someObj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3',
//     key4: 'value4',
//   }
//   let result = []

// function getKeys(obj){
// for(let elem in someObj){
//      result.push(elem)
// }    
// console.log(result)
// }
//  getKeys(someObj)
// // --------------------------------------2

// Создайте функцию getAvg(), которая получает в качестве аргумента массив и возвращает среднее значение среди всех элементов. 
// Примечание: гарантируется, что все элементы передают числовое значение
// Пример: [1,2,3,4,5]

// Результат: 3
 
// let array = [1,2,3,4,5];
// let sum = 0;
// function getAvg (arr){
//     for(let elem in array){
//         sum += array[elem];
//     }
//     let num = sum / arr.length;
//     return num
// }
// console.log(getAvg(array))
// ------------------------------------------3

// Создайте функцию countString(), которая получает массив в качестве аргумента.
// Реализуйте функционал, который посчитает и выведет в консоль количество элементов, чей тип равен ‘string’
// Пример: [1,true,'3','value1',9,'key']
// Результат: 3

//   let array = [1,true,'3','value1',9,'key']

// function countString(arr){
//     for(let elem in array){
//         if(typeof array[elem] === "string"){
//             return array[elem]
//         }
//     } 
// }
// console.log(countString(array))
// ---------------------------------------------4
// Задан объект someObj с произвольными сво-ми. Напишите функцию getEntries(),
//  которая в качестве аргумента получает объект и возвращает результат  согласно примеру:
// Пример:
// let someObj = {
// key1: 'value1',
// key2: 'value2',
// key3: 'value3',
// key4: 'value4',
// }
// Примечание: Использовать класс Object нельзя

// Результат: [['key1', 'value1'],['key2', 'value2'],['key3', 'value3'],['key4', 'value4']]

// let someObj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3',
//     key4: 'value4',
//   }
//   let result = []

// function getKeys(obj){
//     for(let elem in  someObj){
//   result.push([elem,someObj[elem]])
//     }
//     console.log(result)
// }
//  getKeys(someObj)
// ------------------------------------------ 5

// Задан массив array, передающий произвольное количество элементов. 
// реализуйте функционал, который преобразует его в объект по следующему правилу:
// Ключ элемента должен содержать его порядковый номер, в качестве значения взять строку ‘keyN’, где N - это порядковый номер.
// Количество сво-тв должно быть равным количеству элементов массива

	
// Пример: [1,true,'3','value1',9,'key']

// Результат: 
// 	{
// key1: 1,
// key2: true,
// key3: ‘3’,
// key4: ‘value1’
// key5: 9,
// key6: ‘key’
// }


//   array = [1,true,'3','value1',9,'key'];

//   function arrayToObject(arr) {
//       var obj = {};
//       for (let i = 0; i < arr.length; i++) {
//         obj['key' + (i + 1)] = arr[i];
//       }
//       return obj;
//     }
//     let  result = arrayToObject(array);
//     console.log(result);
  