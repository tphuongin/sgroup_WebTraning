// Hiển thị ngày giờ dd/mm/yyyy hh:mm:ss

//chỉnh sửa in ra 2 số
const date = new Date()

function viewDate(){
    console.log(date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + (date.getMinutes()) + ":" + date.getSeconds())
}
viewDate()


//in ra ngày tháng năm theo định dang mm-dd-yyyy, mm/dd/yyyy, dd-mm-yyyy

function showDate(){
    console.log((date.getMonth() + 1)+ "-" + date.getDate()  + "-" + date.getFullYear())
    console.log(date.toLocaleDateString())
    console.log(date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear())
}
showDate()


// lấy tên tháng từ 1 số cụ thể
let monthNum = 5 
function monthNumber(monthNum){
    switch (monthNum) {
        case 1: 
            return "Tháng một"
        case 2: 
            return "Tháng hai"
        case 3: 
            return "Tháng ba"
        case 4: 
            return "Tháng bốn"
        case 5: 
            return "Tháng năm"
        case 6: 
            return "Tháng sáu"
        case 7: 
            return "Tháng bảy"
        case 8: 
            return "Tháng tám"
        case 9: 
            return "Tháng chín"
        case 10: 
            return "Tháng mười"
        case 11: 
            return "Tháng mười một"
        case 12: 
            return "Tháng mười hai"
        default:
            return "INVALID"
    }
}
console.log(monthNumber(monthNum))
// dùng object để định danh

console.log(document.getElementsByTagName('div'))
document.querySelector




const items = [
    {name: "Pidgey", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"},
    {name: "Pidgeotto", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"},
    {name: "Pidgeot", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"}
]

let current = 0;
function change(){
    if(current == 2) {
        document.getElementById('name').innerText = items[0].name;
        document.getElementById('img').src = items[0].src;
        current = 0;
    }
    else{
        document.getElementById('name').innerText = items[current + 1].name;
        document.getElementById('img').src = items[current + 1].src;
        current++;
    }    
}



