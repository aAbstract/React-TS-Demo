import React from 'react';

import SemesterRow from './SemesterRow';

import { semester } from '../../models/semester';

import './SemestersTable.css'

// props
interface sem_table_props {
    semesters: semester[],
};

const SemestersTable: React.FC<sem_table_props> = ({ semesters }) => {

    return <table className="table table-striped sem_table">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Year</th>
                <th scope="col">StartDate</th>
                <th scope="col">EndDate</th>
                <th scope="col">IsActive</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            {semesters.map((semester, index) => <SemesterRow key={index} semester={semester} />)}
        </tbody>
    </table>
};

export default SemestersTable