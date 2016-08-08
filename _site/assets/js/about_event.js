var icons = document.getElementsByClassName("lockup")[0].children;

for (var i=0; i<icons.length;i++){
        //console.log(icons[i]);
        icons[i].addEventListener("click", foo);
    }

function foo() {
    var textId = this.attributes["id"].value;
    var text = document.getElementsByClassName(textId);
    
    if (text[0].style.display != 'block') {
        var active = findActive();
        $(active).fadeOut("slow");
        
        if (active != text[0]) {
            resetAll();
        }
        text[0].setAttribute("tag", "active");
        $(text[0]).fadeIn("slow");
        text[0].style.display = 'block';
    }
}

function resetAll() {
    var pp = document.querySelectorAll("#info");
    for (var i=0; i<pp.length; i++) {
        if (pp[i].getAttribute("tag") == 'active') {
            pp[i].removeAttribute('tag');
        }
        pp[i].style.display = 'none';
    }
}

function findActive() {
    var pp = document.querySelectorAll("#info");
    for (var i=0; i<pp.length; i++) {
        if (pp[i].getAttribute("tag") == 'active') {
            return pp[i];
        }
    }
}