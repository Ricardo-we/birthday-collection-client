<script>
	import { get } from 'svelte/store';
	import BirthDayCollectionService from '../../services/birthday-collection.service';
	import { userWritable } from '../../stores/user.store';
	import * as Card from '$lib/components/ui/card';
	import Menu from '../../components/menu.svelte';

	let user = get(userWritable);
	const birthdayCollectionService = new BirthDayCollectionService()?.getConfigByUser(user);
	const birthdayCollectionsPromise = birthdayCollectionService?.find({});
</script>

<main>
	
	{#await birthdayCollectionsPromise then birthdayCollections}
		<div class="flex flex-row items-center justify-center">
			{#each birthdayCollections as collection}
				<Card.Card>
					<Card.Header class="text-2xl">
						{collection.name}
					</Card.Header>
				</Card.Card>
			{/each}
		</div>
	{/await}
</main>

<style>
</style>
