from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict
from datetime import datetime, timedelta

app = FastAPI()

class StudyInput(BaseModel):
    subjects: Dict[str, List[str]]
    exam_dates: Dict[str, str]
    daily_hours: int

@app.post("/generate-plan")
def generate_plan(data: StudyInput):
    today = datetime.today()
    plan = {}
    for subject, chapters in sorted(data.subjects.items(), key=lambda x: data.exam_dates[x[0]]):
        exam_date = datetime.strptime(data.exam_dates[subject], "%Y-%m-%d")
        days_left = max((exam_date - today).days, 1)
        chapter_count = len(chapters)

        for i, chapter in enumerate(chapters):
            study_day = today + timedelta(days=(i % days_left))
            day_str = study_day.strftime("%Y-%m-%d")
            if day_str not in plan:
                plan[day_str] = []
            plan[day_str].append({"subject": subject, "topic": chapter})

    return plan
