//Select all classes called drum, get the length
var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerhtml = this.innerHTML;
        makeSound(buttonInnerhtml);
    });
}
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
});
function makeSound(key) {
    switch (key) {
        case "w":
            var var1 = new Audio("sounds/crash.mp3");
            var1.play();
            break;
        case "a":
            var var2 = new Audio("sounds/kick-bass.mp3");
            var2.play();
            break;
        case "s":
            var var3 = new Audio("sounds/snare.mp3");
            var3.play();
            break;
        case "d":
            var var4 = new Audio("sounds/tom-1.mp3");
            var4.play();
            break;
        case "j":
            var var5 = new Audio("sounds/tom-2.mp3");
            var5.play();
            break;
        case "k":
            var var6 = new Audio("sounds/tom-3.mp3");
            var6.play();
            break;
        case "l":
            var var7 = new Audio("sounds/tom-4.mp3");
            var7.play();
            break;
        default: console.log("error");
    }
}

