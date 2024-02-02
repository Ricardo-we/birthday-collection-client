<script>
	import { goto } from '$app/navigation';
	import { buttonVariants } from '$lib/components/ui/button';
	import { Button } from '$lib/components/ui/button';
	import * as Menubar from '$lib/components/ui/menubar';
	import Menu from '../../../components/menu.svelte';
</script>

<Menu>
	<Button variant="ghost" on:click={() => goto('/home')}>
		My Collections
	</Button>
</Menu>
