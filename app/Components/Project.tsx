import React from 'react';

const Project = () => {
  return (

    <div className='projects'>

         <div className="sectionHeader">
            <h1>PROJECTS</h1>
            <hr />
         </div>
    <div className='projectHolder'>
    <div className="mb-5 max-w-lg mx-auto bg-teal-600  rounded-lg shadow-lg overflow-hidden">
      <img src='ysahih.png' alt="Project" className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-2xl font-bold mb-3">Project Title</p>
        <p className="text-gray-700">{`hello`}</p>
      </div>
    </div>
    <div className="mb-5 max-w-lg mx-auto bg-teal-600  rounded-lg shadow-lg overflow-hidden">
      <img src='ysahih.png' alt="Project" className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-2xl font-bold mb-3">Project Title</p>
        <p className="text-gray-700">{`hello`}</p>
      </div>
    </div>
    <div className="mb-5 max-w-lg mx-auto bg-teal-600  rounded-lg shadow-lg overflow-hidden">
      <img src='ysahih.png' alt="Project" className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-2xl font-bold mb-3">Project Title</p>
        <p className="text-gray-700">{`hello`}</p>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Project;