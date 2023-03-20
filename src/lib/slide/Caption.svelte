<script>
    import Slide from '../Slide.svelte'
</script>
<Slide>
    <h3 class="text-4xl text-gray-400 mt-60">
        <slot>
            <span class="missing">Unknown title</span>
        </slot>
    </h3>
</Slide>
