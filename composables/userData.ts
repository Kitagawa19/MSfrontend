export const userScheduleData = () => {
  return useState('Schedule', () => ref({
      progression:0,
  }))
}