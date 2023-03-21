<script>
    import Section from '../lib/slide/Section.svelte'
    import Caption from '../lib/slide/Caption.svelte'
    import Content from '../lib/slide/Content.svelte'

    import Notes from '../lib/partial/Notes.svelte';
</script>
<section>
    <Section>
        <span slot="title">04. extra time</span>
        <Notes>
            – Оценка, которая затянулась
        </Notes>
    </Section>
    <Content>
        <h3>Discovery</h3>
    </Content>
    <Content>
        <h3>Decomposition</h3>
    </Content>
    <Caption>
        — Last?<br/>
        <span class="fragment"> — Yep</span>
    </Caption>
</section>