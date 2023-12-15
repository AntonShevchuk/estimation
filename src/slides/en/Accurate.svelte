<script>
    import Section from '../../lib/slide/Section.svelte'
    import Content from '../../lib/slide/Content.svelte'
    import Caption from '../../lib/slide/Caption.svelte'
    import TwoSides from '../../lib/slide/TwoSides.svelte'
    import Notes from '../../lib/partial/Notes.svelte'
    import Code from '../../lib/partial/Code.svelte'

    import {
        ArrowTrendingDown,
        ArrowTrendingUp,
    } from '@steeze-ui/heroicons'
    import { Icon } from '@steeze-ui/svelte-icon'

    import aws from '../../assets/aws.png'
    import azure from '../../assets/azure.png'
    import google from '../../assets/google.png'
    import nginx from '../../assets/nginx.png'
    import redis from '../../assets/redis.png'
    import kubernetes from '../../assets/kubernetes.png'

    import c4 from '../../assets/c4.png'
    import cloudcraft from '../../assets/cloudcraft.co.png'
    import diagrams from '../../assets/diagrams.net.png'
    import sequence from '../../assets/sequencediagram.org.png'
    import dbdiagram from '../../assets/dbdiagram.io.png'
    import apiary from '../../assets/apiary.io.png'

</script>
<section>
    <Section>
        <span slot="title">03. finish line</span>
        <Notes>
            – Let's finish these estimates
        </Notes>
    </Section>
    <Content>
        <h3>Accurate estimation</h3>

        <p class="text-center text-xl bottom-4">
            <a href="https://qwiki.nixs.com/x/MoMe">NIX Wiki</a>
        </p>

        <Notes>
            - Accurate estimation places increased demands on quality<br/>
            - You should aim for an error of no more than 15%<br/>
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
            — You need to do much more than just estimation.<br/>
        </Notes>
    </TwoSides>
    <TwoSides>
        <span slot="title">
            <a href="https://c4model.com/" title="C4 Model">C4 Model</a>
        </span>
        <div slot="caption">
            <ul>
                <li>Context</li>
                <li>Containers</li>
                <li>Components</li>
                <li>Code</li>
                <li class="text-stone-500 whitespace-nowrap">System Landscape diagram</li>
                <li class="text-stone-500 whitespace-nowrap">Dynamic diagram</li>
                <li class="text-stone-500 whitespace-nowrap">Deployment diagram</li>
            </ul>
        </div>
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
        <div slot="caption">
            <ul class="list-none mr-32">
                <li>✅ AWS</li>
                <li>✅ Azure</li>
                <li>✅ GCP</li>
                <li>✅ IBM</li>
                <li>✅ C4 Model</li>
            </ul>
        </div>
        <div>
            <img src="{diagrams}" alt="diagrams.net" />
        </div>
        <Notes>

        </Notes>
    </TwoSides>
    <TwoSides>
        <span slot="title">
            <a href="https://sequencediagram.org/" title="sequencediagram.org">Sequence Diagrams</a>
        </span>
        <Code slot="caption" language="" trim="" noescape="" lineNumbers="false" lineStartFrom="false">
title Sequance diagram

Alice-&gt;Bob: Request
Alice&lt;--Bob: Responce

note over Bob, Double click to edit text:
    Click Help menu for **instructions**

Bob-&gt;(3)Double click to edit text:
    non-instantaneous message
        </Code>
        <div>
            <img src="{sequence}" alt="sequencediagram.org" />
        </div>
        <Notes>

        </Notes>
    </TwoSides>
    <TwoSides>
        <span slot="title">
            <a href="https://dbdiagram.io/" title="dbdiagram.io">DB Diagrams</a>
        </span>
        <Code slot="caption" language="" trim="" noescape="" lineNumbers="false" lineStartFrom="false">
// user
Table user &lbrace;
    id int [pk, not null]
    email varchar [not null, unique]
    status user_status
    created timestamp
    updated timestamp
&rbrace;
// user statuses
Enum user_status &lbrace;
    pending
    active
    disabled
    removed
&rbrace;
Table acl_roles &lbrace;
    id int [pk, not null]
    name varchar(255) [not null]
&rbrace;
// ...
        </Code>
        <div>
            <img src="{dbdiagram}" alt="dbdiagram.io" />
        </div>
        <Notes>
            — Need more? — <a href="https://dbdocs.io/" title="dbdocs.io">dbdocs.io</a>!
        </Notes>
    </TwoSides>

    <TwoSides>
        <span slot="title">
            <a href="https://apiary.io" title="apiary.io">apiary.io</a>
        </span>
        <Code slot="caption" language="" trim="" noescape="" lineNumbers="false" lineStartFrom="false">
FORMAT: 1A
HOST: https://polls.apiblueprint.org/

# Example

Polls is a simple API allowing consumers to view polls and vote in them.

## Questions Collection [/questions]

### List All Questions [GET]

+ Response 200 (application/json)

[
    &lbrace;
        "question": "Favourite programming language?",
        "published_at": "2015-08-05T08:40:51.620Z",
        "choices": [
            &lbrace;
                "choice": "Swift",
                "votes": 2048
            &rbrace;, &lbrace;
                "choice": "Python",
                "votes": 1024
            &rbrace;, &lbrace;
                "choice": "Objective-C",
                "votes": 512
            &rbrace;, &lbrace;
                "choice": "Ruby",
                "votes": 256
            &rbrace;
        ]
    &rbrace;
]
        </Code>
        <div>
            <img src="{apiary}" alt="apiary.io" />
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
                    <li class="whitespace-nowrap">Draft of the Cloud</li>
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