const ReadableTimer = (timeInSecondes) => {
  let timeLeftAfterOperation = timeInSecondes;
  let hour = 0;
  let minute = 0;
  let seconde = 0;

  if (timeInSecondes >= 3600) {
    hour = Math.floor(timer / 3600);
    timeLeftAfterOperation = timeLeftAfterOperation % (3600 * hour);
  }

  if (timeLeftAfterOperation >= 60) {
    minute = Math.floor(timeLeftAfterOperation / 60);
    timeLeftAfterOperation = timeLeftAfterOperation % (60 * minute);
  }

  seconde = timeLeftAfterOperation;

  const readableTimerString = `${hour > 0 ? `${hour} h` : ""} ${
    minute > 0 ? `${minute} min` : ""
  } ${seconde > 0 ? `${seconde} sec` : "0 sec"}`;

  return readableTimerString;
};

export default ReadableTimer;
