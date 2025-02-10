
//header
const data = {
    season: ['V (2024-2025)', 'VI (2025-2026)'],
    step: ['1й этап', '2й этап', '3й этап + Суперблиц', 'Вне конкурса'],
    branch: ['Научные устремления', 'Научный интерес', 'Научный фан'],
    quiz: []
}
renderOptions()
function renderOptions() {
    const select1 = document.getElementById('select1')
    const select2 = document.getElementById('select2')
    const select3 = document.getElementById('select3')
    const select4 = document.getElementById('select4')
    appendOptionFunction(data.season, select1)
    appendOptionFunction(data.step, select2)
    appendOptionFunction(data.branch, select3)
    appendOptionFunction(data.quiz, select4)

    const options = document.querySelectorAll('#select4 option');
    const lastOption = options[options.length - 1];
    document.getElementById('select4').value = options.length > 1 ? lastOption.textContent : ''
    if (options.length > 1) {
        document.querySelector('main').classList.remove('hidden')
        document.getElementById('quizeName').value = document.getElementById('select4').value
    }
}

function appendOptionFunction(array, box) {
    box.querySelectorAll('option').forEach(elem => {
        if (elem.id !== 'addOptionBtn') {
            elem.remove();
        }
    })
    array.forEach(elem => {
        const option = document.createElement('option')
        option.value = elem
        option.textContent = elem
        box.appendChild(option)
    })

}
document.getElementById('select4').addEventListener('change', () => {
    const select = document.getElementById('select4');
    const selectedValue = select.value;

    if (selectedValue === 'add') {
        // Добавляем новый квиз
        data.quiz.push(`${data.quiz.length + 1}. Квиз`);
        console.log(data);
        renderOptions();
    }
});
document.querySelectorAll('.card').forEach(group => {
    group.addEventListener('click', function (event) {
        if (event.target && event.target.matches('li')) {
            const listItems = group.querySelectorAll('li');
            listItems.forEach(item => item.classList.remove('bg-purple-500'));
            event.target.classList.add('bg-purple-500');
        }
    });
});
//header


//buttons of branches
const settingsButton = document.getElementById('settingsButton');
const questionsButton = document.getElementById('questionsButton');
// Функция для установки активного состояния
function setActiveButton(settingBtn) {
    if (settingBtn) {
        questionsButton.classList.remove('bg-violet-700', 'text-white');  // Убираем стиль для неактивной кнопки
        questionsButton.classList.add('bg-transparent', 'text-violet-700'); // Возвращаем исходный стиль для другой кнопки
        settingsButton.classList.add('bg-violet-700', 'text-white');  // Убираем стиль для неактивной кнопки
        settingsButton.classList.remove('bg-transparent', 'text-violet-700'); // Возвращаем исходный стиль для другой кнопки
    } else {
        questionsButton.classList.add('bg-violet-700', 'text-white');  // Убираем стиль для неактивной кнопки
        questionsButton.classList.remove('bg-transparent', 'text-violet-700'); // Возвращаем исходный стиль для другой кнопки
        settingsButton.classList.remove('bg-violet-700', 'text-white');  // Убираем стиль для неактивной кнопки
        settingsButton.classList.add('bg-transparent', 'text-violet-700'); // Возвращаем исходный стиль для другой кнопки
    }
}
// Обработчик кликов для кнопки "Настройки"
settingsButton.addEventListener('click', () => {
    setActiveButton(true);
});
// Обработчик кликов для кнопки "Вопросы"
questionsButton.addEventListener('click', () => {
    setActiveButton(false);
});
//buttons of branches







//buttons of  the active state
let state = null; // Начальное состояние кнопок
const activeStateBtn = document.getElementById('stateActive');
const unActiveStatebtn = document.getElementById('stateUnActive');
// Функция для установки активного состояния
function setStateActiveButton(active) {
    state = 'active'
    if (active) {
        unActiveStatebtn.classList.remove('bg-red-600', 'text-white');  // Убираем стиль для неактивной кнопки
        unActiveStatebtn.classList.add('bg-transparent', 'text-red-500'); // Возвращаем исходный стиль для другой кнопки
        activeStateBtn.classList.add('bg-green-600', 'text-white');  // Убираем стиль для неактивной кнопки
        activeStateBtn.classList.remove('bg-transparent', 'text-green-500'); // Возвращаем исходный стиль для другой кнопки
    } else {
        unActiveStatebtn.classList.add('bg-red-600', 'text-white');  // Убираем стиль для неактивной кнопки
        unActiveStatebtn.classList.remove('bg-transparent', 'text-red-500'); // Возвращаем исходный стиль для другой кнопки
        activeStateBtn.classList.remove('bg-green-600', 'text-white');  // Убираем стиль для неактивной кнопки
        activeStateBtn.classList.add('bg-transparent', 'text-green-500'); // Возвращаем исходный стиль для другой кнопки
    }
}
// Обработчик кликов для кнопки "Настройки"
activeStateBtn.addEventListener('click', () => {
    setStateActiveButton(true);
});
// Обработчик кликов для кнопки "Вопросы"
unActiveStatebtn.addEventListener('click', () => {
    setStateActiveButton(false);
});
//buttons of  the active state






// Проверка состояния при отправке формы
document.getElementById('quizForm').onsubmit = function (event) {
    if (state !== 'active') {
        event.preventDefault();
        alert('Пожалуйста, выберите состояние квиза: "Активен" или "Не активен".');
    }
};



//for input and textarea
function autoResize(textarea) {
    textarea.style.height = 'auto'; // Сбрасываем высоту
    textarea.style.height = (textarea.scrollHeight) + 'px'; // Устанавливаем новую высоту
}