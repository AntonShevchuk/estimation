<script>
    import Slide from '../Slide.svelte'
</script>
<Slide>
    <div class="flex flex-row">
        <div class="basis-1/2">
            <h3 class="text-4xl text-white mt-16">
                <slot name="title">
                    <span class="missing">Unknown title</span>
                </slot>
            </h3>
            {#if $$slots.caption}
                <div class="text-2xl text-gray-400">
                    <slot name="caption"></slot>
                </div>
            {/if}
        </div>
        <div class="basis-1/2">
            <slot/>
        </div>
    </div>
</Slide>
