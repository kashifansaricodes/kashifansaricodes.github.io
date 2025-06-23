
// Remove Spline Viewer Logo Watermark
const interval = setInterval(() => {
    const viewer = document.querySelector('spline-viewer');
    if (viewer && viewer.shadowRoot) {
        const logo = viewer.shadowRoot.querySelector('#logo');
        if (logo) {
            logo.remove(); // Remove the logo element entirely
            console.log("Logo removed!");
            clearInterval(interval);
        }
    }
}, 500);




// Filter Responsive Projects Section //
// Projects INFORMATION
const projects = [
    {
        // Project ID
        id: 1,
        // Project Video Box
        vid_id: "projectVideo1",
        vid_src: "veel63Bh5GM",
        // Project Info Box
        title: '<span class="gradient">ARIAC</span> Challenge',
        descrition: "Accomplished high-precision part detection with a 95% accuracy by implementing feature-based descriptor matching and refining HSV-based color segmentation for object recognition using template matching. <br/><br/>Achieved agile task execution, minimized collision occurrences by implementing adaptive motion planning strategies and implemented synchronized 7+ multi-robot coordination in the dynamic ARIAC environment.",
        // Technologies (FILTER)
        technologies: ["ROS", "Python", "Computer Vision", "MoveIt", "Software Architecture", "Agile Robotics", "Manufacturing Robots", "Sensor Fusion"],
        // GitHub URL
        web_url: "https://github.com/HamsaavarthanR/ENPM663-Building-a-Manufacturing-Robot-Software-System"
    },
    {
        // Project ID
        id: 2,
        // Project Video Box
        vid_id: "projectVideo2",
        vid_src: "RsQua2OTQgk",
        // Project Info Box
        title: '<span class="gradient">Autonomous Navigation</span> with ArUco Marker Interaction',
        descrition: "Implemented marker-driven navigation, integrating SLAM-based mapping, ArUco detection, and adaptive waypoint execution. SLAM improved localization accuracy to within 0.5cm, enabling structured path planning and real-time obstacle avoidance.<br/><br/>Attained 97% marker detection accuracy, optimizing motion control and circular trajectory execution with less than 15% positional drift. The final system demonstrated robust waypoint navigation, ensuring smooth and adaptive behavior.",
        // Technologies (FILTER)
        technologies: ["Python", "ROS", "SLAM", "Control Theory", "Computer Vision", "Nav2 Stack"],
        // GitHub URL
        web_url: "https://github.com/HamsaavarthanR/ENPM605-Python-Applications-for-Robotics"
    },
    {
        // Project ID
        id: 3,
        // Project Video Box
        vid_id: "projectVideo3",
        vid_src: "kO2Vq4nlEo0",
        // Project Info Box
        title: 'Modelling Mobile <span class="gradient">7DoF Agriculture Robot</span>',
        descrition: "Assisted in the design and construction of a mobile truck and harvester-arm model with 7 DoF using SolidWorks (CAD), compatible to simulate using ROS2 and Gazebo, capable of automated traversal and fruit harvesting using vacuum gripper.<br/><br/>Executed accurate mathematical modelling to the robotic arm’s kinetics and dynamics, acquiring 100% virtually simulable model by analyzing Denavit-Hartenberg parameters, enhancing dynamic simulation performance.",
        // Technologies (FILTER)
        technologies: ["Python", "CAD", "ROS", "Dynamics", "Robot Modelling", "Control Theory"],
        // GitHub URL
        web_url: "https://github.com/HamsaavarthanR/Modelling_Mobile_7DoF_Agriculture_Robot"
    },
    {
        // Project ID
        id: 4,
        // Project Video Box
        vid_id: "projectVideo4",
        vid_src: "bYWUEUd-eeA",
        // Project Info Box
        title: 'Point Cloud based <span class="gradient">3D Object Detection</span> Using VoxelNet',
        descrition: "Established accurate LiDAR-based 3D Object detection using VoxelNet DNN architecture, achieving over 89.60% AP, by stacking feature-encoding layers, 3D CNN middle layers, and RPN of regional proposal for integration of robotic systems.<br/><br/>Evaluated 1000+ images for 15 epochs resulting in an Intersection over Union (IoU) above 70%, indicating accurate detections.<br/><br/>Developed and integrated Region of Interest (RoI) pooling layer, improving IoU by 15%, with over 15k+ KITTI 3D samples.",
        // Technologies (FILTER)
        technologies: ["Python", "Computer Vision", "TensorFlow", "Deep Learning"],
        // GitHub URL
        web_url: "https://github.com/HamsaavarthanR/Point-Cloud-based-3D-Object-Detection-Using-Voxel-Net-with-ROI-Pooling"
    },
    {
        // Project ID
        id: 5,
        // Project Video Box
        vid_id: "projectVideo5",
        vid_src: "RDFNxuSPZ34",
        // Project Info Box
        title: '<span class="gradient">BERLIN</span> - The Autonomous Robot',
        descrition: "Engineered a fully autonomous robot achieving Level 4 autonomy, leveraging advanced modeling and controls, perception systems, localization, SLAM algorithms, planning, and decision-making processes. Developed real-time control systems on Raspberry Pi via SSH communication to manage encoders, actuators, cameras, servo motors, DC motors, and IMU sensors.<br/><br/>Achieved sensor fusion using Server-Client protocol with near ~100% autonomy. Optimized motion control accuracy (98%) using PID closed-loop feedback systems, applying industrial troubleshooting methods for hardware and software integration challenges.",
        // Technologies (FILTER)
        technologies: ["Python", "Computer Vision", "Sensor Fusion", "Control Theory", "Embedded Programming", "Raspberry Pi"],
        // GitHub URL
        web_url: "https://github.com/HamsaavarthanR/BERLIN---The-Autonomous-Robot"
    },
    {
        // Project ID
        id: 6,
        // Project Video Box
        vid_id: "projectVideo6",
        vid_src: "m0WYqEcPUqM",
        // Project Info Box
        title: 'Parking Assistance Using <span class="gradient">Homography</span>',
        descrition: "Built a computer vision pipeline using Homography to create a 360 deg top view of a real-world vehicle with 4 cameras (1 front, 1 rear & 2 sides) mounted on it.<br/><br/>Performed camera calibration, image processing and distortion correction, projective transform, feature detection and image stitching using OpenCV in Python for 1140+ image data to obtain instantaneous top-view video footage.",
        // Technologies (FILTER)
        technologies: ["Python", "Computer Vision"],
        // GitHub URL
        web_url: "https://github.com/HamsaavarthanR/Parking-Assistance-Using-Homography"
    },
    {
        // Project ID
        id: 7,
        // Project Video Box
        vid_id: "projectVideo7",
        vid_src: "eElyA7g14D0",
         // Project Info Box
        title: '<span class="gradient">Design and Build</span> Truck-Trailer CAD Model for ROS2 Gazebo',
        descrition: "Designed a detailed truck and trailer model using SolidWorks CAD from scratch, attaching joint frames and collision files for URDF compatibility, ensuring stable physics interactions in Gazebo simulations.<br/><br/>Deployed autonomy implementing rear-wheel drive (RWD) motion control with closed-loop feedback for dynamic stability, reducing trajectory error by 18% through real-time error corrections.",
        // Technologies (FILTER)
        technologies: ["Python", "CAD", "ROS", "Dynamics", "Robot Modelling", "Control Theory"],
        // GitHub URL
        web_url: "https://github.com/HamsaavarthanR/Build-your-own-Truck-Trailer-CAD-Modelling-and-ROS2-Gazebo-Simulation"
    },
    {
        // Project ID
        id: 8,
        // Project Video Box
        vid_id: "projectVideo8",
        vid_src: "NILL",
         // Project Info Box
        title: '<span class="gradient">Bi-RRt* Path Planning Algorithm</span> for Apple Picking Robots',
        descrition: "Enabled apple-picking robot to identify optimal paths among diverse target locations, enhancing operational efficiency and diminishing search time by 30% by implementing a sample-based search algorithm using ROS2 Gazebo.<br/><br/>Simulated a variety of metrics to conclude the most optimal cost to be 209.9 after 100+ iterations, resulting in 188% improvement in time efficiency for a distance of 212.8m vs 399.8m permutation analysis.",
        // Technologies (FILTER)
        technologies: ["Python", "Path Planning"],
        // GitHub URL
        web_url: "https://github.com/HamsaavarthanR/Bi-RRT-Path-Planning-Algorithm-for-Large-scale-Apple-Picking-Robot"
       },
]

