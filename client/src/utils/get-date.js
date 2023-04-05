export function GetDateFrom(dateStr) {
    // Convert string to Date object
    const date = new Date(dateStr);
    // Extract day, month, and year from Date object
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    // Create formatted date string
    return `${day}/${month}/${year}`;
}