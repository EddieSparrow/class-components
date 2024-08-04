export function convertToCSV(data) {
  const itemsArray = [data];
  const headers = Object.keys(itemsArray[0]);
  const rows = itemsArray.map((row) => {
    return headers
      .map((header) => {
        return JSON.stringify(row[header]);
      })
      .join(',');
  });

  return [headers.join(','), ...rows].join('\r\n');
}

export function downloadCSV(data, filename = 'data.csv') {
  const blob = new Blob([data], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