document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.querySelector('.projects');
    const filterButtons = document.querySelector('.filter-buttons');

    // Get ALL Unique Technologies
    const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))].sort()

    // Add technology filter buttons
    allTechnologies.forEach(tech => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.textContent = tech;
        button.dataset.filter = tech;
        filterButtons.appendChild(button);
    });

    // Filter functionality
    let currentFilter = 'all';
    
    function filterProjects(filter) {
        const filteredProjects = filter === 'all' 
            ? projects 
            : projects.filter(project => project.technologies.includes(filter));
        
        renderProjects(filteredProjects);
        
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
    }

    // Render Projects
    function renderProjects(projectsToRender) {
        projectsGrid.innerHTML = projectsToRender.map(project => `
            <div class="project-card">
                <div class="project-vidbox">
                    <iframe id="${project.vid_id}" 
                        loading="lazy"
                        src="https://www.youtube.com/embed/${project.vid_src}?enablejsapi=1&mute=1&controls=0&loop=1&playlist=${project.vid_src}"
                        frameborder="0" allow="autoplay; encrypted-media"
                        allowfullscreen>
                    </iframe>
                </div>
                <div class="project-info">
                    <h1>${project.title}</span></h1>
                    <p>${project.descrition}</p>
                    <button
                    onclick="window.location.href='${project.web_url}'"
                    ><i class='bx bx-link-external' ></i> Website</button>
                </div>
            </div>
        `).join('');
    }

    // Event listeners
    filterButtons.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            currentFilter = e.target.dataset.filter;
            filterProjects(currentFilter);
        }
    });

    // Initial render
    filterProjects('all');



    // Customize Project Video to play when mouse-over
    const project_vid1 = document.getElementById('projectVideo1')
    const project_vid2 = document.getElementById('projectVideo2')
    const project_vid3 = document.getElementById('projectVideo3')
    const project_vid4 = document.getElementById('projectVideo4')
    const project_vid5 = document.getElementById('projectVideo5')
    const project_vid6 = document.getElementById('projectVideo6')
    const project_vid7 = document.getElementById('projectVideo7')
    const project_vid8 = document.getElementById('projectVideo8')

    const project_vid_list = [project_vid1, project_vid2, project_vid3, project_vid4
        , project_vid5, project_vid6, project_vid7, project_vid8
    ]



    // project_vid_list.forEach(function(video){ 
    //     // video.addEventListener('mouseover', function(){
    //     //     video.play()
    //     // })
    //     // video.addEventListener('mouseout', function(){
    //     //     video.pause()
    //     // })
    // });

})  




