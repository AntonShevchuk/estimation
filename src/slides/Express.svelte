<script>
    import Section from '../lib/slide/Section.svelte'
    import Content from '../lib/slide/Content.svelte'
    import Caption from '../lib/slide/Caption.svelte'

    import Notes from '../lib/partial/Notes.svelte'
    import Badge from '../lib/partial/Badge.svelte'

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
            — Експрес-оцінка проєкта надзвичайно важлива для бізнесу бо озвучує перші сподівання по сроках та бюджету.<br/>
            — Точність і оперативність оцінки можуть сприяти або руйнувати проєкт.<br/>
            — Тому для забезпечення успіху проєкту важливо мати надійний процес оцінки.<br/>
            〰️〰️〰️<br/><br/>
            — Express estimation of a project is a crucial factor for businesses as it represents the first "impression"
            for deadlines and budget.<br/>
            — The accuracy and promptness of an estimation can make or break a project, impacting both the budget and
            the overall success of the project.<br/>
            — Therefore, it is essential to have a reliable estimation process in place to ensure the project's success.<br/>
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
        <p class="text-center text-xl bottom-4">
            <a href="https://qwiki.nixs.com/x/Y3QzBQ">NIX Wiki</a>
        </p>
    </Content>
    <Content>
        <h3>
            Business idea

            <span class="w-8 h-8 mb-4 inline-block">
                <Icon src={LightBulb} theme="outline" class="inline text-sky-500" />
            </span>
        </h3>
        <Notes>
            — Клієнт — це користувач системи, який буде приносити гроші вашому замовнику.<br/>
            — Тож ви повинні розуміти яку саме проблему вирішує проєкт для клієнта!
        </Notes>
    </Content>
    <Content>
        <p class="leading-relaxed">
            <Badge>Product name</Badge> is a <Badge>Product category</Badge> for <Badge>Target market</Badge>
            that <Badge>Core benefit</Badge> by <Badge>Unique differentiator</Badge>
        </p>
        <p class="fragment leading-relaxed">
            〰️〰️〰️<br/>
            <Badge>Google</Badge> is a <Badge>search engine</Badge> for <Badge>everyone who uses the internet</Badge>
            that <Badge>helps people quickly find relevant information</Badge>
            by <Badge>having the best algorithms that deliver the fasters and relevant results</Badge>
        </p>
        <Notes>
            – Що робимо?<br/>
            — Для кого робимо?<br/>
            — Яку проблему вирішуємо?<br/>
            — Як саме?<br/>
        </Notes>
    </Content>
    <Content>
        <h3>Who is the competitor?</h3>
        <p class="fragment">Are we better?</p>
        <Notes>
            — Буває, що замовник не вивчає конкурентів.<br/>
            — А інколи навіть не знає про їх існування.<br/>
        </Notes>
    </Content>
    <Content>
        <h3>Where's the Money, Lebowski? 👀</h3>
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
        <h3>Any estimation</h3>
        <p class="fragment">Better than «nothing»</p>
        <Notes>
            — Я не знаю скільке треба часу на це, я не можу дати оцінку на це.<br/>
            — Таких відповідей не повинно більше бути<br/>
            — Так, я не знаю чи інснують радіостанції, які за API дають можливість відправляти повідомлення до етеру,<br/>
            мені для пошуків такого рішення потрібен тиждень. За моїм досвідом, інтеграція подібних API<br/>
            не займає багато часу, тож орієнтуємось на 40 годин розробки.
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
            Повідовлення до етеру будуть лише за важливих подій.
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
                    <li>Requirements<span class="text-red-600">*</span></li>
                    <li class="whitespace-nowrap">Customer info</li>
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
            Експрес оцінка робиться за одну філіжанку кави.<br/>
            Звісно, для вивчення матеріалів може знадобитись набагато більше часу, <br/>
            а ось для гіпотези та оцінки саме стіки часу
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
            Давайте спробуємо давати оцінки для звичних речей у метричній системі :)<br/>
            Почніть з того, що ви знаєте, або можете легко вирахувати.<br/>
            38-мь папуг та одне крильце — цей мультик звісно не про оцінку проєктів, але чому б і ні.<br/>
            Але ж ми, того, айтівці, тож давайте згадаємо запитання які бувають на співбесідах.<br/>
            — Скільки тенісних м’ячиків треба щоб заповнити шкільний автобус?<br/>
            (для наглядності, можна взяти коробку та м’ячики заздалегіть)
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
            — Сутність, породжує CRUD або/та REST API + та ще трошки бізнес логіки<br/>
            — Ролі породжують перевірки та поділ прав<br/>
            — Інтеграція може займати 10 хвилин (Google Analytics) або місяці (платіжна система Нігерії)<br/>
            — Звісно, для тих хто полюбляє мікросервіси, вам потрібно порахувати їхні інтеграції
        </Notes>
    </Content>
    <Content>
        <p>
            How realistic is it <br/>to complete the "<strong>business idea</strong>" in <strong
                class="text-red-600">XX</strong> hours,<br/>
            which will cost the customer <strong class="text-red-600">$$</strong> money?
        </p>
        <Notes>
            Якщо результат вас «лякає», то можливо треба підготувати пропозал, який буде відповідати бюджету замовника?<br/>
            Чи вашій уяві про його бюджет ¯\_(ツ)_/¯<br/>
            <br/>
            Приклад проєкта:<br/>
            — Замовнику потрібен блог, де можна вбудовувати відео, яке перед публікацією можна редагувати.<br/>
            <br/>
            Варіант I:<br/>
            — Це буде декілька тисяч часів і десь 500 тисяч умовних одиніц.<br/>
            — Для компанії рівня Coca-Cola це можливо.<br/>
            <br/>
            Варіант II:<br/>
            — Це буде блог на Wordpress, вбудовуємо відео з YouTube, редагуємо також на YouTube,<br/>
            це буде коштувати $5000 і за тиждень ми зможемо продемоснтрувати першу версію сайту.<br/>
            — Для компанії яка винаймає офіс в 20м² це гарна гіпотеза та оцінка.
        </Notes>
    </Content>
    <Caption>
        — If you win a project, I wish you success;<br/>
        <span class="fragment">if not, let's go to next step</span>
    </Caption>
</section>