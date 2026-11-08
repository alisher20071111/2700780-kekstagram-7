const isMeeting = (startWork, endWork, startMeeting, meetingDuration) => {
  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const workStart = timeToMinutes(startWork);
  const workEnd = timeToMinutes(endWork);
  const meetingStart = timeToMinutes(startMeeting);
  const meetingEnd = meetingStart + meetingDuration;

  return meetingStart >= workStart && meetingEnd <= workEnd;
};
window.isMeeting = isMeeting;