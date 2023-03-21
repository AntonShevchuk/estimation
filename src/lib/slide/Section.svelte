<script>
    import Slide from '../Slide.svelte'
</script>
<Slide background="section">
    <h3 class="lowercase font-mono">
        <slot name="title">
            <span class="missing">Unknown section title</span>
        </slot>
    </h3>
    {#if $$slots.caption}
        <p class="fragment lowercase font-mono">
            <slot name="caption"></slot>
        </p>
    {/if}
    <slot/>
</Slide>
