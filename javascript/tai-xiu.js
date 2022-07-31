function click1(number) {
    document.getElementById('test').innerHTML = number
    let li = document.createElement('div');
    li.textContent = 'insert value lan thu ' + number;
    // add it to the ul element
    document.getElementById('test').appendChild(li);
}


function click2(number) {
    if (number == 1) {
        document.getElementById('myImage').src = 'assets/images/tai-xiu/pic_bulboff.gif'
    }
    if (number == 2) {
        document.getElementById('myImage').src = 'assets/images/tai-xiu/pic_bulbon.gif'
    }


}