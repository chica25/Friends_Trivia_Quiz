
const allAnswers = ['B', 'A', 'D', 'B', 'B', 'A', 'D', 'A', 'B', 'C'];
const form = document.querySelector('.form');
const result = document.querySelector('.result')

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value]
    
    userAnswers.forEach((answer, index) => {
        if(answer === allAnswers[index]){
            score += 10;
        }
      });

    scrollTo(0 ,0);
    result.querySelector('span').textContent = `${score}%`;

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        output == score ? clearInterval(timer) : output++;
    }, 10);
  
});

