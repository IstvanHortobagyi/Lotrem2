<template>
	<header class="header">
		<a class="logo" href="#">
			<img class="logo__image" src="assets/static/images/logo.png">
		</a>
		<nav class="nav">
			<ul class="nav__list">
				<li class="nav__item">
					<RouterLink class="nav__link" to="/">Generator</RouterLink>
					<RouterLink class="nav__link" to="/about">About</RouterLink>
					<RouterLink class="nav__link" to="/contact">Contact</RouterLink>
				</li>
			</ul>
		</nav>
	</header>

	<main class="main">
		<RouterView />
	</main>

	<footer class="footer">
		<p>&copy; Copyright 2023, LotremIpsum.com</p>
		<p>
			Design by <a href="https://rolandszabo.design/" target="_blank" rel="noreferrer noopener">Roland Szabó</a>,
			Coding by <a href="https://istvanhortobagyi.com/" target="_blank" rel="noreferrer noopener">István Hortobágyi</a>,
			Illustrations by <a href="#" target="_blank" rel="noreferrer noopener">Isabelle Russell</a>.
		</p>
	</footer>


</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
@import "./assets/app.scss";
</style>
