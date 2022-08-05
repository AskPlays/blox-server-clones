<script lang="ts">
import Button from "./Button.svelte";

  export let className: string = "";
  export let title: string = "";
</script>

<div class={"group "+className}>
  <Button>{title}</Button>
  <div class="list">
    <slot />
  </div>
</div>

<style>
  .group {
    position: relative;
  }
	.list {
    position: absolute;
    top: 100%;
		display: none;
    z-index: 3;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
	}
  .list :global(a) {
    background-color: rgb(56, 31, 94);
  }
  .list :global(a):hover {
    background-color: #b7f;
  }
  .group:hover .list {
    display: block;
  }
</style>
