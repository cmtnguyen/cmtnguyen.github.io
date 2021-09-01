import { Link } from "react-router-dom";
import React from 'react';
import styles from './project.module.css';
import navbar from '../Component/navbar.module.css';

import QuizPreview from '../../Assets/QuizPreview.mp4';
import March from '../../Assets/March.png';


function ProjectPage() {

return (
<div>

<div className={navbar.topnav}>
    <Link to="/">Home</Link>
   <Link className={navbar.active} to="/projects">Projects</Link>
   <Link to="/school">School Projects</Link>
</div>

    <div className={styles.container}>
        <div className={styles.flexed}>
            
            <h1>My Projects</h1>
            <h3>Littles Quiz</h3>
            <video autoPlay muted loop src={QuizPreview} type="video/mp4">
            </video>
            <h4>Designed using HTML/CSS and Javascript. A short quiz that keeps track of scores and progress. It saves the top 5 high scores to local storage.</h4>
            <a className={styles.btn} href="https://cmtnguyen.github.io/LittlesQuiz/">Here's the Quiz!</a>
            <p></p>
            <h3>March</h3>
            <img className={styles.previews} src={March}>
            </img>
            <h4>HTML/CSS game currently being mapped out using Figma. Character design from charat.me. Background images from the internet.</h4>
            <p></p>
            
            
        
        </div>
    </div>
</div>

);
}
export default ProjectPage;