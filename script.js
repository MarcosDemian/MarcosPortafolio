document.addEventListener('DOMContentLoaded', () =>{

  const clock_ = document.querySelector('#clock');
  let format24 = true;

  const hr_actual = () => {
    const date = new Date();
    let hours = date.getHours();
    let mins = updt_hr(date.getMinutes());
    let seconds = updt_hr(date.getSeconds())

    if(format24) {
      clock_.innerText = `${hours} : ${mins} : ${seconds}`;
    } else {
      const amPm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      clock_.innerText = `${amPm} ${hours} : ${mins} : ${seconds} `;
    }

    setTimeout(hr_actual, 1000);

  }

  const updt_hr = num => {
    return num < 10 ? '0' + num : num;
  }

  hr_actual();

  const change_format = document.querySelector('#change-format')

  change_format.addEventListener('click', () => {
    if (format24 == true) {
      format24 = false;
    } else {
      format24 = true;
    }
  })

})