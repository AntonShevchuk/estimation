<script>
    import Section from '../../lib/slide/Section.svelte'
    import Content from '../../lib/slide/Content.svelte'
    import Caption from '../../lib/slide/Caption.svelte'
    import Notes from '../../lib/partial/Notes.svelte';
    import { ArrowTrendingDown, ArrowTrendingUp, Pencil, PresentationChartLine } from '@steeze-ui/heroicons'
    import { Icon } from '@steeze-ui/svelte-icon'
</script>
<section>
    <Section>
        <span slot="title">Крок другий</span>
    </Section>
    <Content>
        <h2>Груба оцінка</h2>
    </Content>
    <Content>
        <h3>Ніхто не читає 200 сторінок чортової документації</h3>
        <Notes>
            — Ніхто не оперує текстом у своїй уяві.<br/>
            — 200 сторінок документації ніхто ніколи не читає (замовник не виключення).<br/>
            — Після того як усі сказала, що прочитали документацію, то кожний уявляє якийсь свій проєкт.<br/>
        </Notes>
    </Content>
    <Content>
        <h3>Образи</h3>
        <p>у моїй голові</p>
        <Notes>
            У людей різні типи сприйняття інформації:<br/>
            — візуальний — графічні ілюстрації, діаграми, схеми, фотографії і відео<br/>
            — аудіальний — їм треба почуту інформацію<br/>
            — кінестетичний — сприймають інформацію через дотик<br/>
            — логічний — їм потрібна логічно і систематично організована інформація<br/>
            Чи почули ви щось про текст?...<br/>
        </Notes>
    </Content>
    <Content>
        <h3>
            Нам потрібні макети
            <span class="w-8 h-8 mb-4 inline-block">
                <Icon src={Pencil} theme="outline" class="inline text-sky-500" />
            </span>
        </h3>
        <p class="fragment"><a href="https://www.invisionapp.com/">invision</a></p>
        <Notes>
            — Зараз я вам розповім навіщо вам оті брендовані блокноти.<br/>
            — Малюйте та робіть нотатки.<br/>
            — Просіть аналітиків робити те саме.<br/>
            — Намалюйте скріни до головних екранів.<br/>
            — Пропишіть основні флоу.<br/>

            За допомогою InVision ви взмозі поєднати ваші малюнки навігацією<br/>
        </Notes>
    </Content>
    <Content>
        <h3>
            Більше макетів
            <span class="w-8 h-8 mb-4 inline-block">
                <Icon src={PresentationChartLine} theme="outline" class="inline text-sky-500" />
            </span>
        </h3>
        <p class="fragment"><a href="https://diagrams.net">diagrams.net</a> (draw.io)</p>
        <Notes>
            Запам’ятайте diagrams.net (draw.io), це дійсно чудовий інструмент (безкоштовний)<br/>
        </Notes>
    </Content>
    <Content>
        <h3>Макети, макети, макети</h3>
        <ul>
            <li class="fragment"><a href="https://www.figma.com">Figma</a> - $15/місяць</li>
            <li class="fragment"><a href="https://www.figma.com/figjam/">FigJam</a> – $5/місяць</li>
            <li class="fragment"><a href="https://www.axure.com">Axure RP</a> - $29/місяць</li>
            <li class="fragment"><a href="https://balsamiq.cloud">Balsamiq Cloud</a> - $9/місяць</li>
            <li class="fragment"><a href="https://draftium.com">draftium</a> - $99/рік</li>
        </ul>
    </Content>
    <Content>
        <h3>Намалюй додаток</h3>
        <p class="fragment"> 👨‍🎓📱 📚 📝💰</p>
        <p class="fragment">👩‍🏫💻 📄 ☑️</p>
        <p class="fragment">👨‍💻💻 📈</p>
        <Notes>
            Малюйте, але все ж таки лише малюнками доброї документації не зробиш.<br/>
            — Пан Єрмак написав документацію.<br/>
            — Тож, що ми тут бачимо?<br/>
            — Бачу три ролі я, бачу ноутбук та мобільний додаток, кожен вигадає своє...<br/>
        </Notes>
    </Content>
    <Content>
        <h3>Мітинг з командою оцінку</h3>
        <p class="fragment">обмін знань</p>
        <Notes>
            Підготуйтесь до мітинга, не полінуйтесь намалювати декілька скринів (ви ж їх малювали?)<br/>
        </Notes>
    </Content>
    <Content>
        <h3>Фіче-лист</h3>
        <ul>
            <li>Функціональні вимоги</li>
            <li>Не-функціональні вимоги</li>
            <li>Додаткові активності</li>
            <li>Варіативність оцінок</li>
            <li>Ризики, краще з оцінкою</li>
        </ul>
        <Notes>
        </Notes>
    </Content>
    <Content>
        <h3>Перевір себе</h3>
    </Content>
    <Content>
        <h3>m/h</h3>
        <ul>
            <li>0.1 m/h<span class="fragment text-sky-500">&nbsp;— O_o</span></li>
            <li>0.5 .. 1 m/h<span class="fragment text-sky-500">&nbsp;— щось забули</span></li>
            <li>3 m/h<span class="fragment text-sky-500">&nbsp;— ви витратите 4 години ;)</span></li>
            <li>9 m/h<span class="fragment text-sky-500">&nbsp;— 8 години на таск, та ще 1 на ☕️ та 🚬</span></li>
        </ul>
        <h3 class="fragment mt-4">
            1, 2, 4, 8, 12, 16, 24, 32, 40 m/h
        </h3>
        <Notes>
            — Дотримуйтесь оцінок кратних дням<br/>
            — Якщо оцінка більша ніж 80 m/h, то треба декомпозувати її)<br/>
        </Notes>
    </Content>
    <Content>
        <h3>Чек-лист</h3>
        <h4><span class="text-sky-500 lowercase">на</span> Фічу</h4>
        <ul class="fragment text-left">
            <li>Вивчення специфікації</li>
            <li>Схвалення архітектури</li>
            <li>Реалізація (включаючи міграції, тести тощо)</li>
            <li>Smoke-тестування</li>
            <li>Виправлення помилок</li>
            <li>Review коду</li>
            <li>Merge</li>
            <li>Deploy</li>
        </ul>
    </Content>
    <Content>
        <h3>Чек-лист</h3>
        <h4><span class="text-sky-500 lowercase">на</span> Проєкт</h4>
        <ul class="fragment text-left">
            <li>Вивчення документації</li>
            <li>Вивчення існуючого коду (якщо він є)</li>
            <li>Розробка архітектури</li>
            <li>Розробка дизайну</li>
            <li>Налаштування робочого середовища</li>
            <li>Налаштування систем CI/CD</li>
            <li>Deployment</li>
            <li>Спілкування в команді</li>
            <li>Skill-up з необхідних технологій</li>
        </ul>
    </Content>
    <Content>
        <h3>Тік-так, вісім годин</h3>
        <div class="flex flex-row">
            <div class="basis-1/2 m-4">
                <h5>
                    <span class="w-8 h-8 mb-4 inline-block">
                        <Icon src={ArrowTrendingDown} theme="outline" class="inline text-sky-500" />
                    </span>
                    Маємо
                </h5>
                <ul class="text-left">
                    <li class="whitespace-nowrap">Бізнес ідею</li>
                    <li>Гіпотези</li>
                    <li>Документацію</li>
                    <li>Фіче-лист</li>
                </ul>
            </div>
            <div class="basis-1/2 m-4">
                <h5>
                    Результат
                    <span class="w-8 h-8 mb-4 inline-block">
                        <Icon src={ArrowTrendingUp} theme="outline" class="inline text-sky-500" />
                    </span>
                </h5>
                <ul class="text-left">
                    <li class="whitespace-nowrap">Оцінка всіх фіч</li>
                    <li class="whitespace-nowrap">Уточнюючи питання</li>
                    <li class="whitespace-nowrap">Ризики</li>
                    <li class="whitespace-nowrap">Оцінка ризиків</li>
                </ul>
            </div>
        </div>
    </Content>
    <Caption>
        — Це ще не все!
    </Caption>
</section>