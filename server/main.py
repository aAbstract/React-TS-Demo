from xmlrpc.client import boolean
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import http_response


class semster(BaseModel):
    semester_id: int
    name: str
    year: str
    start_date: str
    end_date: str
    is_active: boolean


server = FastAPI()

semesters = [
    semster(semester_id=1, name='FALL', year='2022',
            start_date='1/9/2022', end_date='1/2/2023', is_active=True),
    semster(semester_id=2, name='FALL', year='2022',
            start_date='1/9/2022', end_date='1/2/2023', is_active=True),
    semster(semester_id=3, name='FALL', year='2022',
            start_date='1/9/2022', end_date='1/2/2023', is_active=True),
    semster(semester_id=4, name='FALL', year='2022',
            start_date='1/9/2022', end_date='1/2/2023', is_active=True),
    semster(semester_id=5, name='FALL', year='2022',
            start_date='1/9/2022', end_date='1/2/2023', is_active=True),
]


# register middlewares
server.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=['*'],
    allow_headers=['*'],
)


@server.get('/')
async def root_get():
    return http_response.create_json_response(msg='server online')


@server.get('/api/semesters')
async def root_get():
    return http_response.create_json_response(data=semesters)


@server.post('/api/semesters')
async def root_get(req: semster):
    semesters.append(req)

    return http_response.create_json_response(msg='ok')


if __name__ == '__main__':
    uvicorn.run(server, host='0.0.0.0', port=8080)
