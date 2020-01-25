const STORE = [
    {
        title: "Game of Thrones Quiz",
        description: "A simple quiz on the subject of Game of Thrones",
        languages: "HTML, CSS, JavaScript, jQuery",
        repoLink: "https://github.com/juliawithers/quiz-app",
        liveLink: "https://juliawithers.github.io/quiz-app/",
        thumb: 
            {   smallThumb: "GOT_Thumb_Original.PNG",
                altSmallThumb:"Game of Thrones Quiz App Thumbnail"},
        overlayThumbs: [
            {
                bigThumb: "GOT_Thumb_Question.PNG",
                altBigThumb: "Game of Thrones Question 1"},
            {
                bigThumb: "GOT_Thumb_Question_correct.PNG",
                altBigThumb: "Correct Answer Screenshot"},
            {
                bigThumb: "GOT_Thumb_Question_incorrect.PNG",
                altBigThumb: "In Answer Screenshot"}
        ],
        overlayID: "GOT",
    },
    {
        title: "inSUREance",
        description: "Find providers near you that take your insurance.",
        languages: "HTML, CSS, JavaScript, jQuery",
        repoLink: "https://github.com/juliawithers/inSUREance",
        liveLink: "https://juliawithers.github.io/inSUREance/",
        thumb: 
        {   smallThumb: "LandingPage.PNG",
            altSmallThumb: "inSUREance App Thumbnail"},
        overlayThumbs: [
            {
                bigThumb: "LandingPage.PNG",
                altBigThumb: "Landing page for inSUREance"},
            {
                bigThumb: "ResultsLoaded.PNG",
                altBigThumb: "Results loaded"},
            {
                bigThumb: "ShowMore.PNG",
                altBigThumb: "Short configuration for results"},
            {
                bigThumb: "ShowLess.PNG",
                altBigThumb: "Long configuration for results"}
        ],
        overlayID: "ins"
    },
]

