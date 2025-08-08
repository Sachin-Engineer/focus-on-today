const checkBoxList = document.querySelectorAll('.custom-checkbox')
const goalInputList = document.querySelectorAll('.goal-input')
const progressBar = document.querySelector('.progress-bar')

let noOfFilledGoalInput;

checkBoxList.forEach((checkBox) => {
    checkBox.addEventListener('click', () => {
        noOfFilledGoalInput = 0;

        goalInputList.forEach((goalInput) => {
            if (goalInput.value) {
                noOfFilledGoalInput++;
                console.log(noOfFilledGoalInput)
            }
        })

        if (noOfFilledGoalInput === 3) {
            // progressBar.classList.remove('show-error')
            checkBox.parentElement.classList.toggle('completed')
        } else {
            progressBar.classList.add('show-error')
        }
    })
})

goalInputList.forEach((goalInput) => {
    noOfFilledGoalInput = 0;
    if (goalInput.value) {
        noOfFilledGoalInput++;
        console.log(noOfFilledGoalInput)
    }
})

if(noOfFilledGoalInput === 2) {
    goalInputList.addEventListener('input', () => {
        progressBar.classList.remove('show-error')
    })
}