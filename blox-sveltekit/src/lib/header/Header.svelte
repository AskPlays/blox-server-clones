<script lang="ts">
	import { page } from '$app/stores';
import Button from './Button.svelte';
import DropdownButton from './DropdownButton.svelte';
</script>

<header>
	<DropdownButton title={"Play"}>
		<Button>Multiplayer</Button>
		<Button>Singleplayer</Button>
		<Button>Custom</Button>
		<Button>Opener</Button>
	</DropdownButton>
	<DropdownButton title={"Other"} className="block sm:hidden">
		<Button>Leaderboard</Button>
		<Button>Map Maker</Button>
		<Button>About</Button>
		<Button>Discord</Button>
	</DropdownButton>
	<Button className="hidden sm:block">Leaderboard</Button>
	<Button className="hidden sm:block">Map Maker</Button>
	<Button className="hidden sm:block">About</Button>
	<Button className="hidden sm:block">Discord</Button>
	<DropdownButton title={"Profile"}>
		<Button>Times</Button>
		<Button>Account</Button>
		<Button>Log out</Button>
	</DropdownButton>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		color: white;
		background-color: #95f;
		z-index: 4;
	}

	@media (min-width: 480px) {
		header {
			flex-direction: row;
			--scale: 1;
		}
	}
</style>
