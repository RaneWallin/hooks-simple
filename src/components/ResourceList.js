import React from 'react';

import useResources from './useRecourses';

const ResourceList = ({ resource }) => {

    const resources = useResources(resource);

    return <div>{ resources.map(record => <li key={record.id}>{record.title}</li>) }</div>;

}

export default ResourceList;