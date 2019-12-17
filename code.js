const STORE = [
    {
        title: "Game of Thrones Quiz",
        description: "A simple quiz on the subject of Game of Thrones",
        languages: "HTML, CSS, JavaScript",
        repoLink: "https://github.com/juliawithers/quiz-app",
        liveLink: "https://juliawithers.github.io/quiz-app/"
    },
    {
        title: "Project 2",
        description: "A work in progress",
        languages: "TBD",
        repoLink: "TBD",
        liveLink: "TBD"
    },
    {
        title: "Project 3",
        description: "A work in progress",
        languages: "TBD",
        repoLink: "TBD",
        liveLink: "TBD"
    },
    {
        title: "Project 4",
        description: "A work in progress",
        languages: "TBD",
        repoLink: "TBD",
        liveLink: "TBD"
    },
    {
        title: "Project 5",
        description: "A work in progress",
        languages: "TBD",
        repoLink: "TBD",
        liveLink: "TBD"
    },
    {
        title: "Project 6",
        description: "A work in progress",
        languages: "TBD",
        repoLink: "TBD",
        liveLink: "TBD"
    },

]
// Load each page:
function loadPage(){
    // if contact/about/project/home load those pages
    // load contact page
    $('#contact').on("click",function(){
        $('.mainload').html(
    `<div class = "main" class="contactmain">
        <section class = "contact-page">
            <h1>Contact and Links for Julia Fehr</h1>
            <div class="links">
                <button class="linkedin"><a href="https://linkedin.com/in/julia-fehr-b5447b41" target="_blank">LinkedIn</a></button>
                <button class="email"><a href="mailto:09jwithers@gmail.com">Email</a></button>
                <button class="github"><a href="https://github.com/juliawithers" target="_blank">Github</a></button>
            </div>
            <h3>Email Me:</h3>
            <p>Please feel free to contact me with any questions or concerns!</p>
            <form id="contactform" method="post">
                <fieldset class="contact-field">
                    <legend for="name">Name</legend>
                    <input type="text"  name="name" id="name" class="name" placeholder="Jane Doe"> <br>
                    <legend for="subject">Subject</legend>
                    <input type="text"  name="subject" id="subject" class="subject" placeholder="Subject of message here."><br>
                    <legend for="message">Message</legend>
                    <textarea type="text"  name="message" id="message" class="message" placeholder="Content of message here. Please note that the form submittal is in progress. Please use the email link above to contact me in the meantime. Thanks!" ></textarea><br>
                    <!-- submit an email -->
                    <button class="submit">Submit Message</button>
                </fieldset>
            </form>    
        </section>
    </div>
        <div class="imgcontainer">
            <img src="stain.JPG" alt="Beautiful stain glass of St. Chapelle, Paris" class="img">
            <p class="picturedescription">The stain glass windows inside St. Chapelle, Paris</p>
        </div>`)}
    );
    
    // load projects page
    // {
    //     title: "Game of Thrones Quiz",
    //     description: "A simple quiz on the subject of Game of Thrones",
    //     languages: "HTML, CSS, JavaScript",
    //     repoLink: "https://github.com/juliawithers/quiz-app",
    //     liveLink: "https://juliawithers.github.io/quiz-app/"
    // }
    // make whole square a thumnail picture
    // when click on the thumbnail, an overlay pops up and shows the content of the object - will need to give each article an ID
    $('#projects').on("click",function(){
        $('.mainload').html(

    `<div id="overlay" onclick="off()">
            <div id="text">Some text</div>
    </div>
        <div class = "main" class="projectsmain">
        <section class = "projects">
            <h1>Projects</h1>
            <p>Click on the thumbnails to see more screenshots</p>
            <div class = "art-cont">
            <article class = "articles">
                <p><strong> Game of Thrones Quiz</strong></p>
                <p>A simple quiz on the subject of Game of Thrones, utilizing HTML, CSS, and JavaScript.</p>
                <div class="buttonhome">
                    <button class="button repo" ><a class="alink" href="https://github.com/juliawithers/quiz-app" target="_blank">View Repo</a></button>
                    <button class="button live"><a class="alink" href="https://juliawithers.github.io/quiz-app/ " target="_blank">View Live</a></button>
                </div>
                <button class="thumbButton" onclick="on()">
                <img src="GOT_Thumb_Original.PNG" alt="Game of Thrones Quiz App Thumbnail" class = "thumbnail">
                </button>
            </article>
            <article class = "articles">
                <p>Project 2</p>
            </article>
            <article class = "articles">
                <p>Project 3</p>
            </article>
            <article class = "articles">
                <p>Project 4</p>
            </article>
            <article class = "articles">
                <p>Project 5</p>
            </article>
            <article class = "articles">
                <p>Project 6</p>
            </article>
        </div>
        </section>
        </div>`)
    });

    // load about me page
    $('#about').on("click",function(){
        $('.mainload').html(
    `<div class = "main" class="aboutmain">         
        <section class = "about-me">
        <h1>About Me</h1>
        <p>I was born and raised in Atlanta. I have recently graduated from the Front End Web Development Career Path boot camp at Thinkful. I have a strong technical background having graduated from Georgia Tech with a degree in Mechanical Engineering. I have seen firsthand the importance of user friendly interfaces. Currently I am focusing on UX/UI.</p><br>
        <p>I enjoy reading in my spare time and sketching on occasion. I have a deep love for Sci-Fi and the endless technological possibilities my favorite writers conjure up. I also enjoy a good RPG or video game when time permits. That being said, I’m partial to spending time outdoors and find it necessary to clear my head at times.</p>
    </section>
    <div class="imgcontainer">
        <img src="skyline.JPG" alt="The Atlanta Skyline" class="img">
        <p class="picturedescription">The Atlanta Skyline from the top of the Clermont Lounge</p>
    </div>
    </div> `)
    });

    // load home page
    $('#index').on("click",function(){
        $('.mainload').html(
        `<div class = "main" class="heromain">    
        <section class = "hero">
            <h1>Julia Fehr</h1>
            <p>Mechanical Engineer, Full Stack Web Developer, and Sci-Fi Enthusiast. I am interested in creating seamless interactions between technology and end users.</p>
            <p>I have added some of my favorite pictures to the site. Enjoy!</p>
        </section>
        <div class="imgcontainer">
            <img src="water.JPG" alt="smooth stones in water" class="img">
            <p class="picturedescription">Smooth stones on the Mediterranean Coast</p>
        </div>
        </div> `)
    });

    // load contact page when link at bottom is clicked
    $('.contactfooter').on("click",function(){
        $('.mainload').html(
    `<div class = "main" class="contactmain">
        <section class = "contact-page">
            <h1>Contact and Links for Julia Fehr</h1>
            <div class="links">
                <button class="linkedin"><a href="https://www.linkedin.com/in/julia-fehr-b5447b41" target="_blank">LinkedIn</a></button>
                <button class="email"><a href="mailto:09jwithers@gmail.com" >Email</a></button>
                <button class="github" ><a href="https://github.com/juliawithers" target="_blank">Github</a></button>   
            </div>
            <h3>Email Me:</h3>
            <p>Please feel free to contact me with any questions or concerns!</p>
            <form id="contactform" method="post">
                <fieldset class="contact-field">
                    <legend for="name">Name</legend>
                    <input type="text"  name="name" id="name" class="name" placeholder="Jane Doe"> <br>
                    <legend for="subject">Subject</legend>
                    <input type="text"  name="subject" id="subject" class="subject" placeholder="Subject of message here."><br>
                    <legend for="message">Message</legend>
                    <textarea type="text"  name="message" id="message" class="message" placeholder="Content of message here. Please note that the form submittal is in progress. Please use the email link above to contact me in the meantime. Thanks!" ></textarea><br>
                    <!-- submit an email -->
                    <button class="submit">Submit Message</button>
                </fieldset>
            </form>    
        </section>
    </div>
        <div class="imgcontainer">
            <img src="stain.JPG" alt="Beautiful stain glass of St. Chapelle, Paris" class="img">
            <p class="picturedescription">The stain glass windows inside St. Chapelle, Paris</p>
        </div>`)});


}
    function on(){
        document.getElementById("overlay").style.display = "block";
        `<div id="overlay" onclick="off()">
        <div id="text">Some text</div>
        </div>`
        $('#text').html(
            `<section class="overlay">
            <p><strong> Game of Thrones Quiz</strong></p>
                <p>A simple quiz on the subject of Game of Thrones, utilizing HTML, CSS, and JavaScript.</p>
                <div class="buttonhome">
                    <button class="button repo" ><a class="alink" href="https://github.com/juliawithers/quiz-app" target="_blank">View Repo</a></button>
                    <button class="button live"><a class="alink" href="https://juliawithers.github.io/quiz-app/ " target="_blank">View Live</a></button>
                </div>
                <img src="GOT_Thumb_Question.PNG" alt="Game of Thrones Question 1" class="largethumb">
                <img src="GOT_Thumb_Question_correct.PNG" alt="Correct Answer Screenshot" class="largethumb">
                <img src="GOT_Thumb_Question_incorrect.PNG" alt="In Answer Screenshot" class="largethumb">
                
            </section>`
        )
        $('body').css('overflow','hidden');
    }
    function off(){
        document.getElementById("overlay").style.display ="none";
        $('body').css('overflow','visible');
    }
$(loadPage);