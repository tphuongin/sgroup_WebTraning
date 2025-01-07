// function sum(a,b){
//     return a + b;
// }

// console.log(sum(2,3))

// let str = "helo";

// console.log(str.toUpperCase());
// const arr = [1,2,2,3];
// console.log(arr);
// arr.pop();
// console.log(arr);
// console.log(arr.indexOf(9));
// console.log(arr.join())

// const user = {
//     name: "Phuong",
//     age: 19,
// }
// console.log(user.age)
// function User(nameVal, ageVal){
//     this.name = nameVal;
//     this.age = ageVal;
// }

// let user1 = new User("Khoi", 20);
// console.log(user1.name)





//Kiểm tra chữ số trong số nguyên có phải là 1 chuỗi tăng hay ko
let num = 123
var str = num.toString();
let arr = str.split('')
console.log(arr);

function checkIncrease(array){
    for(let i = 0; i < array.length - 1; i++){
        if(array[i] > array[i + 1])
            return false;
    }
    return true;
}

console.log(checkIncrease(arr));



//Thay thế mọi ký tự trong 1 chuỗi bằng ký tự theo sau nó trong bảng chữ cái
let string = "1tp"
let arr2 = string.split("");
let tmpNum;
console.log(arr2);
function replace(array){
    for(let i = 0; i < array.length; i++){
        array[i] = String.fromCharCode(array[i].charCodeAt(0) + 1)
    }
    return array;
}
console.log(replace(arr2));



//Viết chương trình hiển thị số xuất hiện nhiều nhất trong mảng

const arr3 = [1,5,3,5,2,3,5]
const countArr = []
arr3.sort((a,b) => a - b);
const max = {
    val: arr3[0],
    count: 0
}
console.log(arr3);
countArr[0] = 1;
function checkMaxRepeat(array){
    for(let i = 1; i < array.length; i++){
        if(array[i] == array[i - 1]){
            countArr[i] = countArr[i - 1] + 1;
            if(countArr[i] > max.count){
                max.count = countArr[i];
                max.val = array[i];
            }
        }
        else{
            countArr[i] = 1;
        }
    }
    return max.val;
}

console.log(checkMaxRepeat(arr3));





//kiểm tra trong chuỗi chứa 'java' không

let str2 = "helo0000000000javaa"
let subStr
function isHas(string){
    for(let i = 0; i < string.length; i++){
        if(string[i] == 'j'){
            subStr = string.substring(i, i + 4)
            if(subStr == 'java'){
                return true;
            }
        }
    }
    return false;
}
console.log(isHas(str2));



//nhập 1 chuỗi và tìm từ dài nhất trong chuỗi
let str3 = "Thu Phuong ne"
let maxWord
let maxCount = 0
let first = 0
function findMaxWord(string){
    let i = first
    for(let i = 0; i < string.length; i++){
        if(string[i] == ' '){
            if((i - first) > maxCount){
                maxCount = i - first;
                maxWord = string.substring(first, i);
            }
            first = i + 1;
        }
    }
    return maxWord;
}
console.log(findMaxWord(str3));


//tạo chuỗi bằng cách sử dụng 3 kí tự ở giữ 1 chuỗi có độ dài lẻ và lớn hơn hoặc bằng 3\
let str4 = "NguyenThuPhuong"
function create(string){
    if(string.length % 2 != 0 && string.length >= 3){
        index = parseInt(string.length / 2) - 1
        let sub = string.substring(index, index + 3)
        return sub
    }
    return false
}
console.log(create(str4));


// lấy tên tháng từ 1 số cụ thể
let monthNum = 5
let month
function monthNumber(monthNum){
    switch (monthNum) {
        case 1: 
            month = "Tháng một"
            break;
        case 2: 
            month = "Tháng hai"
            break;
        case 3: 
            month = "Tháng ba"
            break;
        case 4: 
            month = "Tháng bốn"
            break;
        case 5: 
            month = "Tháng năm"
            break;
        case 6: 
            month = "Tháng sáu"
            break;
        case 7: 
            month = "Tháng bảy"
            break;
        case 8: 
            month = "Tháng tám"
            break;
        case 9: 
            month = "Tháng chín"
            break;
        case 10: 
            month = "Tháng mười"
            break;
        case 11: 
            month = "Tháng mười một"
            break;
        case 12: 
            month = "Tháng mười hai"
            break;
        default:
            month = "INVALID"
            break;
    }
    return month;
}
console.log(monthNumber(monthNum))




