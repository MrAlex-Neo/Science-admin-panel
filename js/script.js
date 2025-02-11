//header________________________________________________________________________
const data = {
    season: ['V (2024-2025)', 'VI (2025-2026)'],
    step: ['1й этап', '2й этап', '3й этап + Суперблиц', 'Вне конкурса'],
    branch: ['Научные устремления', 'Научный интерес', 'Научный фан'],
    quiz: []
}

const questions = [
    {
        id: 1,
        question: 'Назовите пять причин не уволиться после этого конкурса?',
        text: true,
        answers: [
            {
                text: 'Пятая пятница пятидесятницы',
                state: false,
            },
            {
                text: 'Кукуево море иногда собирается посылать головы муравьев на откуп соблезубым и прочим ныряльщикам. Подобное не интересно ни вам ни кому было еще',
                state: false,
            },
            {
                text: 'Пистолет',
                state: false,
            },
            {
                text: 'Никарагуа - Манагуа',
                state: true,
            },

        ]
    },
    {
        id: 2,
        question: 'Лаботамия это порок или призвание?',
        text: true,
        answers: [
            {
                text: 'Посхальная энциклопедия',
                state: false,
            },
            {
                text: 'Ихтиандрова писанина',
                state: false,
            },
            {
                text: 'Никогда и никому так небыло хорошо, как Цири, которая жила на острове у Нимуэ и любовалась вечерами как "Король Рыбак" своими ручищами лодку стругает и поёт песню',
                state: true,
            },
            {
                text: 'грек',
                state: false,
            },

        ]
    },
    {
        id: 3,
        question: 'Вопросы с изображениями',
        text: false,
        answers: [
            {
                link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXEcE75-bcRjGyl0cytaeO-wBIGizyfH5dow&s',
                state: true,
            },
            {
                link: 'https://cdn.trinixy.ru/pics6/20230801/240813_1_trinixy_ru.jpg',
                state: false,
            },
            {
                link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAX23TLmLUDFMRc-yPictpjVntgpNb0cI2A&s',
                state: false,
            },
            {
                link: 'https://static.tildacdn.com/tild3863-3839-4163-b166-326162373566/___.jpg',
                state: false,
            },

        ]
    }
]
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
    } else {
        document.getElementById('quizeName').value = selectedValue
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
//header________________________________________________________________________







//buttons of branches________________________________________________________________________
const settingsButton = document.getElementById('settingsButton');
const questionsButton = document.getElementById('questionsButton');
// Функция для установки активного состояния
function setActiveButton(settingBtn) {
    if (settingBtn) {
        document.getElementById('quizForm').classList.remove('hidden')
        document.getElementById('questionBox').classList.add('hidden')
        questionsButton.classList.remove('bg-violet-700', 'text-white');  // Убираем стиль для неактивной кнопки
        questionsButton.classList.add('bg-transparent', 'text-violet-700'); // Возвращаем исходный стиль для другой кнопки
        settingsButton.classList.add('bg-violet-700', 'text-white');  // Убираем стиль для неактивной кнопки
        settingsButton.classList.remove('bg-transparent', 'text-violet-700'); // Возвращаем исходный стиль для другой кнопки
    } else {
        document.getElementById('quizForm').classList.add('hidden')
        document.getElementById('questionBox').classList.remove('hidden')
        addQuestionsToTheList()
        fullQuestion.value = ''
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
//buttons of branches________________________________________________________________________








//buttons of  the active state________________________________________________________________________
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
//buttons of  the active state________________________________________________________________________







// Проверка состояния при отправке формы________________________________________________________________________
let state = null; // Начальное состояние кнопок
document.getElementById('quizForm').onsubmit = function (event) {
    event.preventDefault();
    if (state !== 'active') {
        alert('Пожалуйста, выберите состояние квиза: "Активен" или "Не активен".');
    }else{
        alert('Квиз успешно добавлен');
    }
};
let questState = null
document.getElementById('questionForm').onsubmit = function (event) {
    event.preventDefault();
    console.log(stateTextAnswer)
    if (questState !== 'active') {
        alert('Необходимо выбрать правильный вариант ответа');
    }else{
        alert('Вопрос успешно добавлен');
    }
};
// Проверка состояния при отправке формы________________________________________________________________________









// Логика рендеринга и отображения вопросов________________________________________________________________________
const questionList = document.getElementById('questionList');
const fullQuestion = document.getElementById('fullQuestion');
// Функция добавления вопросов в список
function addQuestionsToTheList() {
    questionList.innerHTML = ''; // Очищаем список перед добавлением новых элементов
    questions.forEach((question, index) => {
        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.id = 'question' + question.id; // Уникальный id для каждой кнопки
        button.dataset.text = question.text
        button.classList.add(
            'question-btn',
            'text-green-500',
            'bg-white',
            'border-2',
            'border-green-500',
            'hover:bg-green-500',
            'hover:text-white',
            'focus:ring-4',
            'focus:outline-none',
            'focus:ring-green-300',
            'font-medium',
            'rounded-lg',
            'text-sm',
            'px-5',
            'py-2.5',
            'text-center',
            'truncate'
        );
        button.textContent = `${index + 1}. ${question.question}`;
        questionList.appendChild(button);
    });
    setupButtons();
}
addQuestionsToTheList()
function resetActiveButtons() {
    const buttons = document.querySelectorAll('.question-btn');
    buttons.forEach(button => {
        button.classList.remove('bg-green-500', 'text-white');
        button.classList.add('bg-white', 'text-green-500');
    });
}

function setupButtons() {
    const buttons = document.querySelectorAll('.question-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            fullQuestion.dataset.index = button.id
            fullQuestion.value = button.textContent.slice(2, button.textContent.length)
            console.log(button.dataset.text === 'true')
            questState = null
            if (button.dataset.text === 'true') {
                toggleAnswerBtnState('textAnswer');
            } else {
                toggleAnswerBtnState('imgAnswer');
            }
            resetActiveButtons();
            button.classList.add('bg-green-500', 'text-white');
            button.classList.remove('bg-white', 'text-green-500');
        });
    });
}
document.getElementById('addQuestion').onclick = () => {
    // Сначала создаем новую кнопку
    const button = document.createElement('button');
    button.setAttribute('type', 'button');

    // Присваиваем id с учётом текущего количества кнопок в списке
    const questionListBtns = document.querySelectorAll('.question-btn');
    const buttonId = questionListBtns.length + 1;
    button.id = 'question' + (questionListBtns.length + 1);
    button.dataset.text = "true"

    button.classList.add(
        'question-btn',
        'text-green-500',
        'bg-white',
        'border-2',
        'border-green-500',
        'hover:bg-green-500',
        'hover:text-white',
        'focus:ring-4',
        'focus:outline-none',
        'focus:ring-green-300',
        'font-medium',
        'rounded-lg',
        'text-sm',
        'px-5',
        'py-2.5',
        'text-center',
        'truncate'
    );
    button.textContent = `${buttonId}. ...`;
    questionList.appendChild(button);
    setupButtons();
};

