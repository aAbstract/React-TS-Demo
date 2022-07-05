const debug = true;
const lan_mode = false;
const debug_server_url = `http://${lan_mode ? '192.168.1.12' : 'localhost'}:8080/api`;
const prod_server_url = '/api';

export let get_api_url = (): string => { return (debug ? debug_server_url : prod_server_url); }