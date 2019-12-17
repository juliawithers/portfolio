// Load each page:
function loadPage(){
    // if contact/about/project/home load those pages
    // let navItem = document.getElementsByClassName()

    $('#contact').on("click",function(){
        $('.mainload').html(
    `<div class = "main" class="contactmain">
        <section class = "contact-page">
            <h2>Contact and Links for Julia Fehr</h2>
            <div class="links">
                <button class="linkedin"><a href="linkedin.com/in/julia-fehr-b5447b41"><p>- Visit my LinkedIn profile -</p></a></button>
                <button class="email"><a href="mailto:09jwithers@gmail.com"><p>- 09jwithers@gmail.com -</p></a></button>
                <button class="github"><a href="https://github.com/juliawithers"><p>- Visit my Github profile -</p></a></button>   
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
                    <textarea type="text"  name="message" id="message" class="message" placeholder="Content of message here." ></textarea><br>
                    <!-- submit an email -->
                    <button class="submit">Submit Message</button>
                </fieldset>
            </form>    
        </section>
    </div>
        <div class="imgcontainer">
            <img src="stain.JPG" alt="Beautiful stain glass of St. Chapelle, Paris" class="img">
            <p class="picturedescription">A picture of the stain glass windows inside St. Chapelle, Paris</p>
        </div>`)}
    );

    $('#projects').on("click",function(){
        $('.mainload').html(
    `<div class = "main" class="projectsmain">
        <section class = "projects">
            <h2>Projects</h2>
            <div class = "art-cont">
            <article class = "articles">
                <p> <strong> Game of Thrones Quiz -</strong> </p>
                <p>A simple quiz on the subject of Game of Thrones, utilizing HTML, CSS, and Javascript.</p>
                <div class="buttonhome">
                    <button class="button repo" ><a class="alink" href="https://github.com/juliawithers/quiz-app">Link to Repo</a></button>
                    <button class="button live"><a class="alink" href="https://juliawithers.github.io/quiz-app/ ">Link to Live</a></button>
                </div>
                <img src="GOT_Thumb_Original.PNG" alt="Game of Thrones Quiz App Thumbnail" class = "thumbnail">
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

    $('#about').on("click",function(){
        $('.mainload').html(
    `<div class = "main" class="aboutmain">         
        <section class = "about-me">
        <h2>About Me</h2>
        <p>I was born and raised in Atlanta. I have recently graduated from the Front End Web Development Career Path bootcamp at Thinkful. I have a strong technical background having graduated from Georgia Tech with a degree in Mechanical Engineering. I have seen firsthand the importance of user friendly interfaces. Currently I am focusing on UX/UI.</p><br>
        <p>I enjoy reading in my spare time and sketching on occasion. I have a deep love for sci-fi and the endless technological possibilities my favorite writers conjure up. I also enjoy a good RPG or video game when time permits. That being said, I’m partial to spending time outdoors and find it necessary to clear my head at times.</p>
    </section>
    <div class="imgcontainer">
        <img src="skyline.JPG" alt="The Atlanta Skyline" class="img">
        <p class="picturedescription">A picture of the Atlanta Skyline from the top of the Clermont Lounge</p>
    </div>
    </div> `)
    });

    $('#index').on("click",function(){
        $('.mainload').html(
        `<div class = "main" class="heromain">    
        <section class = "hero">
            <h1>Julia Fehr</h1>
            <p>Mechanical Engineer, Full Stack Web Developer, and SciFi Enthusiast. I am interested in creating seamless interactions between technology and end users.</p>
            <p>I have added some of my favorite pictures to the site. Enjoy!</p>
        </section>
        <div class="imgcontainer">
            <img src="water.JPG" alt="smooth stones in water" class="img">
            <p class="picturedescription">A picture of smooth stones on the Medditerranean Coast</p>
        </div>
        </div> `)
    });
    $('.contactfooter').on("click",function(){
        $('.mainload').html(
    `<div class = "main" class="contactmain">
        <section class = "contact-page">
            <h2>Contact and Links for Julia Fehr</h2>
            <div class="links">
                <button class="linkedin"><a href="linkedin.com/in/julia-fehr-b5447b41"><p>- Visit my LinkedIn profile -</p></a></button>
                <button class="email"><a href="mailto:09jwithers@gmail.com"><p>- 09jwithers@gmail.com -</p></a></button>
                <button class="github"><a href="https://github.com/juliawithers"><p>- Visit my Github profile -</p></a></button>   
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
                    <textarea type="text"  name="message" id="message" class="message" placeholder="Content of message here." ></textarea><br>
                    <!-- submit an email -->
                    <button class="submit">Submit Message</button>
                </fieldset>
            </form>    
        </section>
    </div>
        <div class="imgcontainer">
            <img src="stain.JPG" alt="Beautiful stain glass of St. Chapelle, Paris" class="img">
            <p class="picturedescription">A picture of the stain glass windows inside St. Chapelle, Paris</p>
        </div>`)});
}

$(loadPage);