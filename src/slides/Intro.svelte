<script>
    import Notes from '../lib/Notes.svelte'

    import Title from '../lib/slide/Title.svelte'
    import MainPoint from '../lib/slide/MainPoint.svelte'
</script>
<Title>
    <span slot="title">To infinity and beyond</span>
    <span slot="caption">or story about how we do a estimation of projects</span>
    <Notes>
        – Here, when people talk about estimation, they almost always mean expert estimation.<br/>
        – We rarely encounter estimation for truly huge projects.
    </Notes>
</Title>
<MainPoint>
    <span slot="title">We need high-quality estimation 🥹</span>
    <span slot="caption">We don't have time for it 🤮</span>
    <Notes>
        – The accuracy of the estimate grows logarithmically depending on the effort.<br/>
        – The effort required to increase the accuracy of project estimation grows exponentially.
    </Notes>
</MainPoint>
