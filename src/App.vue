<template>
	<header class="header">
		<a class="logo" href="#">
			<img class="logo__image" src="assets/static/images/logo.png">
		</a>
		<nav class="nav">
			<ul class="nav__list">
				<li class="nav__item">
					<RouterLink class="nav__link" to="/">Generator</RouterLink>
				</li>
				<li class="nav__item">
					<RouterLink class="nav__link" to="/about">About</RouterLink>
				</li>
				<li class="nav__item">
					<RouterLink class="nav__link" to="/contact">Contact</RouterLink>
				</li>
			</ul>
		</nav>
	</header>

	<main class="main">
		<RouterView />
	</main>

	<footer class="footer" data-icon="{{ footerIcon }}">
		<p class="disclaimer">
			Design by <a href="https://rolandszabo.design/" target="_blank" rel="noreferrer noopener">Roland Szabó</a>,
			Coding by <a href="https://istvanhortobagyi.com/" target="_blank" rel="noreferrer noopener">István Hortobágyi</a>,
			Illustrations by <a href="#" target="_blank" rel="noreferrer noopener">Isabelle Russell</a>.
		</p>
		<p class="copyright">&copy; Copyright 2023, LotremIpsum.com</p>
	</footer>


</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';

// TODO: Csináljunk egy tömböt, többféle Unicode emojival, amit minden oldalbetöltésnél randomizál egy fgv, és bedobja a <footer> element data-icon="" attr-jába
let footerIcons = ["💍", "🧝‍♀️", "🧙", "🗡️", "🪄"];
</script>

<style>
@import "./assets/app.scss";
</style>
