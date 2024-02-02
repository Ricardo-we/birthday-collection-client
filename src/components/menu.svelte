<script>
	import * as Menubar from '$lib/components/ui/menubar';
	import BirthdayCollectionForm from '../routes/home/components/birthday-collection-form.svelte';
	// export let menus = [];

	// Array<{ name: string; options: Array<{ name: string; command: Function }> }>
</script>

<Menubar.Root>
	<Menubar.Menu>
      <slot/>
	</Menubar.Menu>
</Menubar.Root>
