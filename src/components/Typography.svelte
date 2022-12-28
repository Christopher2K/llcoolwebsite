<script lang="ts">
  type TypographyTag = 'p' | 'h1' | 'h2' | 'h3' | 'h4'
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
  let className: string = ''
  export { className as class }

  $: importantClasses = important ? 'font-bold' : ''
  $: colorClasses = disableColorClasses ? '' : 'text-dark dark:text-light'
  $: classNames = [variant, colorClasses, importantClasses, className]
    .filter(Boolean)
    .join(' ')
</script>

<svelte:element this={tag} class={classNames}>
  <slot />
</svelte:element>
