<script>
    import TitleSlide from '../../lib/slide/TitleSlide.svelte'
    import TwoSides from '../../lib/slide/TwoSides.svelte'
    import MainPoint from '../../lib/slide/MainPoint.svelte'
    import Notes from '../../lib/partial/Notes.svelte'
</script>
<TitleSlide>
    <span slot="title">Нескінченність не межа</span>
    <span slot="caption">або історія як ми робимо оцінки проєктів</span>
    <Notes>
        - Коли ми кажемо про оцінку проєктів, то маємо на увазі експертну оцінку.<br/>
    </Notes>
</TitleSlide>
<TwoSides>
    <span slot="title">Антон Шевчук</span>
    <div slot="caption">
        <ul class="text-left mr-16">
            <li class="whitespace-nowrap">у 2005 прийшов у web-розробку</li>
            <li class="whitespace-nowrap">з того часу зробив сотні оцінок</li>
            <li class="fragment whitespace-nowrap">не добре</li>
            <li class="fragment whitespace-nowrap">тай не погано</li>
        </ul>
    </div>
    <img class="rounded-full" src="https://avatars.githubusercontent.com/u/142057?v=4" alt="Anton Shevchuk"/>
</TwoSides>
<MainPoint>
    <span slot="title">Нам потрібна високоякісна оцінка 🥹</span>
    <span slot="caption">Але в нас не має на те часу 🤮</span>
    <Notes>
        — Точність оцінки зростає логарифмічно залежно від часу який витрачаємо на неї.<br/>
        — Час який потрібен для збільшення точності оцінювання зростає по експоненті.<br/>
    </Notes>
</MainPoint>
