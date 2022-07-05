import { sleep } from "../lib/async";
import { semester } from "../models/semester";

export async function get_all_semsters(): Promise<semester[]> {
    // data
    const data = <semester[]>[
        {
            semester_id: 1,
            name: 'FALL',
            year: '2022',
            start_date: '1/9/2022',
            end_date: '1/2/2022',
            is_active: true,
        },
        {
            semester_id: 2,
            name: 'FALL',
            year: '2022',
            start_date: '1/9/2022',
            end_date: '1/2/2022',
            is_active: true,
        },
        {
            semester_id: 3,
            name: 'FALL',
            year: '2022',
            start_date: '1/9/2022',
            end_date: '1/2/2022',
            is_active: true,
        },
        {
            semester_id: 4,
            name: 'FALL',
            year: '2022',
            start_date: '1/9/2022',
            end_date: '1/2/2022',
            is_active: true,
        },
        {
            semester_id: 5,
            name: 'FALL',
            year: '2022',
            start_date: '1/9/2022',
            end_date: '1/2/2022',
            is_active: true,
        },
    ];

    await sleep(2000);

    return data
}