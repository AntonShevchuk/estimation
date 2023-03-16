<script>
    // Types of backgrounds
    export let type = 'main'
</script>

<div class="absolute inset-0 -z-10 bg-gradient-to-r from-black via-white to-black opacity-10 min-h-screen"></div>

{#if type === 'main'}
    <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-600 shadow-xl sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center opacity-10"></div>
{/if}
{#if type === 'section'}
    <div class="absolute inset-y-0 right-1/4 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-600 shadow-xl sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center opacity-10"></div>
    <div class="absolute inset-y-0 left-1/4 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-600 shadow-xl sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center opacity-10"></div>
{/if}
{#if type === 'content'}
    <div class="absolute inset-y-0 right-0 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-600 shadow-xl sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center opacity-10"></div>
    <div class="absolute inset-y-0 left-0 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-600 shadow-xl sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center opacity-10"></div>
{/if}
