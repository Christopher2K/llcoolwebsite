<script lang="ts">
  import { onMount } from 'svelte'
  import { Sun, Moon, X, Menu, Home, BookOpen, Book, Laptop, User } from 'lucide-svelte'

  import Typography from './Typography.svelte'
  import RoundedIconButton from './RoundedIconButton.svelte'
  import NavItem from './NavItem.svelte'

  // Props
  export let path: string

  // State
  let scrollingElement: Element | null = null
  let menuOpen = false
  let isDarkMode = false

  // Computed
  $: menuButtonIcon = menuOpen ? X : Menu
  $: menuButtonLabel = menuOpen ? 'Close menu' : 'Open menu'
  $: themeButtonIcon = isDarkMode ? Sun : Moon
  $: themeButtonLabel = isDarkMode ? 'Turn on light mode' : 'Turn on dark mode'

  // Callbacks
  function toggleMenu() {
    menuOpen = !menuOpen
  }

  // Reactive block
  $: if (menuOpen && scrollingElement) {
    document.scrollingElement?.classList.add('overflow-hidden')
  }

  $: if (!menuOpen && scrollingElement) {
    document.scrollingElement?.classList.remove('overflow-hidden')
  }

  // Lifecycle
  onMount(() => {
    scrollingElement = document.scrollingElement
  })
</script>

<nav
  class="w-full sticky top-0 left-0 p-4 h-fit md:relative md:flex md:flex-col md:justify-start md:items-center md:gap-10"
>
  <div class="h-[72px] flex flex-row justify-between items-center">
    <Typography variant="subheading2" class="md:hidden">
      <a href="/">Christopher</a>
    </Typography>

    <div class="flex flex-row justify-start items-center gap-4">
      <RoundedIconButton
        class="md:hidden"
        label={menuButtonLabel}
        type="button"
        on:click={toggleMenu}
      >
        <svelte:component
          this={menuButtonIcon}
          class="h-6 text-neutral-50"
          aria-hidden="true"
        />
      </RoundedIconButton>

      <RoundedIconButton label={themeButtonLabel} type="button">
        <svelte:component
          this={themeButtonIcon}
          class="h-6 text-neutral-50"
          aria-hidden="true"
        />
      </RoundedIconButton>
    </div>
  </div>

  <img
    class="hidden md:block rounded-full h-16 w-16"
    src="/images/chris.jpg"
    alt="Christopher smiling"
  />

  <!-- Nav menu -->
  <div
    class="md:flex absolute md:relative flex-col justify-start items-start gap-5 bg-light px-4 md:px-0 top-full md:top-auto left-0 md:left-auto right-0 md:right-auto h-[calc(100vh-72px-theme(space.4)-theme(space.4))] md:h-auto w-full"
    class:hidden={!menuOpen}
    class:flex={menuOpen}
  >
    <NavItem hideTextOnTablet label="Home" href="/" currentPath={path} absolute>
      <Home slot="icon" />
    </NavItem>
    <NavItem
      hideTextOnTablet
      label="Indie stories"
      href="/indie-stories"
      currentPath={path}
    >
      <BookOpen slot="icon" />
    </NavItem>
    <NavItem hideTextOnTablet label="Blog" href="/blog" currentPath={path}>
      <Book slot="icon" />
    </NavItem>
    <NavItem hideTextOnTablet label="Tech setup" href="/tech-setup" currentPath={path}>
      <Laptop slot="icon" />
    </NavItem>
    <NavItem hideTextOnTablet label="About me" href="/about-me" currentPath={path}>
      <User slot="icon" />
    </NavItem>
  </div>
</nav>
