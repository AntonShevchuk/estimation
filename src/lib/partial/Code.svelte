<script>
  export let trim
  export let noescape
  export let lineNumbers
  export let lineStartFrom
  export let language

  if (language) {
      language = 'language-' + language
  }
</script>
<pre>
		<code class={language}
              data-trim={trim} data-noescape={noescape} data-line-numbers={lineNumbers}
              data-ln-start-from={lineStartFrom}><slot/></code>
</pre>
