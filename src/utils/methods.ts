export const formatDate = (date: Date) => {
  const now = new Date();

  // Check if it's within the current minute (to show "Now")
  if (Math.abs(now.getTime() - date.getTime()) < 60000) {
    return 'Now';
  }

  // Check if the date is today
  const isToday =
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();

  if (isToday) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours % 12 || 12}:${
      minutes < 10 ? '0' + minutes : minutes
    } ${ampm}`;
    return `Today, ${formattedTime}`;
  } else {
    // Format as "06 Nov, 1:20 PM"
    const day = date.getDate();
    const month = date.toLocaleString('default', {month: 'short'});
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours % 12 || 12}:${
      minutes < 10 ? '0' + minutes : minutes
    } ${ampm}`;
    return `${day} ${month}, ${formattedTime}`;
  }
};
