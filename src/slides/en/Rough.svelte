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

        <p class="text-center text-xl bottom-4">
            <a href="https://qwiki.nixs.com/x/AYMe">NIX Wiki</a>
        </p>

        <Notes>

        </Notes>
    </Content>
    <Content>
        <h3>Nobody read f**king docs in 200 pages</h3>
        <Notes>
            — Nobody operates with text in their imagination.<br/>
            — Nobody ever reads 200 pages of documentation (the customer is no exception).<br/>
            — After everyone says they have read the documentation, everyone imagines their own project.<br/>
        </Notes>
    </Content>
    <Content>
        <h3>Imagery</h3>
        <p>inside my mind</p>
        <Notes>
            People have different types of information perception:<br/>
            — visual - graphic illustrations, diagrams, schemes, photographs and videos;<br/>
            — auditory - they need heard information;<br/>
            — kinesthetic - they perceive information through touch;<br/>
            — logical - they need logically and systematically organized information;<br/>
            Have you heard anything about text?<br/>
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
            — I'll tell you why you need those branded notebooks.<br/>
            — Draw and take notes.<br/>
            — Ask analysts to do the same.<br/>
            — Draw screenshots of the main screens.<br/>
            — Write down the main flows.<br/>
            
            With InVision, you can combine your drawings with navigation.<br/>
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
            Remember diagrams.net (draw.io), it's a really great tool (free).<br/>
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
            Draw, but still, you can't make good documentation with just drawings.<br/>
            — A artist wrote the documentation.<br/>
            — So, what do we see here?<br/>
            — I see three roles, I see a laptop and a mobile app, everyone will come up with their own...<br/>
        </Notes>
    </Content>
    <Content>
        <h3>Meeting with estimation team</h3>
        <p class="fragment">knowledge sharing</p>
        <Notes>
            Prepare for the meeting, do not be lazy to draw a few screenshots (you did draw them, right?)<br/>
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
        <p class="text-center text-xl bottom-4">
            <a href="https://qwiki.nixs.com/x/_ZVhBQ">NIX Wiki</a>
        </p>
        <Notes>

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
            - Follow the estimates in multiples of days<br/>
            - If the estimate is greater than 80 hours, then you need to decompose it<br/>
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