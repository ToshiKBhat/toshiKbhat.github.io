AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Netflix-Clone",
    cardImage: "assets/images/project-page/netflix.png",
    description: "A Netlfix Frontend Clone built using basic react, youtube and TMDB api.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://nflix-clone.netlify.app",
    Githublink: "https://github.com/ToshiKBhat/Nflix-clone",
  },
  {
    title: "Client-Server Communication using TCP",
    cardImage: "assets/images/project-page/tcp.jpg",
    description: "A Java program to simulate the exchange of packets between a sender and a client.",
    tagimg: "assets/images/project-page/tcp.jpg",
    Previewlink: "https://github.com/ToshiKBhat/Server-Client-TCP",
    Githublink: "https://github.com/ToshiKBhat/Server-Client-TCP",
  },
    {
      title: "Web Scraper",
      cardImage: "assets/images/project-page/scraping.jpg",
      description: "Web Scrapper written in python to scrape details of conference from wikicfp.",
      tagimg: "assets/images/project-page/scraping.jpg",
      Previewlink: "https://github.com/ToshiKBhat/Web-Scraper",
      Githublink: "https://github.com/ToshiKBhat/Web-Scraper",
    },
  {
    title: "Hadoop Map-Reduce",
    cardImage: "assets/images/project-page/hadoop.jpg",
    description: "Multiple well-documented Hadoop programs including map-reduce and mahout programs as part of a big data course.",
    tagimg: "assets/images/project-page/hadoop.jpg",
    Previewlink: "https://github.com/ToshiKBhat/CS267_Topics-in-DB-Systems",
    Githublink: "https://github.com/ToshiKBhat/CS267_Topics-in-DB-Systems",
  },
  {
    title: "NLP - Article Summarizer.",
    cardImage: "assets/images/project-page/nlp.png",
    description: "An NLP project that utilizes ANN to summarize articles and show the weights given to each feature",
    tagimg: "assets/images/project-page/nlp.png",
    Previewlink: "https://github.com/ToshiKBhat/ArticleSummarizer",
    Githublink: "https://github.com/ToshiKBhat/ArticleSummarizer",
  },

  {
    title: "NRMP",
    cardImage: "assets/images/project-page/nrmp.jpg",
    description: "A python program to simulate the National Resident matching program using applicant proposing algorithm with a test module.",
    tagimg:"assets/images/project-page/nrmp.jpg",
    Previewlink: "https://github.com/ToshiKBhat/NRMP-Stable_matching",
    Githublink: "https://github.com/ToshiKBhat/NRMP-Stable_matching",
  },
  {
    title: "Interval Scheduling",
    cardImage: "assets/images/project-page/interval.png",
    description: "Python Program to implement and simulate Interval Scheduling with preprocessing to improve performance.",
    tagimg: "assets/images/project-page/interval.png",
    Previewlink: "https://github.com/ToshiKBhat/weighted-interval-scheduler",
    Githublink: "https://github.com/ToshiKBhat/weighted-interval-scheduler",
  },

];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="${Previewlink}">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
