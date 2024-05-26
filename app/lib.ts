export function getCurrentTimeAMPM() {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0"); // Pad minutes with leading zero if needed
  
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert to 12-hour format if necessary
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours; // Handle midnight (12 AM)
  
    const formattedTime = `${hours}:${minutes} ${ampm}`;
    return formattedTime;
  }