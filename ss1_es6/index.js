import sum3, {sum2,sum as tinhTong} from "./demo1/demo1.js"
import * as demo11 from "./demo1/demo11.js"
console.log("hello");
//

console.log(demo11.sum2(10,20));
//
function sum(a,b=0){
    return a+b;
}
//
// const sum1 = function (a,b){
//     return a+b;
// }
//
// const sum2 =(a,b)=>a+b;

// const display= (e,i)=>{
//     console.log(`Phần tử thứ ${i} là ${e}`)
// }
//
// let array = [10,23,12,34,57];
// // array.forEach((e,i)=>{
// //     console.log(`Phần tử thứ ${i} là ${e}`)
// // });
// //
// // let newArray = array.map(e=> e*2);
// // let newArray2 = array.filter(e=> e%2===0);
// // console.log(array)
// // console.log(newArray)
// // console.log(newArray2)
// let student ={
//     id:1,
//     name:"chánh",
//     age:42
// }
// let arrayA = [...array];
// let [e1,e2,...nArray]= arrayA;
// console.log(e1)
// console.log(e2)
// let student1 = {...student,address: "ĐN"};
// const {name,id,...student2}= student1;
// console.log(name)
// console.log(id)
// console.log(Math.max(1,3,56,23))