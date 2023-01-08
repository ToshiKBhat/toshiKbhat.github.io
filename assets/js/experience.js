AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Senior Software Developer",
    cardImage: "assets/images/experience-page/statestreet.jpg",
    place: "State Street",
    time: "(July, 2018 - July, 2022)",
    desp: "<li>Worked to mitigate security vulnerabilities on multiple apps to meet organizational requirements.</li> <li>Made changes in the current progressive web app of EDD to implement an enhanced vacation system for employees.</li> <li>Employed Quartz job to generate email alerts and display metadata of failed jobs for prompt debugging. </li>",
  },
  {
    title: "Instructional Student Assistant",
    cardImage: "assets/images/experience-page/sjsu.png",
    place: "San Jose State University",
    time: "(Jan - July, 2023)",
    desp: "<li>Worked as a project manager in the capacity of an ISA at SJSU for a software project course.</li><li>Worked on building, testing and monitoring the project development for 8 undergraduate teams.</li><li>Assisted the professor and provided weekly progress reports for all 8 teams.</li>",
  },

];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [

  {
      title: "Graduate Student Advisory Committee, SJSU ",
      cardImage: "assets/images/experience-page/sjsu.png",
      description:
        "Core Member of GSAC, SJSU. Coordinated with representatives from other departments to voice and resolve issues for various departments",
  },
  {
    title: "Camp Diaries",
    cardImage: "assets/images/experience-page/campdiaries.jpg",
    description:
      "Teaching skillful activities to underprivileged children to identify their hidden talent & interests.",
  },
  {
    title: "Unnati",
    cardImage: "assets/images/experience-page/unnati.png",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },

];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
 {
    title: "CFA Institute",
    subtitle: "Foundation certification",
    image: "assets/images/experience-page/cfa.png",
    desp: "The Investment Foundations® Certificate provides learners with an overview of the essentials of finance, ethics, and investment roles, providing a clear understanding of the global investment industry including terminology and foundational concepts",
    href: "https://investmentfoundations.cfainstitute.org/",
  },
  {
    title: "Triplebyte",
    subtitle: "Certified",
    image: "assets/images/experience-page/triplebyte.jpg",
    desp: "Credential Id: T7C8Q8X",
    href: "",
  },


];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
