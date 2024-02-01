<script>
	import * as Menubar from '$lib/components/ui/menubar';
	import BirthdayCollectionForm from '../routes/home/components/birthday-collection-form.svelte';
	// export let menus = [];

	// Array<{ name: string; options: Array<{ name: string; command: Function }> }>
</script>

<Menubar.Root>
	<Menubar.Menu>
		<!-- {#each menus as menu}
            <Menubar.Trigger>{menu.name}</Menubar.Trigger>
            <Menubar.Content>
                {#each menu.options as option}
                    <Menubar.Item on:click={option.command}>{option.name}</Menubar.Item>
                {/each}
            </Menubar.Content>
        {/each} -->
        <BirthdayCollectionForm />
        
		<!-- <Menubar.Trigger>Nueva Colección</Menubar.Trigger> -->
		<!-- <Menubar.Content>
		</Menubar.Content> -->
	</Menubar.Menu>
</Menubar.Root>
