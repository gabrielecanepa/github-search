import GitHubCalendar from 'github-calendar';

const injectCalendar = (username) => {
  GitHubCalendar("#calendar", username);
};

export { injectCalendar };