fullQuestion.addEventListener('input', (e) => {
    if (fullQuestion.dataset.index) {
        document.getElementById(fullQuestion.dataset.index).textContent = document.getElementById(fullQuestion.dataset.index).textContent.slice(0, 3) + e.target.value
    }
})
// Логика рендеринга и отображения вопросов________________________________________________________________________






// Логика рендеринга и отображения ответов
let stateTextAnswer = true
function toggleAnswerBtnState(selectedBtnId) {
    const btns = ['textAnswer', 'imgAnswer'];
    btns.forEach(btnId => {
        const btn = document.getElementById(btnId);

        if (btnId === selectedBtnId) {
            btn.classList.remove('text-green-500', 'bg-transparent');
            btn.classList.add('text-white', 'bg-green-500');
            renderAnswers(fullQuestion.dataset.index, selectedBtnId === 'textAnswer' ? true : false);
        } else {
            btn.classList.remove('text-white', 'bg-green-500');
            btn.classList.add('text-green-500', 'bg-transparent');
        }
    });

    // Управление видимостью блоков должно быть вне цикла
    if (selectedBtnId === 'textAnswer') {
        document.getElementById('textAnswerBlock').classList.remove('hidden');
        document.getElementById('imgAnswerBlock').classList.add('hidden');
    } else {
        document.getElementById('textAnswerBlock').classList.add('hidden');
        document.getElementById('imgAnswerBlock').classList.remove('hidden');
    }
}


document.getElementById('textAnswer').onclick = () => {
    toggleAnswerBtnState('textAnswer');
}

document.getElementById('imgAnswer').onclick = () => {
    toggleAnswerBtnState('imgAnswer');
}

