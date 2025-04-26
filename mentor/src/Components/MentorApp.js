import React from 'react'
import ment from './download (3).jpg'
// import './mentor.js'
import men from'./avatar_men.png'
import women from './avatar_female.png'

const MentorApp = () => {
  return (
    <div>

       <header class="navbar">
        <div class="container navbar-container">
        <span class="logo-text">MockPrep</span>
        {/* <img src={logo} className='logo' alt=""/> */}

            <nav class="nav">
                <ul class="nav-items">
                    <li class="nav-item active">
                        <a href="#dashboard">Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a href="#features">Features</a>
                    </li>
                    <li class="nav-item">
                        <a href="#steps">Get Started</a>
                    </li>
                    <li class="nav-item">
                        <a href="#mentors">Browse Mentors</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="ct-button">Login</a>
                    </li>
                    <li class="nav-item">
                        <a href="#form" class="ct-button">Book Mentor</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

    <section class="dashboard-section" id='dashboard'>
        <div class="container">
            <div class="dashboard-content">
                <h1>Unlock Your Potential, Faster. <br></br> Expert Mentors Await</h1>
                <p>
                    Stop navigating your career challenges alone. Get matched with experienced professionals who provide actionable advice tailored to your unique goals. Book sessions easily and learn from the best.
                </p>
                <ul>
                    <li><i class="fa-solid fa-wand-magic-sparkles"></i>Access a diverse pool of vetted, high-quality mentors across industries.</li>
                    <li><i class="fa-solid fa-wand-magic-sparkles"></i>    Flexible scheduling fits even the busiest calendars.</li>
                    <li><i class="fa-solid fa-wand-magic-sparkles"></i>    Join a supportive community focused on mutual growth and success.</li>
                </ul>
                <a href="#mentors" class="cta-button">Explore Mentors →</a>
            </div>
            <div class="dashboard-image">
                <img src={ment}/>
            </div>
        </div>
    </section>

    <section id='features' class="features-section">
        <h2>Why Choose MentorCruise?</h2>
        <p className='main-p'>
            We don't think you should have to figure all things out by yourself.  Work with someone who has been in your shoes.
        </p>
        
        <div class="container">
            <div class="features-grid">
                <div class="feature-card">
                    <h3><i class="fas fa-hand-pointer"></i> Hand-picked Online Interview Mentors</h3>
                    <p>Get pros to make you a pro. We mandate the highest standards for competency and communication, and meticulously vet every Interview mentors and coach headed your way.</p>
                </div>
                <div class="feature-card">
                    <h3><i class="fas fa-graduation-cap"></i> Real Interview Industry Experience</h3>
                    <p>Master Interview, no fluff. Only expert advice to help you hone your skills. Work with Interview mentors in the trenches, get a first-hand glance at applications and lessons.</p>
                </div>
                <div class="feature-card">
                    <h3><i class="fas fa-users"></i> Learn under a Team of Mentors</h3>
                    <p>Why learn from 1 mentor when you can learn from 2? Sharpen your Interview skills with the guidance of multiple mentors. Grow knowledge and open-mindedly hit problems from every corner with brilliant minds.</p>
                </div>
                <div class="feature-card">
                    <h3><i class="fas fa-dollar-sign"></i> Flexible payment</h3>
                    <p>Pay for your Interview mentor session as you go. Whether it's regular or one-off, stay worry-free about tuition or upfront fees.</p>
                </div>
                 <div class="feature-card">
                    <h3><i class="fas fa-vial"></i> Free trial</h3>
                    <p>Break the ice. Test the waters and feel out your Interview mentor sessions. Can your coach teach the language of the coding gods passionately? With ease? Only a risk-free trial will tell.</p>
                </div>
                <div class="feature-card">
                    <h3><i class="fas fa-ban"></i> Cancel anytime</h3>
                    <p>Never feel trapped in your Interview mentorship. Grow fearlessly as a professional Interview expert by retaining the ability to end, pause, and continue your mentorship subscription as you please.</p>
                </div>
            </div>
        </div>
    </section>

    <section id='steps' class="steps-section">
        {/* <div className='top'> */}
        <h2>How to get Online Interview Preparation Mentor on MockPrep ?</h2>
        <p className='mainn-p'>Follow these three steps to get started with Interview Mentorship</p>
        {/* </div> */}
        <div class="container">
            <div class="step-steps">
                <div class="step-card">
                    <div class="step-number">1</div>
                    <h3>Find Your Ideal Mentor</h3>
                    <p>Browse from 500+ mentors and get to choose your ideal mentor according to your preferences and aspiration.</p>
                    <a href="#" class="cta-link">Find Your Mentor →</a>
                </div>
                <div class="step-card">
                    <div class="step-number">2</div>
                    <h3>Book a FREE Trial Session</h3>
                    <p>Connect with mentor and see how mentor will help you achieve your goal faster & avoid asking for referrals, etc.</p>
                    <a href="#" class="cta-link">Book a FREE Trial →</a>
                </div>
                <div class="step-card">
                    <div class="step-number">3</div>
                    <h3>Start 1:1 Long Term Mentorship</h3>
                    <p>Bravo!! Get started with your personalised mentorship in the right direction with a mentor of your choice.</p>
                    <a href="#" class="cta-link">Start Preparing →</a>
                </div>
            </div>
        </div>
    </section>


    <section id="mentors" class="mentors-container">
        <h2 class="section-heading">Featured Mentors</h2>
        <div class="carousel-container">
            <div class="carousel-wrapper">
                <div class="mentor-card">
                    <img src={men} alt="Mentor 1"/>
                    <h3>Roman Yusufov</h3>
                    <p>Senior Software Engineer | Certified Career Coach | Interview Expert at Amazon</p>
                    <div class="tags">
                        <span class="tag">Software Engineering</span>
                        <span class="tag">Career Growth</span>
                        <span class="tag">Interview Preparation</span>
                    </div>
                    <p class="price">$400 / month</p>
                    <button class="cta-button int-but">Book Interview Mentoring</button>
                </div>
                <div class="mentor-card">
                    <img src={women} alt="Mentor 2"/>
                    <h3>Jane Smith</h3>
                    <p>Senior Data Scientist at Google | Machine Learning Expert</p>
                    <div class="tags">
                        <span class="tag">Data Science</span>
                        <span class="tag">Machine Learning</span>
                        <span class="tag">Career Coaching</span>
                    </div>
                    <p class="price">$350 / month</p>
                    <button class="cta-button int-but">Book Data Science Mentoring</button>
                </div>
                <div class="mentor-card">
                    <img src={men} alt="Mentor 3"/>
                    <h3>David Lee</h3>
                    <p>Frontend Developer Lead at Netflix | React Expert</p>
                    <div class="tags">
                        <span class="tag">Frontend Development</span>
                        <span class="tag">React</span>
                        <span class="tag">Web Development</span>
                    </div>
                    <p class="price">$300 / month</p>
                    <button class="cta-button int-but">Book Frontend Mentoring</button>
                </div>
                 <div class="mentor-card">
                    <img src={women} alt="Mentor 4"/>
                    <h3>Sarah Williams</h3>
                    <p>Senior Backend Engineer at Facebook | Python Expert</p>
                    <div class="tags">
                        <span class="tag">Backend Development</span>
                        <span class="tag">Python</span>
                        <span class="tag">Web Development</span>
                    </div>
                    <p class="price">$420 / month</p>
                    <button class="cta-button int-but">Book Backend Mentoring</button>
                </div>
                <div class="mentor-card">
                    <img src={men} alt="Mentor 5"/>
                    <h3>Michael Brown</h3>
                    <p>Full Stack Developer | JavaScript Expert</p>
                    <div class="tags">
                        <span class="tag">Full Stack</span>
                        <span class="tag">JavaScript</span>
                        <span class="tag">Web Development</span>
                    </div>
                    <p class="price">$380 / month</p>
                    <button class="cta-button int-but">Book Full Stack Mentoring</button>
                </div>
                <div class="mentor-card">
                    <img src={women} alt="Mentor 6"/>
                    <h3>Emily Wilson</h3>
                    <p>Data Scientist | Python & R Expert</p>
                    <div class="tags">
                        <span class="tag">Data Science</span>
                        <span class="tag">Python</span>
                        <span class="tag">R Programming</span>
                    </div>
                    <p class="price">$410 / month</p>
                    <button class="cta-button int-but">Book Data Science Mentoring</button>
                </div>
                <div class="mentor-card">
                    <img src={men} alt="Mentor 7"/>
                    <h3>Jessica Garcia</h3>
                    <p>UX/UI Designer | Figma & Adobe XD Expert</p>
                    <div class="tags">
                        <span class="tag">UX/UI Design</span>
                        <span class="tag">Figma</span>
                        <span class="tag">Adobe XD</span>
                    </div>
                    <p class="price">$360 / month</p>
                    <button class="cta-button int-but">Book UX/UI Mentoring</button>
                </div>
                <div class="mentor-card">
                    <img src={women} alt="Mentor 8"/>
                    <h3>Kevin Davis</h3>
                    <p>Mobile App Developer | iOS & Android Expert</p>
                    <div class="tags">
                        <span class="tag">Mobile Development</span>
                        <span class="tag">iOS Development</span>
                        <span class="tag">Android Development</span>
                    </div>
                    <p class="price">$430 / month</p>
                    <button class="cta-button int-but">Book Mobile App Mentoring</button>
                </div>
                <div class="mentor-card">
                    <img src={men} alt="Mentor 9"/>
                    <h3>Brian Martinez</h3>
                    <p>Cybersecurity Expert | Network Security</p>
                    <div class="tags">
                        <span class="tag">Cybersecurity</span>
                        <span class="tag">Network Security</span>
                        <span class="tag">Security Analysis</span>
                    </div>
                    <p class="price">$450 / month</p>
                    <button class="cta-button int-but">Book Cybersecurity Mentoring</button>
                </div>
                <div class="mentor-card">
                    <img src={women} alt="Mentor 10"/>
                    <h3>Linda Rodriguez</h3>
                    <p>Game Developer | Unity & Unreal Engine</p>
                    <div class="tags">
                        <span class="tag">Game Development</span>
                        <span class="tag">Unity</span>
                        <span class="tag">Unreal Engine</span>
                    </div>
                    <p class="price">$390 / month</p>
                    <button class="cta-button int-but">Book Game Development Mentoring</button>
                </div>
            </div>
        </div>
        <a href="#form" class="cta-button last-but">Book a Mentor →</a>

       
    </section>

    <div class='bodyy'>
        <section id='form' class="form-container">
            <h2>Find Your Ideal Mentor</h2>
            <p>From 600+ Top Experienced Mentors</p>

            <label>I'm a</label>
            <div class="role-selection">
                <div class="role-button" data-role="fresher" >
                    <i class="fa-solid fa-graduation-cap"></i>
                    Fresher
                </div>
                <div class="role-button selected" data-role="professional">
                    <i class="fa-solid fa-briefcase"></i>
                    Working Professional
                </div>
            </div>

            <label for="investment">How much are you willing to invest to get to your dream job?</label>
            <select id="investment">
                <option value="">Select an option</option>
                <option value="0-5000">₹0 - ₹5,000</option>
                <option value="5001-10000">₹5,001 - ₹10,000</option>
                <option value="10001-20000">₹10,001 - ₹20,000</option>
                <option value="20000+">₹20,000+</option>
            </select>

            <label for="looking-for">Looking for mentorship in</label>
            <input type="text" id="looking-for" placeholder="eg: frontend, backend, etc..."/>

            <div class="suggestion-buttons">
                <button class="suggestion-button">Frontend Developer</button>
                <button class="suggestion-button">Backend Developer</button>
                <button class="suggestion-button">Fullstack Developer</button>
                <button class="suggestion-button">DevOps / SRE / Cloud Engineer</button>
            </div>

            <button class="find-mentor-button">Find Matching Mentors →</button>

            <a href="#" class="choose-yourself-link">Choose by myself from 600+ mentors</a>
        </section>
    </div>



    </div>
  )
}

export default MentorApp
