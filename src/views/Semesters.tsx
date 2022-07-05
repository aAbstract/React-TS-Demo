import React, { useEffect, useState } from "react"

import { Button } from "react-bootstrap";

import SemestersTable from "../components/Semesters/SemestersTable";
import LoadingScreen from "../components/common/LoadingScreen";
import AddSemesterModal from "../components/Semesters/AddSemesterModal";

import { get_all_semsters } from "../api/semesters";

import { semester } from "../models/semester";

import { post_event } from "../lib/mediator";

import './Semesters.css'

const Semesters: React.FC = () => {
    const [semesters, set_semesters] = useState<semester[]>([]);

    useEffect(() => {
        // on mounted or loaded
        get_all_semsters().then((data) => {
            set_semesters(data);
        });

        return () => {
            // on destroy
        }
    }, []);

    function add_sem_click_handler() {
        post_event('show_add_sem_modal', {});
    }

    return <div id="sem_page_cont">
        <AddSemesterModal />
        <div id="sem_table_cont">
            {semesters.length == 0 ? <LoadingScreen /> : <SemestersTable semesters={semesters} />}
        </div>
        <br />
        <Button variant="primary" onClick={add_sem_click_handler}>Add Semester</Button>
    </div>;
};

export default Semesters;