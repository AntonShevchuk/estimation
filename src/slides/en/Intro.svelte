<script>
    import TitleSlide from '../../lib/slide/TitleSlide.svelte'
    import TwoSides from '../../lib/slide/TwoSides.svelte'
    import MainPoint from '../../lib/slide/MainPoint.svelte'
    import Notes from '../../lib/partial/Notes.svelte'
</script>
<TitleSlide>
    <span slot="title">To infinity and beyond</span>
    <span slot="caption">or story about how we do a estimation of projects</span>
    <Notes>
        – Hi everyone, glad to see you here. Today we will discuss estimation.<br/>
        – When we talk about estimation, we almost always mean expert estimation.<br/>
    </Notes>
</TitleSlide>
<TwoSides>
    <span slot="title">Anton Shevchuk</span>
    <div slot="caption">
        <ul class="text-left mr-16">
            <li class="whitespace-nowrap">from 2005 in web development</li>
            <li class="whitespace-nowrap">hundreds of estimations behind me</li>
            <li class="fragment whitespace-nowrap">not great</li>
            <li class="fragment whitespace-nowrap">not terrible</li>
        </ul>
    </div>
    <img class="rounded-full" src="https://avatars.githubusercontent.com/u/142057?v=4" alt="Anton Shevchuk"/>
    <Notes>
        – Let me introduce myself.<br/>
        – Am I an expert or not? I hope yes :)<br/>
        – What do we need? What does the business need?<br/>
    </Notes>
</TwoSides>
<MainPoint>
    <span slot="title">We need high-quality estimation 🥹</span>
    <span slot="caption">We don't have time for it 🤮</span>
    <Notes>
        – We have several steps in the estimation process.<br/>
        – We have a very detailed description of every step of the estimation, but it doesn't translate to English,
        and I'm sorry, this task doesn't have high priority.<br/>

        – The accuracy of the estimate grows logarithmically depending on the effort.<br/>
        – The effort required to increase the accuracy of project estimation grows exponentially.<br/>
    </Notes>
</MainPoint>
