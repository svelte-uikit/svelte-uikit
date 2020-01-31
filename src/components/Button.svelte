<script>
  export let mode = 'default';
  export let style;
</script>

<button class="uk-button uk-button-{mode}" on:click {style}>
  <slot>CANCEL</slot>
</button>
