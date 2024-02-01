<script>
	import BirthDayCollectionService from '../../../services/birthday-collection.service';
	import { page } from '$app/stores';
	import * as Card from '$lib/components/ui/card';
	import { Progress } from '$lib/components/ui/progress';
	import { formatDateMMDD, isFuture, isToday } from '../../../utils/date.utils';
	import { onMount } from 'svelte';
	import { Confetti } from 'svelte-confetti';

	const birthdayCollectionService = new BirthDayCollectionService();
	const birthday = birthdayCollectionService.getCollectionByCode($page.params.code);
	let progressTimer = 0;
	let confettiActive = false;

	const showConfetti = () => {
		console.log('Confetti');
		confettiActive = true;
		setTimeout(() => {
			confettiActive = false;
		}, 5000);
	};

	onMount(() => {
		const timer = setInterval(() => {
			progressTimer += 10;
			if (progressTimer >= 100) clearInterval(timer);
		}, 120);
		return () => clearInterval(timer);
	});
</script>

{#if progressTimer < 100}
	<div class="flex flex-row items-center justify-center my-auto h-screen">
		<Progress value={progressTimer} max={75} class="w-1/2" />
	</div>
{/if}

{#if confettiActive}
	<div
		style="
 position: fixed;
 top: -50px;
 left: 0;
 height: 100vh;
 width: 100vw;
 display: flex;
 justify-content: center;
 overflow: hidden;
 pointer-events: none;"
	>
		<Confetti
			x={[-5, 5]}
			y={[0, 0.1]}
			delay={[200, 5000]}
			infinite
			duration={5000}
			amount={1000}
			fallDistance="100vh"
            size={15}
            rounded
		/>
	</div>
{/if}

{#await birthday then birthday}
	{#if progressTimer >= 100}
		<h2 class="text-4xl my-5 text-center">Cumpleañeros de {birthday.name}</h2>
		<div class="flex flex-row gap-3 mx-auto items-center justify-center">
			{#each birthday.birthDays as birthDay}
				<Card.Card>
					<Card.Header class="text-2xl">
						{#if isToday(birthDay.date)}
							¡Feliz Cumpleaños {birthDay.name}🎉🎂!
						{:else}
							{birthDay.name}
						{/if}
					</Card.Header>

					<Card.Content class="text-1xl">
						Fecha de cumpleaños {formatDateMMDD(birthDay.date)}
					</Card.Content>

					<Card.Footer>
						<button
							on:click={showConfetti}
							type="button"
							class="text-center text-3xl cursor-default"
						>
							{#if isFuture(birthDay.date)}
								🎂🎈🎉
							{:else}
								🍰🎊
							{/if}
						</button>
					</Card.Footer>
				</Card.Card>
			{/each}
		</div>
	{/if}
{:catch error}
	<h2>Error: {error.message}</h2>
{/await}
