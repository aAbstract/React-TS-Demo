import { get_api_url } from "../lib/networking";

import { semester } from "../models/semester";

export async function get_all_semsters(): Promise<semester[]> {
    const api_url = `${get_api_url()}/semesters`;

    const http_resp = await fetch(api_url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });

    const json_obj = await http_resp.json();

    const data: semester[] = json_obj['data'] as semester[];

    return data;
}

export async function add_semester(sem: semester) {
    const api_url = `${get_api_url()}/semesters`;

    await fetch(api_url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(sem),
    });
}