<script>
    import Slide from '../Slide.svelte'
    import { Sparkles } from '@steeze-ui/heroicons'
    import { Icon } from '@steeze-ui/svelte-icon'
</script>
<Slide>
    <div class="absolute inset-0 -z-10 bg-gradient-to-r from-black via-white to-black opacity-20"></div>
    <h1>
        <slot name="title">
            <span class="missing">Unknown title</span>
        </slot>
    </h1>
    <p class="text-center"><span class="inline-block"><Icon src={Sparkles} size="24px" theme="solid" /></span></p>
    <p class="fragment">
        <slot name="caption"></slot>
    </p>
    <slot/>
</Slide>
