<script>
	import BirthDayCollectionService from '../../../services/birthday-collection.service';
	import { page } from '$app/stores';
	import * as Card from '$lib/components/ui/card';
	import { Progress } from '$lib/components/ui/progress';
	import { formatDateMMDD, isFuture, isToday } from '../../../utils/date.utils';
	import { onMount } from 'svelte';
	import { Confetti } from 'svelte-confetti';
	import { useCharacterAsCursor } from '../../../utils/document.utils';

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
		<h2 class="text-4xl my-10 text-center font-semibold">Cumpleañeros de {birthday.name}</h2>
		<div class="flex flex-row gap-6 mx-auto items-center justify-center flex-wrap">
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
						<!-- svelte-ignore a11y-mouse-events-have-key-events -->
						<button
							on:click={showConfetti}
							class="text-center text-3xl shake-btn"
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

<style>
	@keyframes tilt-shaking {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(5deg);
		}
		50% {
			transform: rotate(0eg);
		}
		75% {
			transform: rotate(-5deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	.shake-btn{
		cursor: url('/confetti-cursor.png'), auto;
	}
	
	.shake-btn:hover {
		animation: tilt-shaking 0.5s infinite;
	}
</style>
