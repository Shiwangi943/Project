import React, { useState } from 'react';

const ExamDateForm = ({ setExamDates }) => {
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');

  const handleAdd = () => {
    setExamDates(prev => ({ ...prev, [subject]: date }));
    setSubject('');
    setDate('');
  };

  return (
    <div>
      <h2>Exam Dates</h2>
      <input
        placeholder="Subject"
        value={subject}
        onChange={e => setSubject(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default ExamDateForm;
