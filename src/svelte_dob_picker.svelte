<script>
	import { months, leapDate, years } from "./calendar.js";
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();
	export let selectedDOB = new Date(); //Javascript Date Format
	export let height = "40px"; //Height of each box in px,rem
	export let borderRadius = "5px"; //Border Radius of each box
	export let borderColor = "gray"; //Border Color of each box
	export let textColor = "black"; //Text Color
	export let borderWidth = "2px"; //Border width of each box
	export let bgColor = "white"; //Background Color of the box
	let selectedDayArray = [];

	const checkFebruaryDays = () => {
		const dayList = leapDate(selectedDOB.getFullYear());
		selectedDayArray = dayList[selectedDOB.getMonth()];
	};

	checkFebruaryDays();

	const handleDate = () => {
		checkFebruaryDays();
		dispatch("dateChange", selectedDOB);
	};

	const handleYear = (e) => {
		selectedDOB.setFullYear(e.currentTarget.value);
		handleDate();
	};

	const handleMonth = (e) => {
		let currentMonth = e.currentTarget.value;
		if (currentMonth !== selectedDOB.getMonth()) {
			selectedDOB.setMonth(currentMonth);
		}
		selectedDOB.setMonth(e.currentTarget.value);
		handleDate();
	};

	const handleDay = (e) => {
		selectedDOB.setDate(e.currentTarget.value);
		handleDate();
	};
</script>

<div class="dob-container">
	<select
		required
		on:blur
		on:change={(e) => handleYear(e)}
		value={selectedDOB.getFullYear()}
		class="dob-box"
		name="dob-year"
		id="dob-year"
		style="--height: {height}; --borderRadius: {borderRadius}; --borderColor: {borderColor}; --borderWidth: {borderWidth}; --bgColor: {bgColor}; --textColor: {textColor};"
	>
		{#each years as year}
			<option>{year}</option>
		{/each}
	</select>

	<select
		required
		on:blur
		on:change={(e) => handleMonth(e)}
		value={selectedDOB.getMonth()}
		class="dob-box"
		name="dob-month"
		id="dob-month"
		style="--height: {height}; --borderRadius: {borderRadius}; --borderColor: {borderColor}; --borderWidth: {borderWidth}; --bgColor: {bgColor}; --textColor: {textColor};"
	>
		{#each months as month}
			<option value={month.id}>{month.value}</option>
		{/each}
	</select>

	<select
		required
		on:blur
		on:change={(e) => handleDay(e)}
		value={selectedDOB.getDate()}
		class="dob-box"
		name="dob-day"
		id="dob-day"
		style="--height: {height}; --borderRadius: {borderRadius}; --borderColor: {borderColor}; --borderWidth: {borderWidth}; --bgColor: {bgColor}; --textColor: {textColor};"
	>
		{#each Array(selectedDayArray) as _, i}
			<option>{i + 1}</option>
		{/each}
	</select>
</div>

<style>
	.dob-container {
		display: flex;
		flex-wrap: wrap;
	}

	.dob-box {
		height: var(--height);
		position: relative;
		color: var(--textColor);
		background-color: var(--bgColor);
		border-color: var(--borderColor);
		border-width: var(--borderWidth);
		padding: 0.25rem;
		width: fit-content;
		margin-right: 0.5rem;
		border-radius: var(--borderRadius);
	}

	.dob-box:focus {
		outline: none;
	}
</style>
