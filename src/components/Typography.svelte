<script lang="ts">
  type TypographyTag = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'li' | 'span'
  type TypographyVariant =
    | 'heading2'
    | 'heading1'
    | 'subheading2'
    | 'subheading1'
    | 'bigbody'
    | 'body'
    | 'hint2'

  export let tag: TypographyTag = 'p'
  export let variant: TypographyVariant = 'body'
  export let important = false
  export let disableColorClasses = false
  export let link: { href: string } | {} = {}
  let className: string = ''
  export { className as class }

  $: computedTag = 'href' in link ? 'a' : tag
  $: importantClasses = important ? 'font-bold' : ''
  $: colorClasses = disableColorClasses ? '' : 'text-dark dark:text-light'
  $: classNames = [variant, colorClasses, importantClasses, className]
    .filter(Boolean)
    .join(' ')
</script>

<svelte:element this={computedTag} class={classNames} {...link}>
  <slot />
</svelte:element>
