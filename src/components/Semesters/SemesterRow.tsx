import React from 'react';

import { semester } from '../../models/semester';

// props
interface sem_row_props {
    semester: semester,
};

const SemesterRow: React.FC<sem_row_props> = ({ semester }) => {
    return <tr>
        <td>{semester.semester_id}</td>
        <td>{semester.name}</td>
        <td>{semester.year}</td>
        <td>{semester.start_date}</td>
        <td>{semester.end_date}</td>
        <td>{semester.is_active ? 'Yes' : 'No'}</td>
        <td>+</td>
    </tr>;
};

export default SemesterRow;