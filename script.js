const adviceBtn = document.getElementById('btn');
const adviceText = document.getElementById('advice-text');
const adviceID = document.getElementById('advice-id');

adviceBtn.addEventListener('click', () => {
  fetch('https://api.adviceslip.com/advice')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Cannot be found');
      }
      return response.json();
    })
    .then((data) => {
      adviceText.textContent = `" ${data.slip.advice} "`;
      adviceID.textContent = `#${data.slip.id}`;
    })
    .catch((error) => console.error(error));
});
