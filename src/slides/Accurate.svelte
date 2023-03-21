<script>
    import Section from '../lib/slide/Section.svelte'
    import Content from '../lib/slide/Content.svelte'
    import Caption from '../lib/slide/Caption.svelte'
    import TwoSides from '../lib/slide/TwoSides.svelte'
    import Notes from '../lib/partial/Notes.svelte'
    import {
        ArrowTrendingDown,
        ArrowTrendingUp,
    } from '@steeze-ui/heroicons'
    import { Icon } from '@steeze-ui/svelte-icon'

    import aws from '../assets/aws.png'
    import azure from '../assets/azure.png'
    import google from '../assets/google.png'
    import nginx from '../assets/nginx.png'
    import redis from '../assets/redis.png'
    import kubernetes from '../assets/kubernetes.png'

    import c4 from '../assets/c4.png'
    import cloudcraft from '../assets/cloudcraft.co.png'
    import diagrams from '../assets/diagrams.net.png'

</script>
<section>
    <Section>
        <span slot="title">03. finish line</span>
        <Notes>
            – Финишная прямая, и мы закончим оценку
        </Notes>
    </Section>
    <Content>
        <h3>Accurate estimation</h3>
        <Notes>
            — Не всё так просто, точная оценка предъявляет повышенные требования к качеству<br/>
            — Вы должны стремится к погрешности не более 15%
        </Notes>
    </Content>
    <TwoSides>
        <span slot="title">Architecture</span>
        <div class="fragment">
            <img class="h-[8rem] absolute top-1/4 left-48" src="{aws}" alt="AWS"/>
            <img class="h-[6rem] absolute top-1/4 right-32" src="{azure}" alt="Azure"/>
            <img class="h-[8rem] absolute bottom-48 left-2/3" src="{google}" alt="Google"/>
            <img class="h-[6rem] opacity-60 absolute bottom-1/4 left-64" src="{redis}" alt="Redis"/>
            <img class="h-[8rem] opacity-60 absolute top-6 left-1/3" src="{nginx}" alt="NGinx"/>
            <img class="h-[6rem] opacity-60 absolute bottom-32 left-1/2" src="{kubernetes}" alt="Kubernetes"/>
        </div>
        <Notes>
            — Вам нужно сделать куда как больше чем просто оценку
        </Notes>
    </TwoSides>
    <TwoSides>
        <span slot="title">
            <a href="https://c4model.com/" title="C4 Model">C4 Model</a>
        </span>
        <span slot="caption">
            <ul>
                <li>Context</li>
                <li>Containers</li>
                <li>Components</li>
                <li>Code</li>
                <li class="text-stone-500 whitespace-nowrap">System Landscape diagram</li>
                <li class="text-stone-500 whitespace-nowrap">Dynamic diagram</li>
                <li class="text-stone-500 whitespace-nowrap">Deployment diagram</li>
            </ul>
        </span>
        <div>
            <img src="{c4}" alt="C4 Model" />
        </div>
        <Notes>

        </Notes>
    </TwoSides>
    <TwoSides>
        <span slot="title">
            <a href="https://cloudcraft.co" title="cloudcraft.co">cloudcraft.co</a>
        </span>
        <span slot="caption">
            <img class="h-[4rem] inline-block" src="{aws}" alt="AWS"/>
            <img class="h-[3rem] inline-block" src="{azure}" alt="Azure"/>
        </span>
        <div>
            <img src="{cloudcraft}" alt="cloudcraft.co" />
        </div>
        <Notes>

        </Notes>
    </TwoSides>
    <TwoSides>
        <span slot="title">
            <a href="https://diagrams.net" title="diagrams.net">diagrams.net</a>
        </span>
        <span slot="caption">
            <ul class="list-none mr-16">
                <li>✅ AWS</li>
                <li>✅ Azure</li>
                <li>✅ GCP</li>
                <li>✅ IBM</li>
                <li>✅ C4 Model</li>
            </ul>
        </span>
        <div>
            <img src="{diagrams}" alt="diagrams.net" />
        </div>
        <Notes>

        </Notes>
    </TwoSides>
    <Content>
        <h3>Check yourself</h3>
    </Content>
    <Content>
        <h3>To infinity and 40 hours more</h3>
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
                    <li>Mockups</li>
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
                    <li class="whitespace-nowrap">Evaluation of all features</li>
                    <li class="whitespace-nowrap">High level architecture</li>
                    <li class="whitespace-nowrap">Draft of the DB structure</li>
                    <li class="whitespace-nowrap">Draft of the API</li>
                </ul>
            </div>
        </div>
    </Content>
    <Caption>
        — It was last step?<br/>
        <span class="fragment"> — Nope...</span>
    </Caption>
</section>