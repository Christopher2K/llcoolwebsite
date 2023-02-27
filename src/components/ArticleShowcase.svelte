<script lang="ts">
  import { format } from 'date-fns'

  import { getDateLocale } from '@app/utils'

  import Button from './Button.svelte'
  import Typography from './Typography.svelte'

  export let title: string
  export let description: string
  export let date: Date
  export let href: string

  $: formatedDate = format(date, 'P', {
    locale: getDateLocale(),
  })
</script>

<article
  class="bg-neutral-50 p-4 rounded-xl md:flex md:flex-row md:justify-start md:items-start md:gap-6"
>
  <slot />

  <div class="md:flex-1">
    <div class="flex flex-col justify-start items-start gap-1 mb-6">
      <Typography tag="h2" disableColorClasses variant="subheading1" class="text-dark"
        >{title}</Typography
      >
      <Typography tag="p" disableColorClasses class="text-neutral-700"
        >{formatedDate}</Typography
      >
    </div>

    <!-- TODO: Keeping this one here since named slot are broken with Svelte and Astro -->
    <!-- <img
      class="rounded-lg mb-6 md:hidden"
      src="https://picsum.photos/1080/1920"
      alt="Test"
    /> -->
    <Typography disableColorClasses class="mb-10 text-dark">{description}</Typography>

    <Button label="Read the full article" fullWidth class="md:w-fit" link={{ href }} />
  </div>
</article>
