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

function viewDateTime(){
    const date = new Date()
    let DateTime = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + (date.getMinutes()) + ":" + date.getSeconds();
    document.getElementById("showDateTime").innerText = DateTime;
}

function hide(){
    document.getElementById("showDateTime").innerText = "";
}

function showDate(){
    const date = new Date()
    let DateTime = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    document.getElementById("showDate").innerText = DateTime;
}

function hideDate(){
    document.getElementById("showDate").innerText = "";
}


//Kiểm tra chữ số trong số nguyên có phải là 1 chuỗi tăng hay ko
function checkIncrease(event){
    event.preventDefault();
    let num = (document.getElementById("num")).value;
    if(num){
        let str = num.toString();
        let array = str.split('')
        for(let i = 0; i < array.length - 1; i++){
            if(array[i] >= array[i + 1])
            {
                document.getElementById("showResult").innerText = "False";
                return;
            }
        }
        document.getElementById("showResult").innerText = "True";
    }
}

function clearInput(event){
    event.preventDefault();
    (document.getElementById("num")).value = "";
    document.getElementById("showResult").innerText = "";
}


//Thay thế mọi ký tự trong 1 chuỗi bằng ký tự theo sau nó trong bảng chữ cái

function replace(event){
    event.preventDefault();
    let string = document.getElementById("text").value;
    let array = string.split("");
    let tmpNum;
    for(let i = 0; i < array.length; i++){
        array[i] = String.fromCharCode(array[i].charCodeAt(0) + 1)
    }
    document.getElementById("showNewString").innerText = (array.join(''));
}

function clearString(event){
    event.preventDefault();
    (document.getElementById("text")).value = "";
    document.getElementById("showNewString").innerText = "";
}



//tạo chuỗi bằng cách sử dụng 3 kí tự ở giữ 1 chuỗi có độ dài lẻ và lớn hơn hoặc bằng 3\
function create(event){
    event.preventDefault();
    let string = document.getElementById("textString").value;
    if(string.length % 2 != 0 && string.length >= 3){
        index = parseInt(string.length / 2) - 1
        let sub = string.substring(index, index + 3)
        document.getElementById("showCenterString").innerText = sub;
    }
    else{
        document.getElementById("showCenterString").innerText = "Cannot create a centered string from this input!";
    }
}

function clearCenterString(event){
    event.preventDefault();
    (document.getElementById("textString")).value = "";
    document.getElementById("showCenterString").innerText = "";
}


//Viết chương trình hiển thị số xuất hiện nhiều nhất trong mảng


function checkMaxRepeat(event){
    event.preventDefault();
    const countArr = [];
    countArr[0] = 1;
    const string = document.getElementById("string").value;
    if(string){
        const array = string.split("");
        array.sort((a,b) => a - b);
        const max = {
            val: array[0],
            count: 0
        }
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
        document.getElementById("showLetter").innerText = "'" + max.val + "'";
    }
    else{
        document.getElementById("showLetter").innerText = "Enter string, please!";
    }
}

function clearstring(event){
    event.preventDefault();
    (document.getElementById("string")).value = "";
    document.getElementById("showLetter").innerText = "";
}


//kiểm tra trong chuỗi chứa 'java' không
function isHas(event){
    event.preventDefault();
    let string = document.getElementById("String").value;
    if(string){
        let subStr;
        for(let i = 0; i < string.length; i++){
            if(string[i] == 'j'){
                subStr = string.substring(i, i + 4)
                if(subStr == 'java'){
                    document.getElementById("show_Result").innerText = "True";
                    return;
                }
            }
        }
        document.getElementById("show_Result").innerText = "False";
    }
    else{
        document.getElementById("show_Result").innerText = "Enter string, please!";
    }
}
function clearString(event){
    event.preventDefault();
    (document.getElementById("String")).value = "";
    document.getElementById("show_Result").innerText = "";
}


// lấy tên tháng từ 1 số cụ thể

function monthNumber(event){
    event.preventDefault();
    let monthNum = document.getElementById("numMonth").value;
    let month;   
    monthNum = parseInt(monthNum);
    switch (monthNum) {
        case 1: 
            month = "Tháng một";
            break;
        case 2: 
            month = "Tháng hai";
            break;
        case 3: 
            month = "Tháng ba";
            break;
        case 4: 
            month = "Tháng bốn";
            break;
        case 5: 
            month = "Tháng năm";
            break;
        case 6: 
            month = "Tháng sáu";
            break;
        case 7: 
            month = "Tháng bảy";
            break;
        case 8: 
            month = "Tháng tám";
            break;
        case 9: 
            month = "Tháng chín";
            break;
        case 10: 
            month = "Tháng mười";
            break;
        case 11: 
            month = "Tháng mười một";
            break;
        case 12: 
            month = "Tháng mười hai";
            break;
        default:
            month = "Invalid input!";
            break;
    }
    document.getElementById("showMonth").innerText = month;
}

function clearShowMonth(){
    (document.getElementById("numMonth")).value = "";
    document.getElementById("showMonth").innerText = "";
}



//nhập 1 chuỗi và tìm từ dài nhất trong chuỗi
function findMaxWord(event){
    event.preventDefault();
    let string = document.getElementById("theString").value;
    if(string){
        string += ' ';
        let maxWord = " ";
        let maxCount = 0
        let first = 0
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
        document.getElementById("showLongestWord").innerText = maxWord;
    }
    else{
        document.getElementById("showLongestWord").innerText = "Enter string, please!";
    }

}

function primeNumber(event){ 
    event.preventDefault();
    let isHas = false;
    const arr = [];
    arr[1] = false;
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    a = parseInt(a);
    b = parseInt(b);
    if(a && b){
        if(a > b){
            let t = a;
            a = b;
            b = t;
        }
        if(a < 0){
            a = 0;
        }
        let tmp =  b / 2;
        for(let i  = 2; i <= tmp; i++)
        {
            for(let j = 2; j <= tmp; j++){
                arr[i * j] = false;
            }
        }
        let string = "";
        for(let i = a + 1; i < b; i++){
            if(arr[i] != false){
                isHas = true;
                string += i + ' ';
            }
        }
        if (isHas == false){
            console.log("k");
            string = "Has no prime between " + a + " and " + b;
        }
        document.getElementById("showPrime").innerText = string;
    }
    else{
        document.getElementById("showPrime").innerText = "Enter input, please!";
    }
}

function clearPrime(){
    (document.getElementById("a")).value = "";
    (document.getElementById("b")).value = "";
    document.getElementById("showPrime").innerText = "";
}
