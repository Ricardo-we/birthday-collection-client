<script>
	import { get } from 'svelte/store';
	import BirthDayCollectionService from '../../services/birthday-collection.service';
	import { userWritable } from '../../stores/user.store';
	import * as Card from '$lib/components/ui/card';
	import Menu from '../../components/menu.svelte';
	import BirthdayCollectionForm from './components/birthday-collection-form.svelte';

	let user = get(userWritable);
	const birthdayCollectionService = new BirthDayCollectionService()?.getConfigByUser(user);
	let birthdayCollectionsPromise = birthdayCollectionService?.find({});

	const getBirthdays = () => {
		birthdayCollectionsPromise = birthdayCollectionService?.find({});
	}
</script>

<Menu>
	<BirthdayCollectionForm onSubmit={getBirthdays} />
</Menu>

<main>
	{#await birthdayCollectionsPromise then birthdayCollections}
		<div class="flex flex-row items-center justify-center gap-5 mt-5">
			{#each birthdayCollections as collection}
				<Card.Card class="w-80">
					<Card.Header class="text-2xl">
						{collection.name}
					</Card.Header>
				</Card.Card>
			{/each}
		</div>
	{/await}
</main>