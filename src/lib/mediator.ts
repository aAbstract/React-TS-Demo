let subscribers: any = {};
let requests: any = {};

export function subscribe(event_type: string, func_id: string, func: (args: any) => void) {
    if (!(event_type in subscribers))
        subscribers[event_type] = {};
    subscribers[event_type][func_id] = func;
}

export function unsubscribe(event_type: string, func_id: string) {
    delete subscribers[event_type][func_id];
    if (Object.keys(subscribers[event_type]).length == 0)
        delete subscribers[event_type];
}

export function post_event(event_type: string, args: any) {
    if (!(event_type in subscribers))
        return;
    Object.keys(subscribers[event_type]).forEach((key: string) => {
        subscribers[event_type][key](args);
    });
}

export function reg_request(req_type: string, func: (args: any) => any) {
    if (!(req_type in requests))
        requests[req_type] = func;
}

export function rm_request(req_type: string) {
    delete requests[req_type];
}

export function request(req_type: string, args: any) {
    return requests[req_type](args);
}
