const countdownTillBD = (dob) => {
  const today = new Date().getTime();
  const currentYear = new Date().getFullYear();
  const upcomingBirthday = dob.slice(0, -4).concat(currentYear);
  const upcomingBirthdayFormat = new Date(upcomingBirthday).getTime();
  const BirthdayFormat = new Date(dob).getTime();

  const timeLeft = upcomingBirthdayFormat - today;
  const timePassed = today - BirthdayFormat;
  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24)) + 1;
  const daysGone = Math.floor(timePassed / (1000 * 60 * 60 * 24));
  console.log(`Days left: ${daysLeft} Days passed: ${daysGone}`);
  document.getElementById("days-gone").innerHTML = daysGone;
  document.getElementById("days-left").innerHTML = daysLeft;
  if (daysLeft === 0) {
    document.getElementById("messege").textContent = "Happy Birthday";
  }
};

countdownTillBD("October 25, 2020");
