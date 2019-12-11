class MyApp {
    constructor() {
        this.questions = [
            {
                question: 'Что такое тестирование ',
                answer: `это процесс исследования , испытания программного 
                        продукта, проверка соответствия между реальным 
                        поведением программы и его ожидаемым поведением.`
            },
            {
                question: 'назовите цели тестирования',
                answer: `1.	Предоставление информации 	о качестве ПО конечному заказчику.
                        2.	Повышение качества ПО
                        3.	Предотвращение появления дефектов.
                        Главная задача тестирования – поиск дефектов.`
            },
            {
                question: 'что такое Качество ПО ',
                answer: `это способность программного продукта при 
                        заданных условиях удовлетворять установленным потребностям.`
            },
            {
                question: 'что такое Контроль качества и гарантия качества (QC & QA);',
                answer: `QC (Quality Control) – это процесс нахождения ошибок в продукте, 
                        с целью их последующего исправления . 
                        Задачей Quality Control является поддержка качества продукта 
                        в текущий момент времени. Quality Control ориентирован на продукт , 
                        разрабатываемый в данный момент. (ориентирован на продукт и его качество)
                        QA(Quality Assurance) – это процесс, задачей которого является 
                        обеспечение качества продукта в будущем. (это процесс и его качество) 
                `
            },
            {
                question: 'Роль тестирования в процессе разработки.',
                answer: `1.	Процесс разработки невозможен без контроля качества 
                            разрабатываемого продукта.
                        2.	Тестирование позволяет оценить качество разрабатываемого продукта.`
            },
            {
                question: 'Методы контроля качества «Verification» и «Validation»',
                answer: `1.	Verification это практика проверки документов, дизайна, 
                            архитектуры, кода. Это проверка составляющих проекта.

                            a.	Verification всегда проходит без запуска кода
                            b.	Верификация использует методы reviews, walkthroughs, inspections.
                            c.	Отвечает на вопрос «Делаем ли мы продукт правильно?»
                            То есть -  Процесс.
                            d.	Верификация происходит до Валидации
                            
                        2.	Validation это процесс оценки качества конечного продукта, 
                            необходимо проверить, соответствует ли програмное обеспечение 
                            ожиданиям и требованиям клиента.
                            e.	Валидация всегда включает в себя запуск кода
                            f.	Отвечает на вопрос «Делаем ли мы правильный продукт?» То есть - Конечный результат.
                        `
            },
            {
                question: 'кто такой QA (Quality Assurance)',
                answer: ` специалист, который имеет спец знания для выполнения 
                        тестирования, четко понимает его процессы, умеет составлять 
                        документацию, проводить тестирование , а главное давать 
                        рекомендации по улучшению качества продукта и прогнозировать 
                        его поведение в разных условиях.`
            },
            {
                question: 'none',
                answer: ``
            },
            {
                question: 'none',
                answer: ``
            },
            {
                question: 'none',
                answer: ``
            }
        ]
        this.questionPlace = document.getElementsByClassName('question')[0];
        this.answerPlace = document.getElementsByClassName('answer')[0];
        this.amountQuestions = document.querySelector('.amount');
        this.nextButton = document.querySelector('.next-button');
        this.showAnswerButton = document.querySelector('.show-answer-button');

        this.getRandomQuestion(this.questions);
        this.countAmountQuestions();
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
    countAmountQuestions() {
        this.amountQuestions.innerHTML = `questions are: ${this.questions.length}`
    }
}

const myapp = new MyApp();