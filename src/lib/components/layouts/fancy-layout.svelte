<script lang="ts">
import './github-markdown-dark.css';
export let title = 'change me';
</script>
  
    <svelte:head>
      <title>{title}</title>
    </svelte:head>
  
    <main>
      <h1 class="markdown-body" style="max-width: 60ch; margin: auto; padding-top: 2.5rem;">{title}</h1>
      <slot />
    </main>
    