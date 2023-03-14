<script>
    import Slide from '../Slide.svelte'
</script>
<Slide>
    <div class="absolute inset-0 -z-10 bg-gradient-to-r from-black via-white to-black opacity-20"></div>
    <p>
        <slot name="title">
            <span class="missing">Unknown title</span>
        </slot>
    </p>
    <p class="fragment">
        <slot name="caption"></slot>
    </p>
    <slot/>
</Slide>
