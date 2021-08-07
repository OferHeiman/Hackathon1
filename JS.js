function changeImage(imagesrc) //click image to make it the meme image
{
    let image = document.getElementById("memeimage");
    image.src = imagesrc;
    document.getElementsByClassName('content')[1].children[0].textContent = "";
    document.getElementsByClassName('content')[1].children[1].textContent = "";
    textarea.value="";
    textarea2.value="";
    selectedEffect.value='None';
    memeImage.style.filter = "blur(0px)"
    }

function update_image() {
    let img = document.getElementById('memeimage'); // main meme image
    let file = document.querySelector('input[type=file]').files[0]; // Returns the first file element found
    img.src = window.URL.createObjectURL(file);
    document.getElementsByClassName('content')[1].children[0].textContent = "";//reset top text
    document.getElementsByClassName('content')[1].children[1].textContent = "";//reset bottom text
    textarea.value="";
    textarea2.value="";
    selectedEffect.value='None';
    memeImage.style.filter = "blur(0px)"
}

function updateTopText() {
    let topText = document.getElementById("textTop");
    let meme_text = document.getElementById("memeTopText");
    meme_text.textContent = topText.value;
}

function updateBottomText() {
    let bottomText = document.getElementById("textBottom");
    let meme_text = document.getElementById("memeBottomText");
    meme_text.textContent = bottomText.value;
}

//dragable top text
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
dragElement(document.getElementById("memeTopText"));
//dragable bottom text

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
dragElement(document.getElementById("memeBottomText"));

function watermark() { //if selected deletes watermark
    if (document.getElementById('watermark').checked) {
        document.getElementById('watermarktext').textContent = "";
    } else {
        document.getElementById('watermarktext').textContent = "Hackathon1";
    }
}
//text area resize
let textarea = document.getElementById('textTop');
textarea.addEventListener('keydown', autosize);
let textarea2 = document.getElementById('textBottom');
textarea2.addEventListener('keydown', autosize);

function autosize() {
    let el = this;
    setTimeout(function () {
        el.style.cssText = 'height:auto; padding:0';
        // for box-sizing other than "content-box" use:
        // el.style.cssText = '-moz-box-sizing:content-box';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
}
let selectedEffect=document.getElementById('effects');
let memeImage=document.getElementById('memeimage');
function Effects()
{
    selectedEffect.value == 'Blur' ? memeImage.style.filter = "blur(5px)" :  memeImage.style.filter = "blur(0px)";
}
let textBoxCounter=0;
function newTextBox()
{
    textBoxCounter++;
    //create text box
    let div=document.createElement("div");
    div.setAttribute("id","memeNewText")
    div.textContent="";
    document.getElementsByClassName("content")[1].appendChild(div);
    //create textarea
    let textbox=document.createElement("textarea");
    textbox.setAttribute("class","textarea");
    textbox.setAttribute("placeholder","Text #"+textBoxCounter);

}