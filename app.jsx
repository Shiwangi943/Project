import React, { useState } from 'react';
import SubjectForm from './components/SubjectForm';
import ExamDateForm from './components/ExamDateForm';
import TimeInputForm from './components/TimeInputForm';
import StudyPlanTable from './components/StudyPlanTable';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

const App = () => {
  const [subjects, setSubjects] = useState({});
  const [examDates, setExamDates] = useState({});
  const [dailyHours, setDailyHours] = useState(3);
  const [studyPlan, setStudyPlan] = useState(null);

  const handleGeneratePlan = async () => {
    const response = await axios.post('/generate-plan', {
      subjects,
      exam_dates: examDates,
      daily_hours: dailyHours
    });
    setStudyPlan(response.data);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Smart Study Planner</h1>
      <SubjectForm setSubjects={setSubjects} />
      <ExamDateForm setExamDates={setExamDates} />
      <TimeInputForm setDailyHours={setDailyHours} />
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
        onClick={handleGeneratePlan}
      >
        Generate Plan
      </button>
      {studyPlan && <StudyPlanTable plan={studyPlan} />}
    </div>
  );
};

export default App;
