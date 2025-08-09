const checkBoxList = document.querySelectorAll('.custom-checkbox')
const goalInputList = document.querySelectorAll('.goal-input')
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')
const progressValueSpan = document.querySelector('.progress-value span')

let noOfFilledGoalInput = 0;
let noOfCompletedClass = 0;

checkBoxList.forEach((checkBox) => {
    checkBox.addEventListener('click', () => {
        if (noOfFilledGoalInput === 3) {
            // progressBar.classList.remove('show-error')
            checkBox.parentElement.classList.toggle('completed')
            // if(checkBox.parentElement.classList.contains('completed')) {
            //     noOfCompletedClass++
            //     console.log(noOfCompletedClass)
            //     if(noOfCompletedClass === 1) {
            //         progressValue.style.width = '33%'
            //         progressValueSpan.textContent = '1/3 completed'
            //     } else if(noOfCompletedClass === 2) {
            //         progressValue.style.width = '66%'
            //         progressValueSpan.textContent = '2/3 completed'
            //     } else if(noOfCompletedClass === 3) {
            //         progressValue.style.width = '100%'
            //         progressValueSpan.textContent = '3/3 completed'
            //         noOfCompletedClass = 0;
            //     } else {
            //         progressValue.style.width = '0%'
            //         progressValueSpan.textContent = ''
            //     }
            // }
        } else {
            progressBar.classList.add('show-error')
        }
    })
})

goalInputList.forEach((goalInput) => {
    goalInput.addEventListener('blur', () => {
        if(goalInput.value) {
            noOfFilledGoalInput++
            console.log(noOfFilledGoalInput)
        }
    })
    goalInput.addEventListener('input', () => {
        if(noOfFilledGoalInput === 2) {
            progressBar.classList.remove('show-error')
        }
    })
})