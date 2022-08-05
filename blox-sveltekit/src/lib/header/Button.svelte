<script lang="ts">
  export let className: string | undefined = '';
</script>

<a class={"block "+className} href="">
  <slot />
</a>

<style>
	a {
    /* display: block; */
		/* border-radius: 4px; */
		padding: 16px;
    background-color: #95f;
    cursor: pointer;
		text-decoration: none;
    /* transition 200ms */
    transition: background-color 0.2s linear;
	}
  a:hover {
    background-color: #b7f;
  }
</style>
