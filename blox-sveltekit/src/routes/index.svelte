<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Button from '$lib/Button.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="section">
	<div class="modes">
		<h1>Modes</h1>
		<div class="mode-list">
			<Button>Default</Button>
			<Button>40 Lines</Button>
			<Button>Hyper</Button>
			<Button>Digger</Button>
		</div>
		<div>
			Singleplayer Tools
			<input type="number" value="0" min="0" max="10000"/>
		</div>
		<div>
			Stats
			<p>
				time: 10.001<br/>
				pps: 3.4<br/>
				apm: 35.6<br/>
				lines: 4
			</p>
		</div>
	</div>
	<div class="main">
		<div class="left-game">
			<div class="hold">hold</div>
			<div>Settings</div>
		</div>
		<div class="game">
			<div class="canvas">
				game
			</div>
		</div>
		<div class="game-right">
			<div class="queue">
				queue
			</div>
		</div>
	</div>
	<div class="aside">
		Opponents
	</div>
	<div class="chat">
		<h2>Chat</h2>
		<div>blah blah</div>
		<input placeholder="type chat here"/>
	</div>
</div>

<style>
	.section {
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		/* align-items: center; */
		flex: 1;
		flex-wrap: wrap;
		--scale: 0.5;
	}

	.modes {
		display: flex;
		flex-direction: column;
		margin: 0px 4px;
		padding: 4px 0px;
		order: 1;
	}

	.modes div {
		padding: 16px;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		background-color: var(--card-color);
		margin-bottom: 4px;
	}

	.mode-list {
		display: flex;
		flex-direction: column;
		padding: 8px !important;
	}

	.main {
		padding: 16px;
		display: flex;
		justify-content: center;
		order:0;
	}

	.hold {
		margin-top: 2px;
		width: calc(128px * var(--scale));
		height: calc(128px * var(--scale));
		/* border: 2px solid; */
	}

	.canvas {
		width: calc(320px * var(--scale));
		height: calc(640px * var(--scale));
		border: 2px solid;
	}

	.queue {
		margin-top: 2px;
		margin-left: calc(32px * var(--scale));
		width: calc(128px * var(--scale));
		height: calc(320px * var(--scale));
		/* border: 2px solid; */
	}

	.aside {
		flex-grow: 1;
		margin: 4px;
		order: 3;
	}

	.chat {
		position: static;
		margin: 4px;
		right: 8px;
		bottom: 8px;
		padding: 8px;
		border-radius: 8px;
		background-color: var(--card-color);
		order: 4;
	}

	h1 {
		margin: 8px 0px;
	}

	@media (min-width: 640px) {
		.section {
			flex-direction: row;
			--scale: 1;
		}
		.chat {
			position: sticky;
		}
		.main {
			order:2;
		}
	}
</style>
