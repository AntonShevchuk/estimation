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
        <span slot="title">02. step forward</span>
    </Section>
    <Content>
        <h2>Rough estimation</h2>
    </Content>
    <Content>
        <h3>Nobody read f**king docs in 200 pages</h3>
        <Notes>
            — Ніхто не оперує текстом у своїй уяві.<br/>
            — 200 сторінок документації ніхто ніколи не читає (замовник не виключення).<br/>
            — Після того як усі сказала, що прочитали документацію, то кожний уявляє якийсь свій проєкт.<br/>
        </Notes>
    </Content>
    <Content>
        <h3>Imagery</h3>
        <p>inside my mind</p>
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
            We need mockups
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
            More mockups
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
        <h3>Mockups, mockups, mockups</h3>
        <ul>
            <li class="fragment"><a href="https://www.figma.com">Figma</a> - $15/month</li>
            <li class="fragment"><a href="https://www.figma.com/figjam/">FigJam</a> – $5/month</li>
            <li class="fragment"><a href="https://www.axure.com">Axure RP</a> - $29/month</li>
            <li class="fragment"><a href="https://balsamiq.cloud">Balsamiq Cloud</a> - $9/month</li>
            <li class="fragment"><a href="https://draftium.com">draftium</a> - $99/year</li>
        </ul>
    </Content>
    <Content>
        <h3>Draw the application</h3>
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
        <h3>Meeting with estimation team</h3>
        <p class="fragment">knowledge sharing</p>
        <Notes>
            Підготуйтесь до мітінга, не полінуйтесь намалювати декілька скринів (ви ж їх малювали?)<br/>
        </Notes>
    </Content>
    <Content>
        <h3>Feature list</h3>
        <ul>
            <li>Functional requirements</li>
            <li>Non-functional requirements</li>
            <li>Additional activities</li>
            <li>Range of estimates - variability of implementation within our hypothesis</li>
            <li>All risks are identified and evaluated (separate tab)</li>
        </ul>
        <Notes>
            <p class="text-center text-xl bottom-4">
                <a href="https://qwiki.nixs.com/x/_ZVhBQ">NIX Wiki</a>
            </p>
        </Notes>
    </Content>
    <Content>
        <h3>Check yourself</h3>
    </Content>
    <Content>
        <h3>m/h</h3>
        <ul>
            <li>0.1 m/h<span class="fragment text-sky-500">&nbsp;— O_o</span></li>
            <li>0.5 .. 1 m/h<span class="fragment text-sky-500">&nbsp;— you are forgot something</span></li>
            <li>3 m/h<span class="fragment text-sky-500">&nbsp;— you will spend 4 m/h ;)</span></li>
            <li>9 m/h<span class="fragment text-sky-500">&nbsp;— 8 hours for task and 1 more for ☕️ and 🚬</span></li>
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
        <h3>Check list</h3>
        <h4><span class="text-sky-500 lowercase">for</span> Feature</h4>
        <ul class="fragment text-left">
            <li>Studying the specification</li>
            <li>Architecture approval</li>
            <li>Implementation (included migrations, tests, etc.)</li>
            <li>Smoke testing</li>
            <li>Bug fixing</li>
            <li>Code review</li>
            <li>Merge</li>
            <li>Deploy</li>
        </ul>
    </Content>
    <Content>
        <h3>Check list</h3>
        <h4><span class="text-sky-500 lowercase">for</span> Project</h4>
        <ul class="fragment text-left">
            <li>Studying documentation</li>
            <li>Studying existing code (if any)</li>
            <li>Architecture development</li>
            <li>Design development</li>
            <li>Setting up the working environment</li>
            <li>Setting up CI/CD systems</li>
            <li>Deployment</li>
            <li>Communication within the team</li>
            <li>Skill-up on necessary technologies</li>
        </ul>
    </Content>
    <Content>
        <h3>Tik-tak, eight hours</h3>
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
                    <li>Hypothesis</li>
                    <li>Documentation</li>
                    <li class="whitespace-nowrap">Feature list</li>
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
                    <li class="whitespace-nowrap">Estimation of all features</li>
                    <li class="whitespace-nowrap">Clarifying questions</li>
                    <li class="whitespace-nowrap">Visible risks</li>
                    <li class="whitespace-nowrap">Estimation of all risks</li>
                </ul>
            </div>
        </div>
    </Content>
    <Caption>
        — Not enough!
    </Caption>
</section>