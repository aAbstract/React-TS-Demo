import React from "react";

import { Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import './Home.css';

const Home: React.FC = () => {
    const navigate = useNavigate();

    function navigate_to_semester_page() {
        navigate('/semesters');
    }

    return <div id="home_page_cont">
        <Button variant="primary" onClick={navigate_to_semester_page}>Semesters</Button>
        <br />
        <Button variant="primary" >Page 2</Button>
        <br />
        <Button variant="primary" >Page 3</Button>
    </div>;
};

export default Home;