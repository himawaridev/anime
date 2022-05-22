function click1() {
    document.getElementById('test-1').style.display = 'block'
    document.getElementById('test-2').style.display = 'none'
    document.getElementById('test-3').style.display = 'none'
}
function click2() {
    document.getElementById('test-1').style.display = 'none'
    document.getElementById('test-2').style.display = 'block'
    document.getElementById('test-3').style.display = 'none'
}
function click3() {
    document.getElementById('test-1').style.display = 'none'
    document.getElementById('test-2').style.display = 'none'
    document.getElementById('test-3').style.display = 'block'
}

click1()