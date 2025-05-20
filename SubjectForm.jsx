import React, { useState } from 'react';

const SubjectForm = ({ setSubjects }) => {
  const [subject, setSubject] = useState('');
  const [topics, setTopics] = useState('');

  const handleAdd = () => {
    setSubjects(prev => ({
      ...prev,
      [subject]: topics.split(',').map(t => t.trim())
    }));
    setSubject('');
    setTopics('');
  };

  return (
    <div>
      <h2>Subjects & Topics</h2>
      <input
        placeholder="Subject"
        value={subject}
        onChange={e => setSubject(e.target.value)}
      />
      <input
        placeholder="Comma-separated topics"
        value={topics}
        onChange={e => setTopics(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default SubjectForm;