// Load each page:
function loadPage(page){
    // if contact/about/project/home load those pages
    // load contact page
    if(page==='contact'){
            $('.mainload').html(
        `
        <div id="menuoverlay">
                <div id="menutext">
                </div>  
            </div>
        <div class = "main" class="contactmain">
            <section class = "contact-page">
                <h1>Contact and Links for Julia Fehr</h1>
                <div class="links">
                    <button class="linkedin"><a href="https://linkedin.com/in/julia-fehr-b5447b41" target="_blank">LinkedIn</a></button>
                    <button class="email"><a href="mailto:09jwithers@gmail.com">Email</a></button>
                    <button class="github"><a href="https://github.com/juliawithers" target="_blank">Github</a></button>
                </div> 
                <div class="imgcontainer">
                <img src="stain.JPG" alt="Beautiful stain glass of St. Chapelle, Paris" class="img">
                <p class="picturedescription">The stain glass windows inside St. Chapelle, Paris</p>
            </div>`)
        //      The form is a work in progress. I would like to implement it shortly. Is it better for me to keep this as a separate branch or is this ok?   
        //         <h3>Email Me:</h3>
        //         <p>Please feel free to contact me with any questions or concerns!</p>
        //         <form id="contactform" method="post">
        //             <fieldset class="contact-field">
        //                 <legend for="name">Name</legend>
        //                 <input type="text"  name="name" id="name" class="name" placeholder="Jane Doe"> <br>
        //                 <legend for="subject">Subject</legend>
        //                 <input type="text"  name="subject" id="subject" class="subject" placeholder="Subject of message here."><br>
        //                 <legend for="message">Message</legend>
        //                 <textarea type="text"  name="message" id="message" class="message" placeholder="Content of message here. Please note that the form submittal is in progress. Please use the email link above to contact me in the meantime. Thanks!" ></textarea><br>
        //                 <!-- submit an email -->
        //                 <button class="submit">Submit Message</button>
        //             </fieldset>
        //         </form>    
        //     </section>
        // </div>
    };
    
    // load projects page
    if(page==='projects'){
            $('.mainload').html(
        `<div id="overlay">
                <div id="text"></div>
        </div>
        <div id="menuoverlay">
                <div id="menutext">
                </div>  
        </div>
        <div class = "main" class="projectsmain">
            <section class = "projects">
                <h1>Projects</h1>
                <p>Click on the thumbnails to see more screenshots</p>
                <div class = "art-cont">

                </div>
            </section>
        </div>`)
        renderProjects(STORE)
    };

    // Use the STORE object to create the articles
    function renderProjects(STORE){
        for(let i=0;i<STORE.length;i++){
            $('.art-cont').append(
            `<article class = "articles">
                <p class="projectTitle"><strong> ${STORE[i].title} </strong></p>
                <p>${STORE[i].description}</p>
                    <div class="buttonhome">
                        <button class="button repo" ><a class="alink" href="${STORE[i].repoLink}" target="_blank">View Repo</a></button>
                        <button class="button live"><a class="alink" href="${STORE[i].liveLink}" target="_blank">View Live</a></button>
                    </div>
                <button class="thumbButton" onclick="on()">
                <img src="${STORE[i].thumb.smallThumb}" alt="${STORE[i].thumb.altSmallThumb}" class = "thumbnail" id="${STORE[i].overlayID}">
                </button>    
            </article>`)
        }
    }

    // load about me page
    if(page==='about'){
            $('.mainload').html(
        `
        <div id="menuoverlay">
                <div id="menutext">
                </div>  
            </div>
        <div class = "main" class="aboutmain">         
            <section class = "about-me">
                <h1>About Me</h1>
                <p>I was born and raised in Atlanta. I currently enrolled in the Front End Web Development Career Path boot camp at Thinkful. I have a strong technical background having graduated from Georgia Tech with a degree in Mechanical Engineering. I have seen firsthand the importance of user friendly interfaces. Currently I am focusing on UX/UI.</p><br>
                <p>I enjoy reading in my spare time and sketching on occasion. I have a deep love for Sci-Fi and the endless technological possibilities my favorite writers conjure up. I also enjoy a good RPG or video game when time permits. That being said, I’m partial to spending time outdoors and find it necessary to clear my head at times.</p>
                <div class="imgcontainer">
                    <img src="skyline.JPG" alt="The Atlanta Skyline" class="img">
                    <p class="picturedescription">The Atlanta Skyline from the top of the Clermont Lounge</p>
                </div>
            </section>
            
        </div> `)
    };

    // load home page
    if(page==='index'){
            $('.mainload').html(
            `
            <div id="menuoverlay">
                <div id="menutext">
                </div>  
            </div>
            <div class = "main" class="heromain">    
                <section class = "hero">
                    <h1>Julia Fehr</h1>
                    <p>Mechanical Engineer, Full Stack Web Developer, and Sci-Fi Enthusiast. I am interested in creating seamless interactions between technology and end users.</p>
                    <p>I have added some of my favorite pictures to the site. Enjoy!</p>
                    <div class="imgcontainer">
                        <img src="water.JPG" alt="smooth stones in water" class="img">
                        <p class="picturedescription">Smooth stones on the Mediterranean Coast</p>
                    </div>
                </section>
                
            </div> `)
    };

    // load contact page when link at bottom is clicked
    if(page==='contact'){
            $('.mainload').html(
        `
        <div id="menuoverlay">
                <div id="menutext">
                </div>  
        </div>
        <div class = "main" class="contactmain">
            <section class = "contact-page">
                <h1>Contact and Links for Julia Fehr</h1>
                <div class="links">
                    <button class="linkedin"><a href="https://linkedin.com/in/julia-fehr-b5447b41" target="_blank">LinkedIn</a></button>
                    <button class="email"><a href="mailto:09jwithers@gmail.com">Email</a></button>
                    <button class="github"><a href="https://github.com/juliawithers" target="_blank">Github</a></button>
                    <div class="imgcontainer">
                        <img src="stain.JPG" alt="Beautiful stain glass of St. Chapelle, Paris" class="img">
                       <p class="picturedescription">The stain glass windows inside St. Chapelle, Paris</p>
                    </div>
                </div> 
            </section> 
        </div>`)
        //      The form is a work in progress. I would like to implement it later on.  
        //         <h3>Email Me:</h3>
        //         <p>Please feel free to contact me with any questions or concerns!</p>
        //         <form id="contactform" method="post">
        //             <fieldset class="contact-field">
        //                 <legend for="name">Name</legend>
        //                 <input type="text"  name="name" id="name" class="name" placeholder="Jane Doe"> <br>
        //                 <legend for="subject">Subject</legend>
        //                 <input type="text"  name="subject" id="subject" class="subject" placeholder="Subject of message here."><br>
        //                 <legend for="message">Message</legend>
        //                 <textarea type="text"  name="message" id="message" class="message" placeholder="Content of message here. Please note that the form submittal is in progress. Please use the email link above to contact me in the meantime. Thanks!" ></textarea><br>
        //                 <!-- submit an email -->
        //                 <button class="submit">Submit Message</button>
        //             </fieldset>
        //         </form>    
        //     </section>
        // </div>
    };
}; //end of function loadPage.

