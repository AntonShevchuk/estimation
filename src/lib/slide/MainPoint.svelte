<script>
    import Slide from '../Slide.svelte'
</script>
<Slide>
    <h2>
        <slot name="title">
            <span class="missing">Unknown title</span>
        </slot>
    </h2>
    {#if $$slots.caption}
        <p class="fragment">
            <slot name="caption"></slot>
        </p>
    {/if}
    <slot/>
</Slide>
