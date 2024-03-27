<script lang="ts">
  export let title = 'change me';
  </script>

  <svelte:head>
    <title>{title}</title>
  </svelte:head>

  <main>
    <h1 class="font-bold text-yellow-200">{title}</h1>
    <slot />
  </main>
  