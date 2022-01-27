window.addEventListener('DOMContentLoaded', function () {
    console.log('i am working');
    var bg = document.getElementById('screen'), counter = 0;
    window.addEventListener('mousemove', onMouseOverBg);
    
    function deleteDiv (index) {
        var child = document.getElementById(index);
        bg.removeChild(child);       
    }

    function hexToRGB (hex) {
        var r = parseInt(hex.substring(1, 3), 16),
            g = parseInt(hex.substring(3, 5), 16),
            b = parseInt(hex.substring(5, 7), 16);
        var result = [r, g, b];
        return result;
    }

    function onMouseOverBg () {
        var colors = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFC6FF']
        counter++;
        newDiv = document.createElement("div");
        var currentId = newDiv.id = "div-" + counter;
        var coefficient = 1 - (counter % 100)/100;
        var number = Math.floor(counter/100)%8;
        var red = (hexToRGB(colors[number])[0])*coefficient + (hexToRGB(colors[(number + 1)%8])[0])*(1 - coefficient), 
            green = (hexToRGB(colors[number])[1])*coefficient + (hexToRGB(colors[(number + 1)%8])[1])*(1 - coefficient), 
            blue = (hexToRGB(colors[number])[2])*coefficient + (hexToRGB(colors[(number + 1)%8])[2])*(1 - coefficient);
        newDiv.style["background-color"] = "rgba(" + red + "," + green + "," + blue + ", 1)";
        newDiv.style["height"] = "290px";
        newDiv.style["width"] = "290px";
        newDiv.style["border-radius"] = "145px";
        newDiv.style["position"] = "fixed";
        newDiv.style["left"] = event.clientX + "px";
        newDiv.style["top"] = event.clientY + "px";
        newDiv.style["opacity"] = "0.7";
        newDiv.style["animation-name"] = "fadeOut";
        newDiv.style["animation-duration"] = "3s";
        newDiv.style["transform"] = "translateX(-50%) translateY(-50%)"; 
        bg.appendChild(newDiv);
        setTimeout(deleteDiv, 2000, currentId);
    }
})