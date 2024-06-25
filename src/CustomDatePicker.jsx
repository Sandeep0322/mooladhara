import React, { useState, useEffect } from 'react';
import { Box, Typography, Modal } from '@mui/material';
import dayjs from 'dayjs';

const CustomDatepicker = ({ open, onClose, selectedDate, onDateChange }) => {
  const [date, setDate] = useState(dayjs());

  useEffect(() => {
    if (selectedDate) {
      setDate(dayjs(selectedDate));
    }
  }, [selectedDate]);

  const handlePrevMonth = () => {
    setDate(date.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setDate(date.add(1, 'month'));
  };

  const handleDateClick = (day) => {
    const newDate = date.date(day);
    onDateChange(newDate);
    onClose();
  };

  const renderDays = () => {
    const startOfMonth = date.startOf('month').day();
    const daysInMonth = date.daysInMonth();
    const days = [];

    for (let i = 0; i < startOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className='day empty'></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = date.date(i);
      const isSelected =
        selectedDate && currentDate.isSame(selectedDate, 'day');
      days.push(
        <Typography
          key={i}
          className={`day ${isSelected ? 'selected' : ''}`}
          onClick={() => handleDateClick(i)}
          sx={{ fontWeight: 700, fontSize: '18px' }}
        >
          {i}
        </Typography>
      );
    }

    return days;
  };

  const renderWeekdays = () => {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return weekdays.map((day, index) => (
      <Typography
        key={index}
        sx={{
          fontSize: '16px',
          color: '#7A7A7A',
          fontWeight: 500,
          pr: '20px',
          m: 0,
        }}
      >
        {day}
      </Typography>
    ));
  };

  return (
    <Modal open={open} onClose={onClose} sx={{ outline: 'none' }}>
      <Box className='datepicker-modal'>
        <Box className='datepicker-header'>
          <Typography sx={{ fontWeight: 700, fontSize: '23px' }}>
            {date.format('MMMM YYYY')}
          </Typography>
          <Box sx={{ display: 'flex', gap: '8px' }}>
            <img
              src='leftBlackArrow.svg'
              width='31px'
              height='31px'
              onClick={handlePrevMonth}
              style={{ cursor: 'pointer' }}
              alt='leftBlackArrow'
            />
            <img
              src='rightBlackArrow.svg'
              width='31px'
              height='31px'
              style={{ cursor: 'pointer' }}
              onClick={handleNextMonth}
              alt='rightBlackArrow'
            />
          </Box>
        </Box>
        <Box className='datepicker-weekdays'>{renderWeekdays()}</Box>
        <Box className='datepicker-grid'>{renderDays()}</Box>
      </Box>
      {/* <div className='frame-wrapper'>
              <div className='frame-8'>
                <div className='time-picker-container'>
                  <img
                    className='img-2'
                    alt='Clock'
                    src='time.svg'
                    onClick={toggleTimePicker} // Click handler to toggle time picker modal
                  />
                  <div
                    className='text-wrapper-5'
                    onClick={toggleTimePicker} // Make the text clickable as well
                  >
                    {selectedTime ? selectedTime : 'Select time'}
                  </div>
                </div>
                <DraggableTimePicker
                  isOpen={isTimePickerOpen}
                  selectedTime={selectedTime}
                  onSelect={handleTimeSelect}
                  onClose={() => setIsTimePickerOpen(false)}
                />
              </div>
            </div> */}
    </Modal>
  );
};

export default CustomDatepicker;
