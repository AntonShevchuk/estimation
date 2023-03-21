<script>
    export let username = 'anton@shevchuk';
</script>
<div class="w-1/2 mx-auto">
    <div class="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
        <div class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black">
            <div class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3">
            </div>
            <div class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3">
            </div>
            <div class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3">
            </div>
            <div class="mx-auto pr-16">
                <p class="text-center text-sm">Terminal</p>
            </div>
        </div>
        <div class="pl-1 pt-1 h-auto font-mono text-xs text-left bg-black">
            <p class="pb-1 m-0 text-gray-400">Last login: Wed Feb 23 09:11:04 on ttys002</p>
            <p class="pb-1 m-0 text-yellow-400">{username}$ <span class="text-green-500"><slot/></span></p>
        </div>
    </div>
</div>