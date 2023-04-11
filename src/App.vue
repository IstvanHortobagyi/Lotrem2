<template>
	<header class="header">
		<a class="logo" href="#">
			<img class="logo__image" src="assets/static/images/logo.png">
		</a>
		<nav class="nav">
			<ul class="nav__list">
				<li class="nav__item">
					<!-- TODO: nav__link--active class-t be kell kötni, a Vue Routernek van erre beépített funkciója -->
					<RouterLink class="nav__link nav__link--active" to="/">Generator</RouterLink>
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

	<footer class="footer" :data-icon="footerIcons[Math.floor(Math.random()*footerIcons.length)]">
		<p class="disclaimer">
			Design by <a href="https://rolandszabo.design/" target="_blank" rel="noreferrer noopener">Roland Szabó</a>,
			Coding by <a href="https://istvanhortobagyi.com/" target="_blank" rel="noreferrer noopener">István Hortobágyi</a>,
			Illustrations by <a href="#" target="_blank" rel="noreferrer noopener">Isabelle Russell</a>.
		</p>
		<p class="copyright">&copy; Copyright 2023, LotremIpsum.com</p>
	</footer>


</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
	setup() {
		return {
			RouterLink: RouterLink,
			RouterView: RouterView
		}
	},
	data() {
		return {
			footerIcons: ["💍", "🧝‍♀️", "🧙", "🗡️", "🪄"]
		}
	}
}
</script>

<style>
@import "./assets/app.scss";
</style>
