class MyApp {
    constructor() {
        this.questions = [
            {
                question: 'Eсть ли разница между window и document?',
                answer: `Да. У JavaScript есть глобальный объект и 
                всё происходит через него. window – тот самый объект, 
                который хранит глобальные переменные, функции, местоположение, историю. 
                Всё находится внутри него, setTimeout, XMLHttpRequest, console и 
                localStorage также являются частью window. Аналогично дело обстоит и 
                с document, который является свойством объекта window и представляет DOM. 
                Все ноды – это часть document, следовательно, вы можете использовать 
                getElementById или addEventListener для document. Но обратите внимание, 
                что этих методов нет в объекте window.`
            },
            {
                question: 'Вызываются ли document.onload и window.onload одновременно?',
                answer: `window.onload вызывается, когда DOM готов и весь контент, 
                включая картинки, стили, фреймы и т.д. загружен. document.onload вызывается 
                когда дерево DOM выстроено, но до момента, как подгружаются картинки, 
                стили и пр.`
            },
            {
                question: 'Как предотвратить нажатие по ссылке?',
                answer: `Использовать preventDefault() внутри обработчика события.`
            },
            {
                question: 'Как остановить дальнейшее распространение события?',
                answer: `Вызвать event.stopPropagation();`
            },
            {
                question: 'Как я могу запустить обработчик в фазе захвата, а не в фазе всплытия?',
                answer: `В методах addEventListener и removeEventLister есть 
                третий опциональный параметр. Вы можете установить его в true или 
                false в зависимости от того хотите или нет использовать фазу захвата.`
            },
            {
                question: 'Каким образом можно предотвратить множественный вызов обработчика для одного события?',
                answer: ` Если слушатель события прикреплён к одному и тому же типу 
                (click, keydown, и т.д.) элемента, вы можете вызвать event.stopImmediatePropagation() 
                в первом обработчике и другие не будут выполнены.`
            },
            {
                question: 'Самовызывающиеся функции.',
                answer: `Тоже весьма частый вопрос на собеседованиях. 
                Ещё иногда подходят к этому со стороны jQuery: 
                «Почему все плагины обособлены в конструкцию (function() {})();?».`
            },
            {
                question: 'Как поменять контекст функции. Частичное применение функции. ',
                answer: `Тут нужно описать  разницу между 
                .call, .apply и .bind и некоторых стандартных решений на уровне языка. `
            },
            {
                question: 'Разница между операторами == и === ',
                answer: `Оператор == сравнивает на равенство, а вот === — на идентичность. 
                Плюс оператора === состоит в том, что он не приводит два значения 
                к одному типу. Именно из-за этого он обычно и используется.`
            }
        ]
        this.questionPlace = document.getElementsByClassName('question')[0];
        this.answerPlace = document.getElementsByClassName('answer')[0];
        this.nextButton = document.querySelector('.next-button');
        this.showAnswerButton = document.querySelector('.show-answer-button');
        this.getRandomQuestion(this.questions);

        this.index;

        this.showAnswerButton.onclick = () => this.onShowAnswerClick(this.index);
        this.nextButton.onclick = () => this.getRandomQuestion(this.questions);
    }

    getRandomQuestion(arr) {
        this.answerPlace.style.display = 'none'
        let randomIndex = Math.floor(Math.random()* arr.length);
        this.index = randomIndex;
        this.setRandomQuestion(this.questions[randomIndex]);
    }
    setRandomQuestion(element) {
        this.questionPlace.innerHTML = element.question;
        this.answerPlace.innerHTML = element.answer;
    }
    onShowAnswerClick(index) {
        this.answerPlace.innerHTML = this.questions[index].answer;
        this.answerPlace.style.display = 'flex'
    }
}

const myapp = new MyApp();