import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';  // 기본 스타일 추가

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export function MyCalendar() {
    const [value, onChange] = useState<Value>(new Date());

    return (
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
    )
};