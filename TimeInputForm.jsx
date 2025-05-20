import React from 'react';

const TimeInputForm = ({ setDailyHours }) => {
  return (
    <div>
      <h2>Available Hours Per Day</h2>
      <input
        type="number"
        placeholder="Hours"
        onChange={e => setDailyHours(Number(e.target.value))}
      />
    </div>
  );
};

export default TimeInputForm;
