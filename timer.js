document.addEventListener("DOMContentLoaded", function () {
  const birthDate = new Date("October 11, 2003");
  const millisecondsPerBreath = 5000; // Average breathing rate (about 12 breaths per minute)
  const litersPerBreath = 0.5; // Roughly 0.5 liters of air per breath
  const oxygenPercentage = 0.21; // 21% of air is oxygen

  function updateTimers() {
    const now = new Date();
    const elapsed = now - birthDate;
    const breaths = Math.floor(elapsed / millisecondsPerBreath);
    const litersOfAir = breaths * litersPerBreath;
    const litersOfOxygen = litersOfAir * oxygenPercentage;

    const years = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 365.25));
    const days = Math.floor(
      (elapsed % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor(
      (elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

    document.getElementById(
      "years"
    ).textContent = `Itne saal ho gaye hai tumko ${years} years, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds! 🤔`;
    document.getElementById(
      "breaths"
    ).textContent = `Aur itni baar shayad ${breaths.toLocaleString()} saans bhi li hogi 😤`;
    document.getElementById(
      "oxygen"
    ).textContent = `Aur itne time main ${Math.round(
      litersOfOxygen
    ).toLocaleString()} itna sara oxygenn bhi leliya 🫨 (in liters)`;
  }

  setInterval(updateTimers, 1000); // Update every second
});
