import moment from "jalali-moment";
// moment.locale("fa");

function chunkArray(myArray: any, chunk_size: any) {
  var results = [];
  while (myArray.length) {
    results.push(myArray.splice(0, chunk_size));
  }
  return results;
}

export function getDaysOfMonth(month: any, isGregorian = false) {
  const days = [];
  const monthFormat = isGregorian ? "month" : "jMonth";
  const dayOffset = isGregorian ? 0 : 1;

  const current = month.clone().startOf(monthFormat);
  const end = month.clone().endOf(monthFormat);

  current.subtract((current.day() + dayOffset) % 7, "days");
  end.add(6 - ((end.day() + dayOffset) % 7), "days");

  while (current.isBefore(end)) {
    days.push(current.clone());
    current.add(1, "days");
  }
  return chunkArray(days, 7);
}
