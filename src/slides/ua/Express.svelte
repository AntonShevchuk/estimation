<script>
  import Section from '../../lib/slide/Section.svelte'
  import Content from '../../lib/slide/Content.svelte'
  import Caption from '../../lib/slide/Caption.svelte'

  import Notes from '../../lib/partial/Notes.svelte'
  import Badge from '../../lib/partial/Badge.svelte'

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
        <span slot="title">Крок перший</span>
        <Notes>
            — Перша оцінка проєкта надзвичайно важлива для бізнесу бо озвучує перші сподівання по сроках та
            бюджету.<br/>
            — Точність і оперативність оцінки можуть сприяти або зруйнувати проєкт.<br/>
            — Тому для забезпечення успіху проєкту важливо мати надійний процес оцінки.<br/>
        </Notes>
    </Section>
    <Content>
        <h2>Експрес-оцінка</h2>
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
        <Notes>
        </Notes>
    </Content>
    <Content>
        <h3>
            Бізнес ідея

            <span class="w-8 h-8 mb-4 inline-block">
                <Icon src={LightBulb} theme="outline" class="inline text-sky-500"/>
            </span>
        </h3>
        <Notes>
            — Клієнт — це користувач системи, який буде приносити гроші вашому замовнику.<br/>
            — Тож ви повинні розуміти яку саме проблему вирішує проєкт для клієнта!<br/>
        </Notes>
    </Content>
    <Content>
        <p class="leading-relaxed">
            <Badge>Наш продукт</Badge>
            з
            <Badge>певної категорії</Badge>
            для
            <Badge>окремої аудиторії</Badge>
            ,
            який
            <Badge>вирішує якусь проблему</Badge>
            у
            <Badge>свій унікальний спосіб</Badge>
        </p>
        <p class="fragment leading-relaxed">
            〰️〰️〰️<br/>
            <Badge>Google</Badge>
            це
            <Badge>пошукова система</Badge>
            для
            <Badge>кожної людині в світі</Badge>
            яка
            <Badge>допомагає людям швидко знайти релевантну інформацію</Badge>
            за допомогою
            <Badge>унікальних алгоритмів пошуку</Badge>
        </p>
        <Notes>
            — Що робимо?<br/>
            — Для кого робимо?<br/>
            — Яку проблему вирішуємо?<br/>
            — Як саме?<br/>
        </Notes>
    </Content>
    <Content>
        <h3>Хто є конкурентом?</h3>
        <p class="fragment">А ми краще?</p>
        <Notes>
            — Буває, що замовник не вивчає конкурентів.<br/>
            — А інколи навіть не знає про їх існування.<br/>
        </Notes>
    </Content>
    <Content>
        <h3>Де гроші, Лебовські? 👀</h3>
        <Notes>
            — Не забувайте про гроші.
            <p>
                Наш проєкт, це сайт для далекобійників,<br/>
                який зберігає відгуки про замовників.<br/>
                Унікальний проєкт з підтримкою радіоетеру.<br/>
                Замовник сам далекобійник, планує заробляти на рекламі.
            </p>
        </Notes>
    </Content>
    <Content>
        <h3>Хоч яка оцінка</h3>
        <p class="fragment">Краще ніж «ніяка»</p>
        <Notes>
            — Я не знаю скільки треба часу на це, я не можу дати оцінку на це.<br/>
            — Таких відповідей не повинно більше бути<br/>
            — Так, я не знаю чи існують радіостанції, які за API дають можливість відправляти повідомлення до
            етеру,<br/>
            мені для пошуків такого рішення потрібен тиждень. За моїм досвідом, інтеграція подібних API<br/>
            не займає багато часу, тож орієнтуємось на 40 годин розробки.<br/>
        </Notes>
    </Content>
    <Content>
        <h3>
            Гіпотези
            <span class="w-8 h-8 mb-4 inline-block">
                <Icon src={ChatBubbleLeftEllipsis} theme="outline" class="inline text-sky-500"/>
            </span>
        </h3>
        <Notes>
            Наші гіпотези, це наш фундамент!
        </Notes>
    </Content>
    <Content>
        <h3>Оцінка базується на гіпотезах</h3>
        <ul>
            <li class="fragment">Прагніть детально описати гіпотезу</li>
            <li class="fragment">Надайте оцінку нашої гіпотези</li>
            <li class="fragment">Розбийте "складне" на прості компоненти</li>
            <li class="fragment">Визначте точки інтеграції</li>
            <li class="fragment">Визначте точки, які потребують додаткового дослідження</li>
            <li class="fragment">Опишіть ризики, які ми бачимо</li>
            <li class="fragment">Якщо можливо, наведіть дві або більше гіпотез</li>
        </ul>
        <Notes>
            Нам потрібно прорахувати наші гіпотези, декомпозувати найжахливіші моменти.<br/>
            Якщо нам потрібен додатковий час для досліджень, то проговоріть це!<br/>
            <br/>
            Наша соціальна мережа буде мати наступні фічі:<br/>
            — перелік замовників та відгуки про них<br/>
            — стрічка повідомлень від друзів<br/>
            — користувачі можуть ділитися своєю локацію<br/>
            — користувачі можуть просити про допомогу<br/>
            <br/>
            У нас будуть користувачі та адміністратор<br/>
            У нас будуть модератори для відгуків<br/>
            <br/>
            Повідомлення до етеру будуть лише за важливих подій.<br/>
        </Notes>
    </Content>
    <Content>
        <h3>Експрес-оцінка</h3>
    </Content>
    <Content>
        <h3>Е<span class="text-red-600">к</span>спресо</h3>
        <div class="flex flex-row">
            <div class="basis-1/2 m-4">
                <h5>
                    <span class="w-8 h-8 mb-4 inline-block">
                        <Icon src={ArrowTrendingDown} theme="outline" class="inline text-sky-500"/>
                    </span>
                    Маємо
                </h5>
                <ul class="text-left">
                    <li class="whitespace-nowrap">Бізнес ідею</li>
                    <li class="whitespace-nowrap">Вимоги<span class="text-red-600">*</span></li>
                    <li class="whitespace-nowrap">Інформацію<br/>про замовника<span class="text-red-600">*</span></li>
                </ul>
            </div>
            <div class="basis-1/2 m-4">
                <h5>
                    Результат
                    <span class="w-8 h-8 mb-4 inline-block">
                        <Icon src={ArrowTrendingUp} theme="outline" class="inline text-sky-500"/>
                    </span>
                </h5>
                <ul class="text-left">
                    <li class="whitespace-nowrap">Наша гіпотеза<span class="text-red-600">*</span></li>
                    <li class="whitespace-nowrap">Оцінка гіпотези</li>
                    <li>Питання</li>
                    <li>Ризики</li>
                </ul>
            </div>
        </div>
        <div class="flex flex-row">
            <div class="basis-1/2 m-4">
                <p class="text-gray-500 text-xl">* все що є</p>
            </div>
            <div class="basis-1/2 m-4">
                <p class="text-gray-500 text-xl">* включаючи наш стек</p>
            </div>
        </div>
        <Notes>
            Експрес оцінка робиться за одну філіжанку кави.<br/>
            Звісно, для вивчення матеріалів може знадобитись набагато більше часу, <br/>
            а ось для гіпотези та оцінки саме стіки часу<br/>
        </Notes>
    </Content>
    <Content>
        <h3>Оцінка крок за кроком</h3>
        <ul>
            <li class="fragment">Яка площа приміщення?</li>
            <li class="fragment">Яка висота багатоповерхового будинку?</li>
            <li class="fragment">Скільки сходів з п'ятого поверху до першого?</li>
        </ul>
        <Notes>
            Давайте спробуємо давати оцінки для звичних речей у метричній системі :)<br/>
            Почніть з того, що ви знаєте, або можете легко вирахувати.<br/>
            38-мь папуг та одне крильце — цей мультик звісно не про оцінку проєктів, але чому б і ні.<br/>
            Але ж ми, того, айтівці, тож давайте згадаємо запитання які бувають на співбесідах.<br/>
            — Скільки тенісних м'ячиків треба щоб заповнити шкільний автобус?<br/>
            (для наглядності, можна взяти коробку та м'ячики заздалегідь)<br/>
        </Notes>
    </Content>
    <Content>
        <h3>Перевір себе</h3>
    </Content>
    <Content>
        <h3>Шпаргалка</h3>
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
                </table>
            </div>
            <div class="ml-2 mr-2 pl-2 pr-2 border-l-2 border-r-2 border-gray-700">
                <table class="text-lg table-auto">
                    <tr>
                        <td>and one more ☕</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>and an energy drink</td>
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
            адоптація <a href="https://twitter.com/sevaorlasvegas/status/1153635852997865473">жарту з твітеру</a>
        </Notes>
    </Content>
    <Content>
        <h3>(
            <strong class="text-red-600">∑</strong><span class="text-xl">role</span> +
            <strong class="text-red-600">∑</strong><span class="text-xl">entity</span> +
            <strong class="text-red-600">∑</strong><span class="text-xl">integration</span>
            ) * 40 m/h</h3>
        <p class="fragment text-gray-500">це лише розробка</p>
        <Notes>
            — Сутність, породжує CRUD або/та REST API + та ще трошки бізнес логіки<br/>
            — Ролі породжують перевірки та поділ прав<br/>
            — Інтеграція може займати 10 хвилин (Google Analytics) або місяці (платіжна система Нігерії)<br/>
            — Звісно, для тих хто полюбляє мікросервіси, вам потрібно порахувати їхні інтеграції<br/>
        </Notes>
    </Content>
    <Content>
        <p>
            Наскільки реалістично <br/>
            зробити "<strong>бізнес ідею</strong>" за <strong class="text-red-600">XX</strong> годин,<br/>
            яка буде коштувати замовнику <strong class="text-red-600">$$</strong> грошей?
        </p>
        <Notes>
            Якщо результат вас «лякає», то можливо треба підготувати пропозал, який буде відповідати бюджету
            замовника?<br/>
            Чи вашій уяві про його бюджет ¯\_(ツ)_/¯<br/>
            <br/>
            Приклад проєкта:<br/>
            — Замовнику потрібен блог, де можна вбудовувати відео, яке перед публікацією можна редагувати.<br/>
            <br/>
            Варіант I:<br/>
            — Це буде декілька тисяч часів і десь 500 тисяч умовних одиниць.<br/>
            — Для компанії рівня Coca-Cola це можливо.<br/>
            <br/>
            Варіант II:<br/>
            — Це буде блог на Wordpress, вбудовуємо відео з YouTube, редагуємо також на YouTube,<br/>
            це буде коштувати $5000 і за тиждень ми зможемо продемонструвати першу версію сайту.<br/>
            — Для компанії яка винаймає офіс в 20м² це гарна гіпотеза та оцінка.<br/>
        </Notes>
    </Content>
    <Caption>
        — Якщо цього вистачило, і ви отримали проєкт, то мої вам вітання,<br/>
        <span class="fragment">якщо ні, то давайте далі</span>
    </Caption>
</section>