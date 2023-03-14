<script>
  import Notes from '../lib/Notes.svelte';
  import invision from '../assets/invision.png';
  import drawio from '../assets/drawio.png';
</script>

<section>
    <section>
        <h2>Rough estimation</h2>
    </section>
    <section>
        <h3>Nobody read f**king docs in 200 pages</h3>
        <Notes>
            Никто не оперирует текстом.
            200 страниц е**ой документации никто не читает (включая заказчика).
            После прочтения у всех возникает своё представление о проекте.
        </Notes>
    </section>
    <section>
        <h3>Imagery</h3>
        <p>inside my mind</p>
        <Notes>
            Различные типы восприятия:
            - визуалы - образы, картинки, видеоряд
            - аудиал - общение, диалоги, лекции, интонации
            - кинестет - движение, ощущения
            - дискретный - логика взаимодействия, схемы, планы (он же дигитал)
            Никто не воспринимает текст как есть...
        </Notes>
    </section>
    <section>
        <h3>Draw the application</h3>
        <p class="fragment"> 👨‍🎓📱 📚 📝💰</p>
        <p class="fragment">👩‍🏫💻 📄 ☑️</p>
        <p class="fragment">👨‍💻💻 📈</p>
        <Notes>
            Пан Єрмак писал документацию.
            Давайте разгадаем ребус.
            Тут есть роли, сущности, устройства, каждый придумает своё...
        </Notes>
    </section>
    <section>
        <h3>We need mockups</h3>
        <img class="fragment" src="{invision}" width="640" alt="InVisionApp">
        <p class="fragment"><a href="https://www.invisionapp.com/">invision</a></p>
        <Notes>
            Сейчас я объясню зачем вам нужны наши брендированные блокнотики — Рисуйте и делайте заметки!
            Можно попросить аналитика или сейла накидать скрины.
            Желательно делать скрины на мейн флоу и основные части интерфейса.

            InVision позволяет объединить фотки как элементы интерфейса
        </Notes>
    </section>
    <section>
        <h3>
            More mockups
        </h3>
        <img class="fragment" src="{drawio}" width="640" alt="draw.io">
        <p class="fragment"><a href="https://draw.io">draw.io</a></p>
    </section>
    <section>
        <h3>Mockups, mockups, mockups</h3>
        <ul>
            <li><a href="https://www.figma.com">Figma</a> - $15/month</li>
            <li><a href="https://www.figma.com/figjam/">FigJam</a> – $5/month</li>
            <li><a href="https://www.axure.com">Axure RP</a> - $29/month</li>
            <li><a href="https://balsamiq.cloud">Balsamiq Cloud</a> - $9/month</li>
            <li><a href="https://draftium.com">draftium</a> - $99/year</li>
        </ul>
    </section>
    <section>
        <h3>Meeting with esimation team</h3>
        <p class="fragment">knowledge sharing</p>
        <Notes>
            Приходите на этот митинг подготовленным, не поленитесь нарисовать пару скринов (вы же их рисовали?)
        </Notes>
    </section>
    <section>
        <h3>Check yourself</h3>
    </section>
    <section>
        <h3>Feature list</h3>
        <ul>
            <li>Functional requirements</li>
            <li>Non-functional requirements</li>
            <li>Additional activities</li>
            <li>Range of estimates - variability of implementation within our hypothesis</li>
            <li>All risks are identified and evaluated (separate tab)</li>
        </ul>
    </section>
    <section>
        <h3>Check list</h3>
        <div class="r-hstack justify-around items-start">
            <div class="fragment items-start">
                <h5>Feature</h5>
                <ul style="font-size: x-large">
                    <li>Studying the specification</li>
                    <li>Architecture approval</li>
                    <li>Implementation of functionality (migrations, tests, etc.)</li>
                    <li>Smoke testing</li>
                    <li>Bug fixing</li>
                    <li>Code review</li>
                    <li>Merge</li>
                    <li>Deploy</li>
                </ul>
            </div>

            <div class="fragment items-start">
                <h5>Project</h5>
                <ul style="font-size: x-large">
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
            </div>
        </div>
    </section>
    <section>
        <h3>Tik-tak, eight hours</h3>
        <div class="r-hstack justify-around items-start">
            <div class="fragment items-start">
                <h5>Input</h5>
                <ul>
                    <li>Business idea</li>
                    <li>Hypothesis</li>
                    <li>Documentation</li>
                    <li>Feature list</li>
                </ul>
            </div>

            <div class="fragment items-start">
                <h5>Output</h5>
                <ul>
                    <li>Evaluation of all features</li>
                    <li>Clarifying questions</li>
                    <li>Visible risks</li>
                </ul>
            </div>
        </div>
    </section>
    <section>
        <h3>Who should check you?</h3>
    </section>
</section>