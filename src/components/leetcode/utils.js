export function parseSubmissionCalendar(calendar) {
  const data = JSON.parse(calendar);
  const contributions = Object.entries(data).map(([timestamp, count]) => ({
    date: new Date(timestamp * 1000).toISOString().split('T')[0],
    count: count,
  }));

  const today = new Date();
  const lastYear = new Date(today.getTime() - 365 * 24 * 60 * 60 * 1000);
  
  const total = {
    lastYear: contributions
      .filter(item => new Date(item.date) >= lastYear)
      .reduce((sum, item) => sum + item.count, 0),
  };

  return {
    total,
    contributions,
  };
}

export function fillMissingDates(data) {
  const today = new Date();
  const lastYear = new Date(today.getTime() - 365 * 24 * 60 * 60 * 1000);
  
  const filledData = {
    total: data.total,
    contributions: [],
  };

  const dateMap = new Map(data.contributions.map(item => [item.date, item]));

  for (let d = new Date(lastYear); d <= today; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split('T')[0];
    filledData.contributions.push(
      dateMap.get(dateStr) || { date: dateStr, count: 0 }
    );
  }

  return filledData;
}

export function transformData(contributions, transformFn) {
  if (typeof transformFn === 'function') {
    return contributions.map(transformFn);
  }
  return contributions;
}
