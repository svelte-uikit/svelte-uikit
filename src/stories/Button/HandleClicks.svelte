<script>
  import { Button } from 'svelte-uikit';

  let count = 0;
  let handleClick = () => count++;
</script>

<Button on:click={handleClick}>Count: {count}</Button>