renderAnswers(null, true)
function renderAnswers(id, textAnswers) {
    console.log(id, textAnswers)
    if (textAnswers) {
        stateTextAnswer = true
        const container = document.getElementById('textAnswerBlock');
        const otherContainer = document.getElementById('imgAnswerBlock');
        container.innerHTML = ''
        otherContainer.innerHTML = ''
        let find = false
        questions.forEach(elem => {
            if (('question' + elem.id) === id) {
                container.innerHTML = ''; // очищаем контейнер перед рендером
                find = true
                if (elem.text) {
                    // Если есть заполненные текстовые варианты
                    elem.answers.forEach((answer, index) => {
                        const answerContainer = document.createElement('div');
                        answerContainer.classList.add('answer-container');
                        answerContainer.style.display = 'flex';
                        answerContainer.style.alignItems = 'center';
                        answerContainer.style.marginBottom = '10px';
                        const textarea = createTextAreaForAnswer(answer.text);
                        const checkbox = createCheckboxForAnswer(answer.state);
                        if (answer.state === true) {
                            questState ='active'
                        }
                        checkbox.addEventListener('change', () => {
                            container.querySelectorAll('input').forEach(elem => {
                                elem.checked = false;
                            })
                            checkbox.checked = !checkbox.checked;
                            questState ='active'
                        });

                        answerContainer.appendChild(textarea);
                        answerContainer.appendChild(checkbox);

                        container.appendChild(answerContainer);
                    });
                } else {
                    // Если пустые текстовые варианты (по 4 штуки)
                    for (let i = 0; i < 4; i++) {
                        const answerContainer = document.createElement('div');
                        answerContainer.classList.add('answer-container');
                        answerContainer.style.display = 'flex';
                        answerContainer.style.alignItems = 'center';
                        answerContainer.style.marginBottom = '10px';
                        const textarea = createTextAreaForAnswer('');
                        const checkbox = createCheckboxForAnswer(false);
                        checkbox.addEventListener('change', () => {
                            container.querySelectorAll('input').forEach(elem => {
                                elem.checked = false;
                            })
                            checkbox.checked = !checkbox.checked;
                            questState ='active'
                        });

                        answerContainer.appendChild(textarea);
                        answerContainer.appendChild(checkbox);

                        container.appendChild(answerContainer);
                    }
                }
            }
        });
        if (!find) {
            // Если пустые текстовые варианты (по 4 штуки)
            for (let i = 0; i < 4; i++) {
                const answerContainer = document.createElement('div');
                answerContainer.classList.add('answer-container');
                answerContainer.style.display = 'flex';
                answerContainer.style.alignItems = 'center';
                answerContainer.style.marginBottom = '10px';
                const textarea = createTextAreaForAnswer('');
                const checkbox = createCheckboxForAnswer(false);
                checkbox.addEventListener('change', () => {
                    container.querySelectorAll('input').forEach(elem => {
                        elem.checked = false;
                    })
                    checkbox.checked = !checkbox.checked;
                    questState ='active'
                });

                answerContainer.appendChild(textarea);
                answerContainer.appendChild(checkbox);

                container.appendChild(answerContainer);
            }
        }
    } else {
        stateTextAnswer = false
        const otherContainer = document.getElementById('textAnswerBlock');
        const container = document.getElementById('imgAnswerBlock');
        container.innerHTML = ''
        otherContainer.innerHTML = ''
        let find = false
        questions.forEach(elem => {
            if (('question' + elem.id) === id) {
                find = true
                if (!elem.text) {
                    // Если есть заполненные текстовые варианты
                    elem.answers.forEach((answer, index) => {
                        const answerContainer = document.createElement('div');
                        answerContainer.classList.add('w-full', 'flex', 'justify-between', 'items-center', 'gap-8');
                        const p = createPForAnswer(index);
                        const { input, imageContainer } = createInputForAnswer(answer.link)
                        const checkbox = createCheckboxForAnswer(answer.state);
                        if (answer.state === true) {
                            questState ='active'
                        }
                        checkbox.addEventListener('change', () => {
                            container.querySelectorAll('input').forEach(elem => {
                                elem.checked = false;
                            })
                            checkbox.checked = !checkbox.checked;
                            questState ='active'
                        });

                        answerContainer.appendChild(p);
                        answerContainer.appendChild(input);
                        answerContainer.appendChild(imageContainer);
                        answerContainer.appendChild(checkbox);

                        console.log('img')
                        container.appendChild(answerContainer);
                    });
                } else {
                    // Если пустые текстовые варианты (по 4 штуки)
                    for (let i = 0; i < 4; i++) {
                        const answerContainer = document.createElement('div');
                        answerContainer.classList.add('w-full', 'flex', 'justify-between', 'items-center', 'gap-8');
                        const p = createPForAnswer(i);
                        const { input, imageContainer } = createInputForAnswer('')
                        const checkbox = createCheckboxForAnswer(false);
                        checkbox.addEventListener('change', () => {
                            container.querySelectorAll('input').forEach(elem => {
                                elem.checked = false;
                            })
                            checkbox.checked = !checkbox.checked;
                            questState ='active'
                        });

                        answerContainer.appendChild(p);
                        answerContainer.appendChild(input);
                        answerContainer.appendChild(imageContainer);
                        answerContainer.appendChild(checkbox);

                        container.appendChild(answerContainer);
                    }
                }
            }
        });
        if (!find) {
            // Если пустые текстовые варианты (по 4 штуки)
            for (let i = 0; i < 4; i++) {
                const answerContainer = document.createElement('div');
                answerContainer.classList.add('w-full', 'flex', 'justify-between', 'items-center', 'gap-8');
                const p = createPForAnswer(i);
                const { input, imageContainer } = createInputForAnswer('')
                const checkbox = createCheckboxForAnswer(false);
                checkbox.addEventListener('change', () => {
                    container.querySelectorAll('input').forEach(elem => {
                        elem.checked = false;
                    })
                    checkbox.checked = !checkbox.checked;
                    questState ='active'
                });

                answerContainer.appendChild(p);
                answerContainer.appendChild(input);
                answerContainer.appendChild(imageContainer);
                answerContainer.appendChild(checkbox);

                container.appendChild(answerContainer);
            }
        }
    }
}

