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
        <span slot="title">01. first impression</span>
        <Notes>
            — Express estimation is very important for our business and and our customer, we provide first deadlines and budget .<br/>
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
        <Notes>
        </Notes>
    </Content>
    <Content>
        <h3>
            Business idea

            <span class="w-8 h-8 mb-4 inline-block">
                <Icon src={LightBulb} theme="outline" class="inline text-sky-500" />
            </span>
        </h3>
        <Notes>
            — The client is the user of the system who will bring money to your customer.<br/>
            — So you need to understand what problem the project solves for the client!<br/>
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
            — What are we doing?<br/>
            — For whom are we doing it?<br/>
            — What problem are we solving?<br/>
            — How exactly?<br/>
        </Notes>
    </Content>
    <Content>
        <h3>Who is the competitors?</h3>
        <p class="fragment">Are we better?</p>
        <Notes>
            — It happens that the customer does not study competitors.<br/>
            — And sometimes they don't even know about their existence.<br/>
        </Notes>
    </Content>
    <Content>
        <h3>Where's the Money, Lebowski? 👀</h3>
        <Notes>
            — Don't forget about the money.
            <p>
                Our project is a website for long-distance drivers that stores reviews of customers.<br/>
                A unique project with the support of the airwaves.<br/>
                The customer is a long-distance driver himself, plans to earn money on advertising.
            </p>
        </Notes>
    </Content>
    <Content>
        <h3>Any estimation</h3>
        <p class="fragment">Better than «nothing»</p>
        <Notes>
            — I don't know how long it will take.<br/>
            — I can't estimate it.<br/>

            — There shouldn't be any more of these answers.<br/>
            — Yes, I don't know if there are any radio stations that provide the ability to send messages to the air through an API.
            It will take me a week to search for such a solution. Based on my experience, integrating similar APIs does not take much time,
            so we are aiming for 40 hours of development.<br/>
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
            — Hypothesis is very powerful skill!
            — Our hypothesis is our foundation!
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
            — We need to calculate our hypotheses, decompose the worst moments.<br/>
            — If we need additional time for research, then discuss it!<br/>
            <br/>
            Our social network will have the following features:<br/>
            — a list of customers and reviews about them<br/>
            — a feed of messages from friends<br/>
            — users can share their location<br/>
            — users can ask for help<br/>
            <br/>
            We will have users and administrators<br/>
            We will have moderators for reviews<br/>
            <br/>
            Messages to the air will only be for important events.<br/>
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
            An express estimate is done in one cup of coffee.<br/>
            Of course, it may take much longer to study the materials,<br/>
            but for the hypothesis and estimate, it's just a matter of time.<br/>
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
            Sure, let's try to estimate familiar things in the metric system :)<br/>
            Start with what you know or can easily calculate.<br/>
            38 parrots and one wing - this cartoon is not about project evaluation, of course, but why not.<br/>
            But we are IT professionals, so let's remember the questions that are asked in interviews.<br/>
            - How many tennis balls does it take to fill a school bus?<br/>
            (for illustrative purposes, you can take a box and balls in advance)<br/>
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
            — An entity generates CRUD or/and REST API + and a little more business logic<br/>
            — Roles generate checks and rights division<br/>
            — Integration can take 10 minutes (Google Analytics) or months (Nigerian payment system)<br/>
            — Of course, for those who like microservices, you need to count their integrations<br/>
        </Notes>
    </Content>
    <Content>
        <p>
            How realistic is it <br/>to complete the "<strong>business idea</strong>" in <strong
                class="text-red-600">XX</strong> hours,<br/>
            which will cost the customer <strong class="text-red-600">$$</strong> money?
        </p>
        <Notes>
            If the result scares you, maybe you need to prepare a proposal that will fit the customer's budget?<br/>
            Or your imagination of his budget ¯\_(ツ)_/¯<br/>
            <br/>
            Project example:<br/>
            - The customer needs a blog where you can embed videos that can be edited before publishing.<br/>
            <br/>
            Option I:<br/>
            - It will be several thousand hours and about 500,000 conditional units.<br/>
            - For a company like Coca-Cola, this is possible.<br/>
            <br/>
            Option II:<br/>
            - It will be a Wordpress blog, we embed videos from YouTube, we also edit on YouTube,<br/>
            - it will cost $5,000 and in a week we can demonstrate the first version of the site.<br/>
            - For a company that rents an office of 20 square meters, this is a good hypothesis and estimate.<br/>
        </Notes>
    </Content>
    <Caption>
        — If you win a project, I wish you success;<br/>
        <span class="fragment">if not, let's go to next step</span>
    </Caption>
</section>