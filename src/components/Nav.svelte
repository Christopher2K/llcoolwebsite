<script lang="ts">
  import { t } from 'i18next'
  import { onMount } from 'svelte'
  import { Sun, Moon, X, Menu, Home, BookOpen, Book, Laptop, User } from 'lucide-svelte'
  import { localizePath } from '@app/utils'

  import Typography from './Typography.svelte'
  import RoundedIconButton from './RoundedIconButton.svelte'
  import NavItem from './NavItem.svelte'
  import Socials from './Socials.svelte'

  // Props
  export let path: string
  export let lang: string

  // State
  let scrollingElement: Element | null = null
  let menuOpen = false
  let isDarkMode: boolean | undefined = undefined

  // Computed
  $: menuButtonIcon = menuOpen ? X : Menu
  $: menuButtonLabel = menuOpen ? t('common:nav.openMenu') : t('common:nav.closeMenu')
  $: themeButtonLabel = isDarkMode
    ? t('comomn:nav.lightModeToggle')
    : t('common:nav.darkModeToggle')

  // Callbacks
  function toggleMenu() {
    menuOpen = !menuOpen
  }

  function switchTheme() {
    isDarkMode = !isDarkMode
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
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
    isDarkMode = window.localStorage.getItem('theme') === 'dark'
  })
</script>

<nav
  class="w-full sticky top-0 left-0 p-4 h-fit md:flex md:flex-col md:justify-start md:items-center md:gap-10 bg-light dark:bg-dark z-40"
>
  <div
    class="h-[72px] md:h-auto lg:w-full flex flex-row md:flex-col md:gap-3 justify-between items-center"
  >
    <div class="flex flex-row justify-start items-end gap-4">
      <Typography variant="subheading2" class="md:hidden">
        <a href={localizePath('/', lang)}>Christopher</a>
      </Typography>
      <div class="flex flex-row justify-start items-end gap-2">
        <Typography link={{ href: localizePath(path, 'en') }}>EN</Typography>
        <Typography link={{ href: localizePath(path, 'fr') }}>FR</Typography>
      </div>
    </div>

    <div
      class="flex flex-col lg:flex-row-reverse justify-start lg:justify-between items-center md:gap-10 lg:gap-6 lg:w-full"
    >
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

        <RoundedIconButton label={themeButtonLabel} type="button" on:click={switchTheme}>
          <Sun class="dark:hidden h-6 text-neutral-50" aria-hidden="true" />
          <Moon class="hidden dark:block h-6 text-neutral-50" aria-hidden="true" />
        </RoundedIconButton>
      </div>

      <img
        class="hidden md:block rounded-full h-16 w-16"
        src="/images/chris.jpg"
        alt={t('common:nav.profilePictureAlt')}
      />
    </div>
  </div>

  <section class="hidden self-start lg:flex flex-col gap-4">
    <div>
      <Typography>Christopher N. Katoyi Kaba</Typography>
      <Typography variant="hint2">@LLCoolChris_</Typography>
    </div>
    <div>
      <Typography>{t('common:nav.job')}</Typography>
      <Typography>{t('common:nav.streamer')}</Typography>
    </div>
    <Typography variant="hint2">Toronto, Canada</Typography>
  </section>

  <section class="hidden self-start lg:flex flex-row justify-start items-start gap-4">
    <Socials />
  </section>

  <!-- Nav menu -->
  <div
    class:hidden={!menuOpen}
    class:flex={menuOpen}
    class="md:flex absolute z-50 md:relative flex-col justify-start items-start gap-5 bg-light dark:bg-dark sm:bg-transparent px-4 md:px-0 top-full md:top-auto left-0 md:left-auto right-0 md:right-auto h-[calc(100vh-72px-theme(space.4)-theme(space.4))] md:h-auto w-full"
  >
    <NavItem
      hideTextOnTablet
      label={t('common:nav.links.home')}
      href="/"
      currentPath={path}
      absolute
    >
      <Home slot="icon" />
    </NavItem>
    <NavItem
      hideTextOnTablet
      label={t('common:nav.links.indieStories')}
      href="/indie-stories"
      currentPath={path}
    >
      <BookOpen slot="icon" />
    </NavItem>
    <NavItem
      hideTextOnTablet
      label={t('common:nav.links.blog')}
      href="/blog"
      currentPath={path}
    >
      <Book slot="icon" />
    </NavItem>
    <NavItem
      hideTextOnTablet
      label={t('common:nav.links.techSetup')}
      href="/tech-setup"
      currentPath={path}
    >
      <Laptop slot="icon" />
    </NavItem>
    <NavItem
      hideTextOnTablet
      label={t('common:nav.links.aboutMe')}
      href="/about"
      currentPath={path}
    >
      <User slot="icon" />
    </NavItem>
  </div>
</nav>
