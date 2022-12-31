<script lang="ts">
  import Typography from './Typography.svelte'

  export let information: string
  export let title: string
  export let href: string

  export let imageSrc: string
  export let imageAlt: string
</script>

<article class="cursor-pointer">
  <a {href} class="flex flex-col justify-start items-start gap-3">
    <div class="relative">
      <img class="rounded-lg" src="https://picsum.photos/1080/1920" alt="Test" />
    </div>

    <Typography variant="hint2" class="text-neutral-700 dark:text-neutral-100"
      >Article - 12/12/20</Typography
    >
    <Typography>Name of the article</Typography>
  </a>
</article>

<style lang="postcss">
  article:hover div::after,
  article:active div::after {
    content: '';
    position: absolute;
    top: -5px;
    bottom: -5px;
    left: -5px;
    right: -5px;

    background: transparent;
    border: 3px solid theme('colors.primary.500');
    border-radius: theme('borderRadius.xl');
  }

  :global(html.dark) article:hover div::after,
  :global(html.dark) article:active div::after {
    border-color: theme('colors.secondary.500');
  }
</style>
