<script>
    import Section from '../lib/slide/Section.svelte'
    import Content from '../lib/slide/Content.svelte'
    import Caption from '../lib/slide/Caption.svelte'
    import Notes from '../lib/partial/Notes.svelte'
    import {
        ArrowTrendingDown,
        ArrowTrendingUp,
        ArrowUturnLeft,
        ChatBubbleLeftEllipsis,
        LightBulb,
        User
    } from '@steeze-ui/heroicons'
    import { Icon } from '@steeze-ui/svelte-icon'
</script>

<section>
    <Section>
        <span slot="title">01. first impression</span>
        <Notes>
            — Express estimation of a project is a crucial factor for businesses as it represents the first impression
            for deadlines.<br/>
            — The accuracy and promptness of an estimation can make or break a project, impacting both the budget and
            the overall success of the project. <br/>
            — Therefore, it is essential to have a reliable estimation process in place to ensure the project's success.
        </Notes>
    </Section>
    <Content>
        <h2>Express Estimation</h2>
        <div class="fragment border border-blue-300 shadow rounded-md p-3 max-w-sm w-full mx-auto bg-white">
            <div class="flex space-x-4">
                <div class="rounded-full bg-sky-400 h-10 w-10">
                    <Icon src={User} size="24px" theme="solid" class="m-1 w-8 h-8 text-white"/>
                </div>
                <div class="flex-1 space-y-6 py-1 text-sm text-left text-black">
                    👋 Hey there! <br/>
                    We have a new project coming up and we're in need of your expertise for an estimation.<br/>
                    <button class="text-sky-500 hover:text-sky-500 align-middle h-6">
                        Reply
                        <Icon src={ArrowUturnLeft} size="24px" theme="solid" class="w-3 h-3 inline"/>
                    </button>
                </div>
            </div>
        </div>
    </Content>
    <Content>
        <h3>
            Business idea

            <span class="w-8 h-8 mb-4 inline-block">
                <Icon src={LightBulb} theme="outline" class="inline text-sky-500" />
            </span>
        </h3>
        <Notes>
            — Клиент — это пользователь системы, который и будет приносить деньги вашему заказчику<br/>
            — Вы должны понимать, какую проблему решает проект для клиента!
        </Notes>
    </Content>
    <Content>
        <p class="">Our product is <span class="text-sky-500 text-xl">...</span> for <span
                class="text-sky-500 text-xl">...</span>.</p>
        <p class="fragment">It helps to solve the <span class="text-sky-500 text-xl">...</span> problem.</p>
        <p class="fragment">Our competitive advantage is <span class="text-sky-500 text-xl">...</span></p>
        <p class="fragment">The customer earns money from <span class="text-sky-500 text-xl">...</span></p>
        <Notes>
            <p>
                Наш продукт это сайт для студентов и учителей.<br/>
                Помогает организовать удалённое обучение.<br/>
                Мы единственные на рынке Нигерии.<br/>
                Заказчик зарабатывает на проценте от стоимости курсов.
            </p>

            <p>
                Наш продукт это сайт для дальнобойщиков.<br/>
                Дальнобойщикам сложно найти тематические площадки для общения с отзывами про заказчиков.<br/>
                Поддержка радиоэфира.<br/>
                Заказчик сам дальнобойщик, планирует получать деньги за рекламу на сайте.
            </p>
        </Notes>
    </Content>
    <Content>
        <h3>Any estimation</h3>
        <p class="fragment">Better than «nothing»</p>
        <Notes>
            — Я не знаю сколько это займёт времени, это невозможно оценить — такие ответы должны остаться в
            прошлом!<br/>
            — Да, я не знаю существует ли радиостанции, которые предоставляют API для отправки сообщений<br/>
            в эфир, для поиска такого решения нам потребуется неделя рабочего времени, если такая система есть,<br/>
            то интеграция подобного API не должна занять больше 40 часов разработки.
        </Notes>
    </Content>
    <Content>
        <h3>
            Hypothesis
            <span class="w-8 h-8 mb-4 inline-block">
                <Icon src={ChatBubbleLeftEllipsis} theme="outline" class="inline text-sky-500" />
            </span>
        </h3>
        <Notes>
            Our hypothesis is our foundation!
        </Notes>
    </Content>
    <Content>
        <h3>Estimation based on the Hypothesis</h3>
        <ul>
            <li class="fragment">Strive to describe hypothesis in detail</li>
            <li class="fragment">Provide an estimate for our hypothesis</li>
            <li class="fragment">Break down "complex" into simple components</li>
            <li class="fragment">Identify integration points</li>
            <li class="fragment">Identify points requiring additional research</li>
            <li class="fragment">Describe the risks that we see</li>
            <li class="fragment">Provide two or more hypotheses if possible</li>
        </ul>
        <Notes>
            Надо провести «неточные» вычисления вашей гипотезы, декомпозировать самые «страшные» моменты,<br/>
            возможно стоит провести исследования для уточнения данных. Всё это мы должны озвучить!<br/>
            <br/>
            Наша социальная сеть будет иметь следующие фичи:<br/>
            — некое подобие ленты сообщений друзей<br/>
            — в ленте можно шарить своё положение и просить помощи<br/>
            — мессенджер на сайте, с поддержкой общения только тет-а-тет<br/>
            — список заказчиков, и отзывы о них<br/>
            <br/>
            У нас будет администратор и админка<br/>
            У нас будет модератор и модерирование отзывов<br/>
            <br/>
            Сообщения в радиоэфир будут отправляться по ургентным событиям.
        </Notes>
    </Content>
    <Content>
        <h3>Express estimation</h3>
    </Content>
    <Content>
        <h3>E<span class="text-red-600">spresso</span> estimation</h3>
        <div class="flex flex-row">
            <div class="basis-1/2 m-4">
                <h5>
                    <span class="w-8 h-8 mb-4 inline-block">
                        <Icon src={ArrowTrendingDown} theme="outline" class="inline text-sky-500" />
                    </span>
                    Input
                </h5>
                <ul class="text-left">
                    <li class="whitespace-nowrap">Business idea</li>
                    <li class="whitespace-nowrap">Customer info</li>
                    <li>Requirements<span class="text-red-600">*</span></li>
                </ul>
            </div>
            <div class="basis-1/2 m-4">
                <h5>
                    Output
                    <span class="w-8 h-8 mb-4 inline-block">
                        <Icon src={ArrowTrendingUp} theme="outline" class="inline text-sky-500" />
                    </span>
                </h5>
                <ul class="text-left">
                    <li>Hypothesis<span class="text-red-600">*</span></li>
                    <li class="whitespace-nowrap">Estimation for hypothesis</li>
                    <li>Questions</li>
                    <li>Risks</li>
                </ul>
            </div>
        </div>
        <div class="flex flex-row">
            <div class="basis-1/2 m-4">
                <p class="text-gray-500 text-xl">* all what you have</p>
            </div>
            <div class="basis-1/2 m-4">
                <p class="text-gray-500 text-xl">* included technology stack</p>
            </div>
        </div>
        <Notes>
            Экспресс может занимать и больше времени, но мы хотим стремиться к идеалу!
        </Notes>
    </Content>
    <Content>
        <h3>Estimation step-by-step</h3>
        <ul>
            <li class="fragment">What is the area of the room?</li>
            <li class="fragment">What is the height of the building?</li>
            <li class="fragment">How many steps are on the staircase?</li>
        </ul>
        <Notes>
            Проводим декомпозицию до знакомых и осязаемых сущностей.<br/>
            38-мь попугаев и одно попугайское крылышко это тоже хороший пример оценки исходя из доступных<br/>
            инструментов.<br/>
            Вспомнить про собеседование в гугл и задачу про теннисные мячики и автобус<br/>
            (можно взять коробку и мячики для настольного тенниса для наглядной демонстрации)
        </Notes>
    </Content>
    <Content>
        <h3>Check yourself</h3>
    </Content>
    <Content>
        <h3>Estimation cheatsheet</h3>
        <div class="r-hstack justify-around items-start">
            <div>
                <table class="text-lg table-auto">
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
                <table class="text-lg table-auto">
                    <tr>
                        <td>double hard</td>
                        <td class="text-right">80</td>
                    </tr>
                    <tr>
                        <td>f..king hard</td>
                        <td class="text-right">160</td>
                    </tr>
                    <tr>
                        <td>looks easy</td>
                        <td class="text-right">200</td>
                    </tr>
                    <tr>
                        <td>don’t know how</td>
                        <td class="text-right">320</td>
                    </tr>
                    <tr>
                        <td>I know guy, who knows how</td>
                        <td class="text-right">…</td>
                    </tr>
                </table>
            </div>
        </div>
        <Notes>
            <a href="https://twitter.com/sevaorlasvegas/status/1153635852997865473">source of this joke</a>
        </Notes>
    </Content>
    <Content>
        <h3>(
            <strong class="text-red-600">∑</strong><span class="text-xl">role</span> +
            <strong class="text-red-600">∑</strong><span class="text-xl">entity</span> +
            <strong class="text-red-600">∑</strong><span class="text-xl">integration</span>
            ) * 40 m/h</h3>
        <p class="fragment text-gray-500">development only</p>
        <Notes>
            Сущность, порождающая CRUD + REST API + чуть-чуть бизнес логики<br/>
            Роль, порождает проверку и разделение прав<br/>
            Интеграция может занимать от 10 минут (Google Analytics) и до овер-дофига (платёжка Нигерии)
        </Notes>
    </Content>
    <Content>
        <p>
            How realistic is it <br/>to complete the "<strong>business idea</strong>" in <strong
                class="text-red-600">XX</strong> hours,<br/>
            which will cost the customer <strong class="text-red-600">$$</strong> money?
        </p>
        <Notes>
            Если нас «пугает» результат, возможно стоит предложить заказчику решение под его бюджет (или наше
            представление о его бюджете).<br/>
            <br/>
            Пример проекта:<br/>
            — Заказчик хочет блог компании с возможностью встраивать видео, которое он предварительно редактирует на
            сайте.<br/>
            <br/>
            Вариант I:<br/>
            — Это будет стоить для заказчика тысячи часов и $500 тысяч — для компании уровня Coca-Cola это
            приемлемо.<br/>
            <br/>
            Вариант II:<br/>
            — Это будет блог на Wordpress, встраивать будем видео с YouTube, редактирование оставляем на YouTube,<br/>
            за это надо будет заплатить $5000 и мы сделаем за неделю — для компании которая арендует офис в 20м² это
            приемлемо.
        </Notes>
    </Content>
    <Caption>
        — If you win a project, I wish you success;<br/>
        <span class="fragment">if not, let's go to next step</span>
    </Caption>
</section>