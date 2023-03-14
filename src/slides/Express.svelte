<script>
  import Notes from '../lib/Notes.svelte';
</script>

<section>
    <section>
        <h2>Express Estimation</h2>
    </section>
    <section>
        <h3>Business idea</h3>
        <Notes>
            Клиент — это пользователь системы, который и будет приносить деньги вашему заказчику
            Вы должны понимать, какую проблему решает проект для клиента!
        </Notes>
    </section>
    <section>
        <p class="">Our product is <span>…</span> for <span>…</span>.</p>
        <p class="fragment">It helps to solve the <span>…</span> problem.</p>
        <p class="fragment">Our competitive advantage is <span>…</span></p>
        <p class="fragment">The customer earns money from <span>…</span></p>
        <Notes>
            Наш продукт это сайт для студентов и учителей.
            Помогает организовать удалённое обучение.
            Мы единственные на рынке Нигерии.
            Заказчик зарабатывает на проценте от стоимости курсов.

            Наш продукт это сайт для дальнобойщиков.
            Дальнобойщикам сложно найти тематические площадки для общения с отзывами про заказчиков.
            Поддержка радиоэфира.
            Заказчик сам дальнобойщик, планирует получать деньги за рекламу на сайте.
        </Notes>
    </section>
    <section>
        <h3>Any estimation</h3>
        <p class="fragment">Better than «nothing»</p>
        <Notes>
            — Я не знаю сколько это займёт времени, это невозможно оценить — такие ответы должны остаться в
            прошлом!
            — Да, я не знаю существует ли радиостанции, которые предоставляют API для отправки сообщений
            в эфир, для поиска такого решения нам потребуется неделя рабочего времени, если такая система есть,
            то интеграция подобного API не должна занять больше 40 часов разработки.
        </Notes>
    </section>
    <section>
        <h3>Hypothesis</h3>
        <Notes>
            Our hypothesis is our foundation!
        </Notes>
    </section>
    <section>
        <h3>Estimation based on the Hypothesis</h3>
        <ul>
            <li class="fragment">We give an estimate for our hypothesis</li>
            <li class="fragment">We break down "complex" things into simple components</li>
            <li class="fragment">We identify points that require additional research</li>
            <li class="fragment">We describe the risks that we see at this stage</li>
            <li class="fragment">If possible, we can voice two or more hypotheses</li>
        </ul>
        <p class="fragment">
            We strive to describe our hypothesis in detail, separately addressing risks and integration points.
        </p>
        <Notes>
            Надо провести «неточные» вычисления вашей гипотезы, декомпозировать самые «страшные» моменты,
            возможно стоит провести исследования для уточнения данных. Всё это мы должны озвучить!

            Наша социальная сеть будет иметь следующие фичи:
            — некое подобие ленты сообщений друзей
            — в ленте можно шарить своё положение и просить помощи
            — мессенджер на сайте, с поддержкой общения только тет-а-тет
            — список заказчиков, и отзывы о них

            У нас будет администратор и админка
            У нас будет модератор и модерирование отзывов

            Сообщения в радиоэфир будут отправляться по ургентным событиям.
        </Notes>
    </section>
    <section>
        <h3>Estimation step-by-step</h3>
        <ul>
            <li class="fragment">What is the area of the room?</li>
            <li class="fragment">What is the height of the building?</li>
            <li class="fragment">How many steps are on the staircase?</li>
        </ul>
        <Notes>
            Проводим декомпозицию до знакомых и осязаемых сущностей.
            38-мь попугаев и одно попугайское крылышко это тоже хороший пример оценки исходя из доступных
            инструментов.
            Вспомнить про собеседование в гугл и задачу про теннисные мячики и автобус
            (можно взять коробку и мячики для настольного тенниса для наглядной демонстрации)
        </Notes>
    </section>
    <section>
        <h3>Express estimation</h3>
    </section>
    <section>
        <h3>E<span style="color: red">spresso</span> estimation</h3>
        <div class="r-hstack justify-around items-start">
            <div class="fragment items-start">
                <h5>Input</h5>
                <ul>
                    <li>Business idea</li>
                    <li>Customer info</li>
                    <li>Requirements<span style="color: red">*</span></li>
                </ul>
                <p style="color:grey; font-size: x-large">* all what you have</p>
            </div>
            <div class="fragment items-start">
                <h5>Output</h5>
                <ul>
                    <li>Hypothesis<span style="color: red">*</span></li>
                    <li>Rough estimation</li>
                    <li>Questions</li>
                    <li>Risks</li>
                </ul>
                <p style="color:grey; font-size: x-large">* included technology stack</p>
            </div>
        </div>
        <Notes>
            Экспресс может занимать и больше времени, но мы хотим стремиться к идеалу!
        </Notes>
    </section>
    <section>
        <h3>Check yourself</h3>
    </section>
    <section>
        <h3>Estimation cheatsheet</h3>
        <div class="r-hstack justify-around items-start">
            <div>
                <table style="font-size: x-large">
                    <tr>
                        <td>too easy</td>
                        <td>1 m/h</td>
                    </tr>
                    <tr>
                        <td>easy</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>for breakfast</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>and one coffee</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>I know how</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>and one more ☕</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>and energy drink</td>
                        <td>16</td>
                    </tr>
                    <tr>
                        <td>looks complicated</td>
                        <td>24</td>
                    </tr>
                    <tr>
                        <td>really hard</td>
                        <td>32</td>
                    </tr>
                    <tr>
                        <td>too hard</td>
                        <td>40</td>
                    </tr>
                </table>
            </div>
            <div>
                <table style="font-size: x-large">
                    <tr>
                        <td>double hard</td>
                        <td align="right">80</td>
                    </tr>
                    <tr>
                        <td>f..king hard</td>
                        <td align="right">160</td>
                    </tr>
                    <tr>
                        <td>looks easy</td>
                        <td align="right">200</td>
                    </tr>
                    <tr>
                        <td>don’t know how</td>
                        <td align="right">320</td>
                    </tr>
                    <tr>
                        <td>I know guy, who knows how</td>
                        <td align="right">…</td>
                    </tr>
                </table>
            </div>
        </div>
        <Notes>
            <a href="https://twitter.com/sevaorlasvegas/status/1153635852997865473">source of this joke</a>
        </Notes>
    </section>
    <section>
        <h3>(
            <strong style="color: red">∑</strong><span style="font-size: xx-large">role</span> +
            <strong style="color: red">∑</strong><span style="font-size: xx-large">entity</span> +
            <strong style="color: red">∑</strong><span style="font-size: xx-large">integration</span>
            ) * 40 m/h</h3>
        <p class="fragment">development only</p>
        <Notes>
            Сущность, порождающая CRUD + REST API + чуть-чуть бизнес логики
            Роль, порождает проверку и разделение прав
            Интеграция может занимать от 10 минут (Google Analytics) и до овер-дофига (платёжка Нигерии)
        </Notes>
    </section>
    <section>
        <p>
            How realistic is it <br/>to complete the "<strong>business idea</strong>" in <strong style="color: red; font-size: xxx-large">XX</strong> hours,<br/>
            which will cost the customer <strong style="color: red; font-size: xxx-large">$$</strong> money?
        </p>
        <Notes>
            Если нас «пугает» результат, возможно стоит предложить заказчику решение под его бюджет (или наше представление о его бюджете).

            Пример проекта:
            — Заказчик хочет блог компании с возможностью встраивать видео, которое он предварительно редактирует на сайте.

            Вариант I:
            — Это будет стоить для заказчика тысячи часов и $500 тысяч — для компании уровня Coca-Cola это приемлемо.

            Вариант II:
            — Это будет блог на Wordpress, встраивать будем видео с YouTube, редактирование оставляем на YouTube,
            за это надо будет заплатить $5000 и мы сделаем за неделю — для компании которая арендует офис в 20м² это приемлемо.
        </Notes>
    </section>
</section>