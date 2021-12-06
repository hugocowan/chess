<template>
	<div class="home">
		<ChessBoard msg="Welcome to Your Vue.js + TypeScript App" />
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ChessBoard from '@/components/ChessBoard.vue'; // @ is an alias to /src

@Options({
	components: {
		ChessBoard,
	}
})
export default class Home extends Vue {}
</script>
