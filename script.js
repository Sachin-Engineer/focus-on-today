const checkBoxList = document.querySelectorAll('.custom-checkbox')
const goalInputList = document.querySelectorAll('.goal-input')
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')
const progressValueSpan = document.querySelector('.progress-value span')
const progressLabel = document.querySelector('.progress-label')

let noOfFilledGoalInput = 0;
let noOfCompletedClass = 0;

const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {}
noOfFilledGoalInput = Object.values(allGoals).filter((goal) => goal.inputValue).length
noOfCompletedClass = Object.values(allGoals).filter((goal) => goal.completed).length

if (noOfCompletedClass === 1) {
    progressValue.style.width = '33%'
    progressValueSpan.textContent = '1/3 completed'
    progressLabel.textContent = 'Well begun is half done!'
} else if (noOfCompletedClass === 2) {
    progressValue.style.width = '66%'
    progressValueSpan.textContent = '2/3 completed'
    progressLabel.textContent = 'Just a step away, keep going!'
} else if (noOfCompletedClass === 3) {
    progressValue.style.width = '100%'
    progressValueSpan.textContent = '3/3 completed'
    progressLabel.textContent = 'Whoa! You just completed all the goals, time for chill dude'
} else {
    progressValue.style.width = '0%'
    progressValueSpan.textContent = ''
    progressLabel.textContent = 'Raise the bar by completing your goals!'
}

checkBoxList.forEach((checkBox) => {
    checkBox.addEventListener('click', () => {
        // console.log(noOfFilledGoalInput)
        if (noOfFilledGoalInput === 3) {
            // progressBar.classList.remove('show-error')
            checkBox.parentElement.classList.toggle('completed')
            const inputId = checkBox.nextElementSibling.id
            if (!allGoals[inputId]) {
                allGoals[inputId] = { inputValue: '', completed: false }
            } else {
                allGoals[inputId].completed = !allGoals[inputId].completed
            }
            localStorage.setItem('allGoals', JSON.stringify(allGoals))

            if (checkBox.parentElement.classList.contains('completed')) {
                noOfCompletedClass++
                // console.log(noOfCompletedClass)
                if (noOfCompletedClass === 1) {
                    progressValue.style.width = '33%'
                    progressValueSpan.textContent = '1/3 completed'
                    progressLabel.textContent = 'Well begun is half done!'
                } else if (noOfCompletedClass === 2) {
                    progressValue.style.width = '66%'
                    progressValueSpan.textContent = '2/3 completed'
                    progressLabel.textContent = 'Just a step away, keep going!'
                } else if (noOfCompletedClass === 3) {
                    progressValue.style.width = '100%'
                    progressValueSpan.textContent = '3/3 completed'
                    progressLabel.textContent = 'Whoa! You just completed all the goals, time for chill dude'
                } else {
                    progressValue.style.width = '0%'
                    progressValueSpan.textContent = ''
                    progressLabel.textContent = 'Raise the bar by completing your goals!'
                }
            } else {
                noOfCompletedClass--
                // console.log(noOfCompletedClass)
                if (noOfCompletedClass === 1) {
                    progressValue.style.width = '33%'
                    progressValueSpan.textContent = '1/3 completed'
                    progressLabel.textContent = 'Well begun is half done!'
                } else if (noOfCompletedClass === 2) {
                    progressValue.style.width = '66%'
                    progressValueSpan.textContent = '2/3 completed'
                    progressLabel.textContent = 'Just a step away, keep going!'
                } else if (noOfCompletedClass === 3) {
                    progressValue.style.width = '100%'
                    progressValueSpan.textContent = '3/3 completed'
                    progressLabel.textContent = 'Whoa! You just completed all the goals, time for chill dude'
                } else {
                    progressValue.style.width = '0%'
                    progressValueSpan.textContent = ''
                    progressLabel.textContent = 'Raise the bar by completing your goals!'
                }
            }
        } else {
            progressBar.classList.add('show-error')
        }
    })
})

goalInputList.forEach((goalInput) => {
    goalInput.value = allGoals[goalInput.id]?.inputValue || ''
    if (allGoals[goalInput.id]?.completed) {
        const checkBox = checkBoxList[Array.from(goalInputList).indexOf(goalInput)];
        if (checkBox) {
            checkBox.parentElement.classList.add('completed');
        }
    }

    goalInput.addEventListener('blur', () => {
        if (goalInput.value) {
            if (noOfFilledGoalInput < 3) {
                noOfFilledGoalInput++
            }
            // console.log(noOfFilledGoalInput)
        }
    })
    goalInput.addEventListener('input', () => {
        if (noOfFilledGoalInput === 2) {
            progressBar.classList.remove('show-error')
        }

        if (allGoals[goalInput.id]?.completed) {
            goalInput.value = allGoals[goalInput.id].inputValue
            return
        }

        allGoals[goalInput.id] = {
            inputValue: goalInput.value,
            completed: false,
        }
        localStorage.setItem('allGoals', JSON.stringify(allGoals))
    })
})