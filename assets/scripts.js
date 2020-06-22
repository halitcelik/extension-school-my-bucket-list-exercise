const likeButtons = document.querySelectorAll('.like-button');
for (let element of likeButtons) {
    element.addEventListener("click", function(e) {
        e.preventDefault();
        if (e.target.querySelector("svg>use").href == "#like") {
            e.target.querySelector("svg>use").setAttribute('href', "liked");
            console.log("if", e.target.querySelector("svg>use"))
        }else{
            e.target.querySelector("svg>use").setAttribute('href', "like");
            console.log("else",e.target.querySelector("svg>use"))
        }
    })
}
