import React from 'react';

import { Spinner } from 'react-bootstrap';

const Loading: React.FC = () => {
    return <Spinner animation="grow" variant="primary" />;
};

export default Loading;