// EXPERIENCE Section Image Slideshow
var slideIndex = 1;
var slideInterval; // Store the interval reference
showDivs(slideIndex);
startAutoSlide(); // Begin autoplay on page load

function plusDivs(n) {
    showDivs(slideIndex += n);
    resetAutoSlide(); // Restart the timer when user interacts
}

function currentDiv(n) {
    showDivs(slideIndex = n);
    resetAutoSlide(); // Restart the timer when user interacts
}

function showDivs(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }

    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " w3-white";
}

// Automatic slideshow function
function startAutoSlide() {
    slideInterval = setInterval(() => {
        plusDivs(1); // Move to next slide automatically
    }, 3000); // Change slides every 3 seconds
}

// Reset auto-slide when user interacts
function resetAutoSlide() {
    clearInterval(slideInterval); // Stop current timer
    startAutoSlide(); // Restart the auto-slideshow
}


//-------------------------------------------------------//
// CLICK FUNCTIONALITIES //

// HEADER SECTION //
// Visible when scroll-up
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    
    if (scrollTop > lastScrollTop) {
        header.classList.add("hidden"); // Hide when scrolling down
    } else {
        header.classList.remove("hidden"); // Show when scrolling up
    }

    lastScrollTop = scrollTop;
});

// HERO SECTION //
// Contact Button
document.getElementById("contact-btn").addEventListener("click", function() {
    const contactSection = document.getElementById("contact");
    const targetPosition = contactSection.offsetTop;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 700; // 0.7 seconds
    let startTime = null;

    function smoothScroll(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        window.scrollTo(0, startPosition + (distance * progress));

        if (elapsedTime < duration) {
            requestAnimationFrame(smoothScroll);
        }
    }

    requestAnimationFrame(smoothScroll);
});
// document.getElementById("contact-btn").addEventListener("click", function() {
//     document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
// });

// Scroll-down
document.getElementById("scroll-down").addEventListener("click", function() {
    const contactSection = document.getElementById("about");
    const targetPosition = contactSection.offsetTop;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 500; // 0.5 seconds
    let startTime = null;

    function smoothScroll(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        window.scrollTo(0, startPosition + (distance * progress));

        if (elapsedTime < duration) {
            requestAnimationFrame(smoothScroll);
        }
    }

    requestAnimationFrame(smoothScroll);
});



// EXPERIENCE SECTION
// Certificate
document.getElementById("drdo-cert").addEventListener("click", function() {
    window.location.href = "https://github.com/HamsaavarthanR/Profile/blob/main/DRDO_Certificate.pdf";
});

// Report
document.getElementById("drdo-report").addEventListener("click", function() {
    window.location.href = "https://github.com/HamsaavarthanR/Profile/blob/main/DRDO%20Internship%20Report.pdf";
});


// CONTACT SECTION
// Email
// document.getElementById("sendEmail").addEventListener("click", function() {
//     window.location.href = "mailto:hamsaavarthanr@gmail.com";
// });

// LinkedIn
document.getElementById("viewLinkedIn").addEventListener("click", function() {
    window.location.href = "https://www.linkedin.com/in/hamsaavarthanr/";
});


// GitHub
document.getElementById("viewGitHub").addEventListener("click", function() {
    window.location.href = "https://github.com/HamsaavarthanR";
});


// Download Resume
document.getElementById("viewResume").addEventListener("click", function() {
    window.open("https://github.com/kashifansaricodes/kashifansaricodes/blob/main/Resume_General.pdf", "_blank");
});

// Submit Message Button
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();

    // Show success message
    document.getElementById('successMessage').style.display= 'block';

    // Reset Form
    this.reset();

    // Hide success message after 5 seconds
    setTimeout(function(){
        document.getElementById('successMessage').style.display = 'none';
    }, 5000);
})


// Emailing Functionality
function sendMail(){
    let params = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_knop2s9", "template_sov3zoh", params).then(alert("Message Sent Successfully!"))
}
