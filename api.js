let Container = document.querySelector(".img_list");

let Camera = "";
let Page = 1;                  
let Sol = 1700;


function get_imgs(container, camera, page, sol) 
{
    // Sol+=1;
    // Page+=1;
    // Create an XMLHttp Request Object
    let xhr = new XMLHttpRequest();

    // Create the Request
    xhr.open('GET',`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&page=${page}&camera=${camera}&api_key=PW574gv7S2tnWrMs5iDziQALx8NzS17zSiHocoaC`, true);

    // Send the request
    xhr.send();

    //when data loads returns data in text
    xhr.addEventListener('load', function () {

        //converting text into json object
        let data = JSON.parse(xhr.responseText);
                                                    
        // iterate over all images
        for(var i=0; i<data["photos"].length; i++){

            // get img_src url from the data
            let img_src = data["photos"][i]["img_src"];

            // create an img tag
            img_tag = document.createElement("img");

            // set src attribute to img_src
            img_tag.src = img_src;

            // set height and width of img
            img_tag.setAttribute("height", "200px");
            img_tag.setAttribute("width", "200px");
            img_tag.setAttribute("class", "imgs");

            // append the child to the container
            container.appendChild(img_tag);
        }
    });
};

// get fhaz
let fhaz = document.getElementById("fhaz");

// get navcam
let navcam = document.getElementById("navcam");

// add listner on fhaz
fhaz.addEventListener("click", ()=>{

    // set camera
    Camera = "fhaz";  

    // run get imgs with fhaz url
    get_imgs(Container, Camera, Page, Sol);
});

// add listner on navcam
navcam.addEventListener("click", () => {

    // set camera
    Camera = "navcam";

    // get images
    get_imgs(Container, Camera, Page, Sol);
});