function createPForAnswer(value) {
    const p = document.createElement('p')
    p.textContent = `Изображение для ${value + 1} ответа`

    p.classList.add(
        'block',
        'p-4',
        'w-[80%]',
        'h-min',
        'text-lg',
        'text-center',
        'rounded-lg',
        'border',
        'border-green-500'
    );

    return p
}
function createInputForAnswer(link) {
    // Создаем контейнер для изображения и input
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('w-20', 'h-20', 'flex', 'items-center', 'justify-center', 'bg-gray-200', 'rounded-lg', 'mb-6');

    // Создаем иконку по умолчанию
    const icon = document.createElement('img');
    icon.classList.add('w-10', 'h-10');
    icon.src = './download.svg'
    imageContainer.appendChild(icon);

    // Если передан ссылкой изображение, показываем его
    if (link && link !== '') {
        const img = document.createElement('img');
        img.src = link;
        img.classList.add('w-20', 'h-20', 'object-cover', 'rounded-lg');
        imageContainer.innerHTML = ''; // Убираем иконку
        imageContainer.appendChild(img);
    }

    // Создаем input для загрузки изображения
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.classList.add('cursor-pointer', 'bg-gray-100', 'rounded-lg', 'border', 'border-gray-300', 'p-2', 'w-40', 'text-center', 'h-min', 'text-transparent');
    input.style.display = 'none'; // Скрываем input

    // Добавляем обработчик изменения
    input.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.classList.add('w-20', 'h-20', 'object-cover', 'rounded-lg');
                imageContainer.innerHTML = ''; // Убираем иконку
                imageContainer.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });

    // Обработчик клика на imageContainer, чтобы показать input
    imageContainer.addEventListener('click', function () {
        input.click(); // Активируем клик на input
    });

    // Возвращаем imageContainer и input
    return { input, imageContainer };
}


function createTextAreaForAnswer(value) {
    const textArea = document.createElement('textarea')
    textArea.value = value
    textArea.rows = '2'
    textArea.required = true
    textArea.classList.add(
        'block',
        'p-2.5',
        'w-full',
        'text-sm',
        'rounded-lg',
        'border',
        'border-green-500'
    );

    textArea.placeholder = "Название вопроса..."
    textArea.style = "resize: none; overflow-y: hidden"
    textArea.oninput = () => autoResize(textArea)
    return textArea
}
function createCheckboxForAnswer(state) {
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.checked = state
    checkbox.classList.add(
        'w-10',
        'h-10',
        'ml-5',
        'text-green-600',
        'bg-gray-100',
        'border-gray-300',
        'rounded-sm',
    );

    return checkbox
}

// Логика рендеринга и отображения ответов







// OTHER________________________________________________________________________
//for input and textarea
function autoResize(textarea) {
    textarea.style.height = 'auto'; // Сбрасываем высоту
    textarea.style.height = (textarea.scrollHeight) + 'px'; // Устанавливаем новую высоту
}