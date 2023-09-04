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
        – Here, when people talk about estimation, they almost always mean expert estimation.<br/>
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
</TwoSides>
<MainPoint>
    <span slot="title">We need high-quality estimation 🥹</span>
    <span slot="caption">We don't have time for it 🤮</span>
    <Notes>
        – The accuracy of the estimate grows logarithmically depending on the effort.<br/>
        – The effort required to increase the accuracy of project estimation grows exponentially.<br/>
    </Notes>
</MainPoint>
