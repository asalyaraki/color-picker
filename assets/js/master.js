const inp = document.getElementById('inp')
    const bgColor = document.getElementById('bgColor')

    inp.addEventListener('input' , colorPicker)
    window.addEventListener('load' , colorPicker)



    function colorPicker(){
        bgColor.style.backgroundColor= inp.value
    }