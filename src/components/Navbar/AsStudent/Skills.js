import React from 'react';
import ReactSelect from 'react-select';


const Skills = () => {
  const options = [
    { value: 'content writer', label: 'Content writer' },
    { value: 'web Designer', label: 'Web Designer' },
    { value: 'web Developer', label: 'Web Developer' },
    { value: 'formating', label: 'Formating' },
    { value: 'adobe', label: 'Adobe' },
    { value: 'photoshop', label: 'Photoshopr' },
    { value: 'java', label: 'Java' },
    { value: 'react', label: 'React' },
  ];
  return (
    <div>
      <ReactSelect isMulti options={options} placeholder="Enter skills here" />
    </div>
  );
};

export default Skills;