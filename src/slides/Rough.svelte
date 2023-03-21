<script>
    import Section from '../lib/slide/Section.svelte'
    import Content from '../lib/slide/Content.svelte'
    import Caption from '../lib/slide/Caption.svelte'
    import Notes from '../lib/partial/Notes.svelte';
    import { ArrowTrendingDown, ArrowTrendingUp, Pencil, PresentationChartLine } from '@steeze-ui/heroicons'
    import { Icon } from '@steeze-ui/svelte-icon'
</script>
<section>
    <Section>
        <span slot="title">02. step forward</span>
        <Notes>
            – Шаг навстречу
        </Notes>
    </Section>
    <Content>
        <h2>Rough estimation</h2>
    </Content>
    <Content>
        <h3>Nobody read f**king docs in 200 pages</h3>
        <Notes>
            — Никто не оперирует текстом.<br/>
            — 200 страниц е**ой документации никто не читает (включая заказчика).<br/>
            — После прочтения у всех возникает своё представление о проекте.<br/>
        </Notes>
    </Content>
    <Content>
        <h3>Imagery</h3>
        <p>inside my mind</p>
        <Notes>
            Различные типы восприятия:<br/>
            - визуалы - образы, картинки, видеоряд<br/>
            - аудиал - общение, диалоги, лекции, интонации<br/>
            - кинестет - движение, ощущения<br/>
            - дискретный - логика взаимодействия, схемы, планы (он же дигитал)<br/>
            Никто не воспринимает текст как есть...
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
            — Сейчас я объясню зачем вам нужны наши брендированные блокнотики — Рисуйте и делайте заметки!<br/>
            — Можно попросить аналитика или сейла накидать скрины.<br/>
            — Желательно делать скрины на мейн флоу и основные части интерфейса.<br/>

            InVision позволяет объединить фотки как элементы интерфейса
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
            — Давайте разгадаем ребус.<br/>
            — Тут есть роли, сущности, устройства, каждый придумает своё...<br/>
            — Пан Єрмак писал документацию.
        </Notes>
    </Content>
    <Content>
        <h3>Meeting with estimation team</h3>
        <p class="fragment">knowledge sharing</p>
        <Notes>
            Приходите на этот митинг подготовленным, не поленитесь нарисовать пару скринов (вы же их рисовали?)
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
            — Не нужно дробных частей
            — Старайтесь придерживаться оценки в днях
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