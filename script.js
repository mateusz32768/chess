let fields = document.querySelectorAll(".field");

const onFieldClick = (event) => {
    console.log("zz" + event.target);
    event.target.style.borderWidth = 20;
    event.target.style.borderStyle = "solid";
    event.target.style.borderColor = "red";
    // fh8.style.borderWidth = 20;
    // fh8.style.borderStyle = "solid";
    // fh8.style.borderColor = "red";
};

fields.forEach((v, e) => {
    //console.log(v);
    v.addEventListener("click", onFieldClick);
    // v.OnClick = () => console.log("u");
});

//console.log(v)
//v.OnClick = onFieldClick
// console.log(
//document.getElementById("fieldH8").style.borderWidth = 20;
//);
