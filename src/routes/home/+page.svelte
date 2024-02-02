<script>
	import { get } from 'svelte/store';
	import BirthDayCollectionService from '../../services/birthday-collection.service';
	import { userWritable } from '../../stores/user.store';
	import * as Card from '$lib/components/ui/card';
	import Menu from '../../components/menu.svelte';
	import BirthdayCollectionForm from './components/birthday-collection-form.svelte';
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import * as Icons from 'flowbite-svelte-icons';

	const user = get(userWritable);
	const birthdayCollectionService = new BirthDayCollectionService()?.getConfigByUser(user);
	let birthdayCollectionsPromise = birthdayCollectionService?.find({});

	const getBirthdays = () => {
		birthdayCollectionsPromise = birthdayCollectionService?.find({});
	};
</script>

<Menu>
	<BirthdayCollectionForm onSubmit={getBirthdays} />
</Menu>

<main>
	{#await birthdayCollectionsPromise then birthdayCollections}
		<div class="flex flex-row items-center justify-center flex-wrap gap-5 mt-5">
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			{#each birthdayCollections as collection}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<Card.Card
					class="w-80 cursor-pointer flex flex-col items-center justify-evenly bg-white rounded-lg p-5 hover:shadow-xl transition duration-300 ease-in-out"
					on:click={() => {
						goto(`/collection-detail/${collection.code}`);
					}}
				>
					<Card.Header class="text-2xl text-center break-words">
						{collection.name}
					</Card.Header>

					<Card.Footer class="gap-3">
						<Button
							on:click={(e) => {
								e.stopPropagation();
								console.log('hey');
							}}
							variant="destructive"
							size="icon"
						>
							<svg
								class="w-6 h-6 text-white dark:text-grey-700"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									fill-rule="evenodd"
									d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
									clip-rule="evenodd"
								/>
							</svg>
						</Button>
						<Button
							on:click={(e) => {
								e.stopPropagation();
								console.log('hey');
							}}
							variant="default"
							size="icon"
						>
							<svg
								class="w-6 h-6 text-white dark:text-grey-700"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									fill-rule="evenodd"
									d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z"
									clip-rule="evenodd"
								/>
								<path
									fill-rule="evenodd"
									d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z"
									clip-rule="evenodd"
								/>
							</svg>
						</Button>
					</Card.Footer>
				</Card.Card>
			{/each}
		</div>
	{/await}
</main>

<style>
</style>
