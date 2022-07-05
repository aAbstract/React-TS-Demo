import React, { useEffect, useState } from "react"

import './AddSemesterModal.css'

import { subscribe } from '../../lib/mediator';

import { semester } from "../../models/semester";

import { add_semester } from "../../api/semesters";

import { Modal, Button, FormControl, FormSelect } from "react-bootstrap";

const AddSemesterModal: React.FC = () => {
    const [modal_show, set_modal_show] = useState(false);

    useEffect(() => {
        subscribe('show_add_sem_modal', 'show_add_sem_modal_func', (_) => {
            set_modal_show(true);
        });

        return () => {
            // on destroy
        }
    }, []);

    function handle_add_sem_btn_click() {
        // fetch form values
        const sem_name: string = (document.querySelector('#sem_name') as HTMLInputElement).value;
        const sem_year: string = (document.querySelector('#sem_year') as HTMLInputElement).value;
        const sem_start_date: string = (document.querySelector('#sem_start_date') as HTMLInputElement).value;
        const sem_end_date: string = (document.querySelector('#sem_end_date') as HTMLInputElement).value;
        const sem_is_active: string = (document.querySelector('#sem_is_active') as HTMLInputElement).value;

        const sem_obj: semester = {
            semester_id: Math.floor(Math.random() * (1000 - 5) + 5),
            name: sem_name,
            year: sem_year,
            start_date: sem_start_date,
            end_date: sem_end_date,
            is_active: sem_is_active == 'yes',
        };

        // make API call
        add_semester(sem_obj).then(() => {
            window.location.reload();
        });
    }

    return <Modal show={modal_show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
        <Modal.Header onClick={() => set_modal_show(false)} closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Add Semester
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div id="add_sem_form_cont">
                <FormControl placeholder="Semester Name" id="sem_name" />
                <br />
                <FormControl placeholder="Semester Year" id="sem_year" />
                <br />
                <FormControl placeholder="Semester Start Date" id="sem_start_date" />
                <br />
                <FormControl placeholder="Semester End Date" id="sem_end_date" />
                <br />
                <FormSelect aria-label="Default select example" id="sem_is_active">
                    <option value="none">Is Active</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </FormSelect>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={handle_add_sem_btn_click}>Add</Button>
        </Modal.Footer>
    </Modal>;
};

export default AddSemesterModal;