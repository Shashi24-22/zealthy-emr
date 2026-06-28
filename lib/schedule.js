import { addWeeks, addMonths, parseISO, isBefore, isAfter, addDays } from 'date-fns';

export function getOccurrences(datetimeStr, repeat, endDateStr, from, to) {
  const results = [];
  let current = parseISO(datetimeStr);
  const end = endDateStr ? parseISO(endDateStr) : to;

  while (isBefore(current, from)) {
    if (repeat === 'weekly')       current = addWeeks(current, 1);
    else if (repeat === 'monthly') current = addMonths(current, 1);
    else break;
  }

  while (!isAfter(current, to) && !isAfter(current, end)) {
    results.push(new Date(current));
    if (repeat === 'weekly')       current = addWeeks(current, 1);
    else if (repeat === 'monthly') current = addMonths(current, 1);
    else break;
  }

  return results;
}

export function next7Days() {
  const from = new Date(); from.setHours(0,0,0,0);
  return { from, to: addDays(from, 7) };
}

export function next3Months() {
  const from = new Date(); from.setHours(0,0,0,0);
  return { from, to: addMonths(from, 3) };
}