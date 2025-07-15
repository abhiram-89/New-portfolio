//  <--- journey table-->
 const journey = [
                {Year: "2018-2019",
                Name: "Brilliant Grammar High School",
                role: "Schooling",
                Highlight: "10/10 in 10th grade"},

                {Year: "2019-2021 ",
                Name: "Aditya Junior College",
                role: "MPC" ,
                Highlight: "82.8 % in intermediate"},
                
                {Year: "2021-2025",
                Name: "Aditya University",
                role: "B.Tech CSE",
                Highlight: "Graduated with 7.8 cgpa"},

                {Year: "2025-Present",
                Name: "Hallmark Global Solutions",
                role: "Web  Developer",
                Highlight: "Intern / Training"}
        ];

        const table = document.getElementById("Journey");  
        const tbody = table.querySelector("tbody");
        tbody.innerHTML = journey.map((journey) => `
                    <tr>
                        <td>${journey.Year}</td>
                        <td>${journey.Name}</td>    
                        <td>${journey.role}</td>
                        <td>${journey.Highlight}</td> 
                    </tr>
                `).join("");




//  <--- projects table-->
const project = [
                {name: "Blood-Banker",
                skills: "HTML, CSS, JavaScript,Php, MySQL",
                Highlights: "A web application to connect blood donors and recipients.",
                GitHub: "https://github.com/abhiram-89/Blood-donor-Finder.git"},

                {name: "Trip Planner",
                skills: "HTML, CSS, JavaScript ,Google Maps API,openAI API",
                Highlights: "A web application to plan trips with personalized itineraries.",
                GitHub: "https://github.com/abhiram-89/AI-Trip-Planner.git"},

                {name: "Music Player",
                skills: "python, Tkinter, Pygame",
                Highlights: "A desktop application to play music files with a user-friendly interface.",
                GitHub: "https://github.com/abhiram-89/music.py.git"},

                {name: "Weather Insight",
                skills: "HTML, CSS, JavaScript",
                Highlights: "A web application to provide real-time weather updates and forecasts.",
                GitHub: "https://github.com/abhiram-89/Weather-Insight.git"},

                {name: "Hand Guesture Recognition",
                skills: "Python, OpenCV, TensorFlow",
                Highlights: "A machine learning project to recognize hand gestures using a webcam.",
                GitHub: "https://github.com/abhiram-89/Hand-Gesture-Application.git"},

                {name: "Water Portability",
                skills: "python, Tkinter, OpenCV, NumPy",
                Highlights: "A desktop application to detect water quality using image processing techniques.",
                GitHub: "https://github.com/abhiram-89/water-potability.git"},

                {name: "Digit Predictor",
                skills: "python, Tkinter, OpenCV, NumPy",
                Highlights: "A machine learning project to predict handwritten digits using a webcam.",
                GitHub: "https://github.com/abhiram-89/Digit-predictor.git"},

                {name: "Personal Portfolio ",
                skills: "HTML, CSS, JavaScript",
                Highlights: "A personal portfolio website to showcase my projects and skills.",
                GitHub: "https://github.com/abhiram-89/my-portfolio.git"},


];

const projectTableBody = document.getElementById("projectbody");


  projectTableBody.innerHTML = project.map((proj, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${proj.name}</td>
      <td>${proj.skills}</td>
      <td>${proj.Highlights}</td>
      <td><a href="${proj.GitHub}" class="btn btn-dark" target="_blank"><i class="bi bi-github"></i></a></td>
      <td><button class="btn  delete-btn"><i class="material-icons" style="color:red">delete</i></button></td>
    </tr>
  `).join("");

  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      const row = this.closest("tr");
      row.remove();
    });
  });


                