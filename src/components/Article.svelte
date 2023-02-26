<script lang="ts">
  import format from 'date-fns/format'

  import Typography from './Typography.svelte'
  import { getDateLocale } from '@app/utils'

  export let title: string
  export let href: string
  export let date: Date = new Date()

  export let imageSrc: string
  export let imageAlt: string

  $: formatedDate = format(date, 'P', {
    locale: getDateLocale(),
  })
</script>

<article class="cursor-pointer">
  <a {href} class="flex flex-col justify-start items-start gap-3">
    <div class="relative">
      <img class="rounded-lg" src={imageSrc} alt={imageAlt} />
    </div>

    <Typography variant="hint2" class="text-neutral-700 dark:text-neutral-100"
      >{formatedDate}</Typography
    >
    <Typography>{title}</Typography>
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