// render the overlay when the thumbnail on the project page is clicked
function on(){
    $('.thumbButton').on('click', function(e){  
        document.getElementById("overlay").style.display = "block";
        const id = $(e.target).attr('id')
        for(let i=0;i<STORE.length;i++){
            if(id === STORE[i].overlayID){
                $('#text').html(
                    `<section class="overlay" onclick="off()">
                        <img id="x" src="x_out.png" onclick="off()">
                        <p class="projectTitle"><strong> ${STORE[i].title} </strong></p>
                        <p>${STORE[i].description}</p>
                        <p>${STORE[i].languages}</p>
                            <div class="buttonhome">
                                <button class="button repo" ><a class="alink" href="${STORE[i].repoLink}" target="_blank">View Repo</a></button>
                                <button class="button live"><a class="alink" href="${STORE[i].liveLink} " target="_blank">View Live</a></button>
                            </div> 
                            <div class="image-container">
                            
                            </div>
                    </section>`)
                $('body').css('overflow','hidden');
                renderOverlayImages(STORE[i])
                }
            } 
        })
};
// render the images onto the overlay
function renderOverlayImages(store){
    for(let i=0;i<store.overlayThumbs.length;i++){
        $('.image-container').append(
            `<img src="${store.overlayThumbs[i].bigThumb}" alt="${store.overlayThumbs[i].altBigThumb}" class="largethumb">`
        )
    }
}
// exit the overlay when X is clicked
function off(){
    document.getElementById("overlay").style.display ="none";
    $('body').css('overflow','visible');   
};
function onMenu(){
    document.getElementById("menuoverlay").style.display = "block";
    $('#menutext').html(
        `<section class="menuoverlay">
            <img id="x" src="x_out.png" onclick="offMenu()">
            <ul class = "ham-nav">
                <li class="ham-nav-item"><a id="index" onclick="offMenu();loadPage('index')">Home</a></li>
                <li class="ham-nav-item"><a id="projects" onclick="offMenu();loadPage('projects')">Projects</a></li>
                <li class="ham-nav-item"><a id="about" onclick="offMenu();loadPage('about')">About</a></li>
                <li class="ham-nav-item"><a id="contact" onclick="loadPage('contact')">Contact</a></li> 
            </ul>
        </section>`)
    $('body').css('overflow','hidden');  
}
// exit the overlay when X is clicked
function offMenu(){
    document.getElementById("menuoverlay").style.display="none";
    $('body').css('overflow','visible');
}
$(loadPage)
// $(on(STORE))