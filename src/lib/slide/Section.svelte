<script>
    import Slide from '../Slide.svelte'
</script>
<Slide background="section">
    <h3>
        <slot name="title">
            <span class="missing">Unknown title</span>
        </slot>
    </h3>
    {#if $$slots.caption}
        <p class="fragment">
            <slot name="caption"></slot>
        </p>
    {/if}
    <slot/>
</Slide>
