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
    deleteTextAreaAndMemeText();
    }
function deleteTextAreaAndMemeText()
{
    document.querySelector('canvas').remove();
    document.getElementById('watermark').checked=false;
    document.getElementById('watermarktext').textContent="Hackathon1";
    let x=document.getElementById('memeTopText');
    x.style.position="absolute";
    x.style.left = '315px';
    x.style.top = '225px';
    let y=document.getElementById('memeBottomText');
    y.style.position="absolute";
    y.style.left = '315px';
    y.style.top = '665px';
    for(i=1;i<=textBoxCounter;i++)
    {
    let newtext = document.getElementById("memeNewText"+i);
    newtext.textContent="";
    let newtextarea = document.getElementById("Text"+i);
    newtextarea.value="";
    }
    let textAreas = document.getElementsByClassName("textarea");
    while(textAreas.length > 0){
        textAreas[2].parentNode.removeChild(textAreas[2]);
    }
    textBoxCounter=0;
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
    deleteTextAreaAndMemeText();
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

//dragable text
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
dragElement(document.getElementById("memeBottomText"));

function watermark() { //if selected deletes watermark
    if (document.getElementById('watermark').checked) 
    {
        if(confirm("The price for removing the watermark is 5$,would you like to continue?"))
        {
        document.getElementById('watermarktext').textContent = "";
        }
        else
        {
            document.getElementById('watermark').checked=false;
        }
    } else 
    {
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
    div.setAttribute("id","memeNewText"+textBoxCounter)
    div.setAttribute("class","memeNewText")
    div.textContent="Text #"+textBoxCounter;
    document.getElementsByClassName("content")[1].appendChild(div);
    //create textarea
    let textbox=document.createElement("textarea");
    textbox.setAttribute("class","textarea");
    textbox.setAttribute("placeholder","Text #"+textBoxCounter);
    textbox.setAttribute("id","Text"+textBoxCounter);
    textbox.setAttribute("type","text");
    textbox.setAttribute("oninput","updateNewText()");
    let box=document.getElementsByClassName("box")[0];
    box.insertBefore(textbox,box.lastElementChild);
    dragElement(document.getElementById("memeNewText"+textBoxCounter));
    let newtextarea = document.getElementById('Text'+textBoxCounter);
    newtextarea.addEventListener('keydown', autosize);

}

function updateNewText() 
{
    let newText = document.getElementById("memeNewText"+textBoxCounter);
    let meme_text = document.getElementById("Text"+textBoxCounter);
   newText.innerText = meme_text.value;
}
function modeDarkLight()
{
    let x=document.getElementById('button');
    if(document.body.style.backgroundColor!="white") {//light mode
    document.body.style.backgroundColor="white";
    document.body.style.backgroundImage='linear-gradient(to bottom, rgba(255, 255, 255, 1), transparent)';
    x.style.backgroundColor='white';
    x.style.color='black';
    x.style.borderColor='black';
    document.getElementById('flexbox').style.borderColor='black';
    document.querySelector('label').style.color='black';
    document.getElementById('extraoptions').childNodes[3].style.color='black';
    document.querySelector('h1').style.color="black";
    document.querySelector('p').style.color="black";
    document.getElementsByClassName('links')[0].style.backgroundColor="white";
    document.getElementsByClassName('links')[0].style.backgroundImage= 'linear-gradient(to bottom, rgba(255, 255, 255, 0.8), transparent)';
    document.querySelectorAll('a')[0].style.color="black"
    document.querySelectorAll('a')[1].style.color="black"
    document.getElementsByClassName('content')[0].firstElementChild.style.color="black";
    document.getElementById('user_picture').style.color='black';
    
    }
    else { //dark mode
        document.body.style.background='#345';
        document.body.style.backgroundImage='linear-gradient(to bottom, #0009, transparent)';
        x.style.backgroundColor=' #345';
        x.style.color='white';
        x.style.borderColor='rgba(255, 255, 255, 0.5)';
        document.getElementById('flexbox').style.border='1px solid rgba(255, 255, 255, 0.1)';
        document.querySelector('label').style.color='white'
        document.getElementById('extraoptions').childNodes[3].style.color='white';
        document.querySelector('h1').style.color="white";
        document.querySelector('p').style.color="white";
        document.getElementsByClassName('links')[0].style.backgroundColor="#123";
        document.getElementsByClassName('links')[0].style.backgroundImage= 'linear-gradient(to bottom, #0003, transparent)';
        document.querySelectorAll('a')[0].style.color="white"
        document.querySelectorAll('a')[1].style.color="white"
        document.getElementsByClassName('content')[0].firstElementChild.style.color="white";
        document.getElementById('user_picture').style.color='white';
    }
}

function takeshot()
{
    let div=document.getElementById('photo');
    
    html2canvas(div).then(
        function (canvas) {
            document
            .getElementById('output')
            .appendChild(canvas);
        })
}