import { Link } from "react-router-dom";
import React from 'react';
import styles from '../ProjectPage/project.module.css';
import navbar from '../Component/navbar.module.css';

import Climate from '../../Assets/Climate.jpg';
import Maze from '../../Assets/Maze.jpg';
import Banking from '../../Assets/Banking.png';
import ChatRoomPreview from '../../Assets/ChatRoomPreview.mp4';
import ChatRoomFigma from '../../Assets/ChatRoomFigma.png';


function SchoolPage() {

return (
<div>

<div className={navbar.topnav}>
    <Link to="/">Home</Link>
   <Link  to="/projects">Projects</Link>
   <Link className={navbar.active} to="/school">School Projects</Link>
</div>

    <div className={styles.container}>
        <div className={styles.flexed}>
            
            <h1>My Projects</h1>
            <h3>Climate Change Analyzer</h3>
            <img className={styles.previews} src={Climate}>
            </img>
            <h4>For CS46B: Introduction to Data Structures. Designed using Java. Takes input from a .csv file and returns a sorted, formatted output for ease of reading and understanding from sorting activities. Program allows incorrect or out of range answers but will not continue to the next question until user provides a good answer.
            Implicated the program to create multiple conclusions on weather and temperature trends.</h4>
            <p></p>
            <h3>Maze Generator & Solver</h3>
            <img className={styles.previews} src={Maze}>
            </img>
            <h4>For CS146: Data Structures and Algorithms. Designed using Java. Generates a perfect maze using a square matrix of user-inputted size and solves it. Demonstrated use of searching algorithms such as Depth First Search and Breadth First Search.</h4>
            <p></p>
            <h3>Banking Management System</h3>
            <img className={styles.previews} src={Banking}>
            </img>
            <h4>For CS157A: Introduction to Database Management Systems. Designed using SQL/PL and JDBC. Generates a command-line interface which acts similarly to an ATM.</h4>
            <p></p>
            <h3>Chat Room</h3>
            <video autoPlay muted loop src={ChatRoomPreview} type="video/mp4">
            </video>
            <img className={styles.previews} src={ChatRoomFigma}>
            </img>
            <h4>For CS157C: NoSQL Database Systems. Designed using the following NoSQL databases: Redis and MongoDB  The application languages that were used are: Typescript (Express framework) as the main layer to interact with the main database, Typescript for front-end (React library), Python (Flask framework) for the authentication layer interacting with Redis, and JSON as a universal language for data presentation on both back-end and front-end.
            I was in charge of designing and coding the front-end. I used Figma to create a preview of the application so the other members can visualize the application and user flow. I coded the front-end using React with Typescript to emphasize readability and ensure type safety.
            </h4>
            <p></p>
            
        
        </div>
    </div>
</div>

);
}
export default SchoolPage;