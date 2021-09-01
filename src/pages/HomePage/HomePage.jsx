import { Link } from "react-router-dom";
import React from 'react';
import styles from './home.module.css';
import navbar from '../Component/navbar.module.css';
import TextAnimation from './TextAnimation';
import ImageAnimation from './ImageAnimation';

import LinkedIn from '../../Assets/LinkedIn.png';
import GitHub from '../../Assets/GitHub.png';
import Resume from '../../Assets/Download.png';


function HomePage() {

return (
<div>

<div class={navbar.topnav}>
    <Link class={navbar.active} to="/">Home</Link>
   <Link to="/projects">Projects</Link>
   <Link to="/school">School Projects</Link>
</div>

    <div className={styles.container}>
        <div className={styles.flexed}>
            <div className={styles.container2}>
                <ImageAnimation />
                <h3><TextAnimation /></h3>
                <div className={styles.text}>
                  <h4><b>Computer Science Major | San Jose State University | Assumed Graduation Year: 2022</b></h4>
                    <h4>Hello! I am currently a rising senior at San Jose State University. 
                        I am a Computer Science major with an interest in UX/UI Design and Web Development. 
                        I am also open to summer internships, so feel free to message me through LinkedIn and download my resume below. 
                        You can also check out my projects and connect with me on LinkedIn or GitHub!
                    </h4>
                    <p></p>
                    <h4>I decided to pursue this career path because society will continue to depend on technology as it advances.
                        The more advanced technology becomes, the more difficult it may be to use.
                        Therefore, by being part of the creative process, I want to be able to design applications that are easy to use for all types of users.
                    </h4>
                    <p></p>
                    <h4>Welcome to my page and I hope you enjoy your stay!</h4>
                </div>
              </div>
            <div className={styles.row}>
                <div className={styles.columns}>
                    <a href="https://linkedin.com/in/catherinemtnguyen"><img className ={styles.resize} src={LinkedIn}></img></a> 
                </div>
                <div className={styles.columns}>
                    <a href="https://github.com/cmtnguyen"><img className ={styles.resize} src={GitHub}></img></a> 
                </div>
                <div className={styles.columns}>
                    <Link to="/CatherineNguyenResume.pdf" target="_blank" download><img className ={styles.resize} src={Resume}></img></Link> 
                </div>
            </div>
        
        </div>
    </div>
    </div>

);
}
export default HomePage;