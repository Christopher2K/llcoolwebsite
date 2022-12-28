<script lang="ts">
  import { Twitch, Twitter, Github, Linkedin } from 'lucide-svelte'

  const SOCIALS = [
    { name: 'Twitch', href: 'https://twitch.tv/LLCoolChris_', component: Twitch },
    { name: 'Twitter', href: 'https://twitter.com/LLCoolChris_', component: Twitter },
    { name: 'Github', href: 'https://github.com/Christopher2k', component: Github },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/christopherkatoyi/',
      component: Linkedin,
    },
  ]

  export let size: 'md' | 'lg' = 'md'
  export let theme: 'dark' | 'light' | undefined = undefined

  $: sizeClass = size === 'md' ? 'w-6 h-6' : 'w-8 h-8'
  $: colorClass =
    theme === undefined
      ? 'dark:text-light text-dark'
      : theme === 'dark'
      ? 'text-dark'
      : 'text-light'
  $: spacingClass = size === 'md' ? 'gap-4' : 'gap-5'
</script>

<section>
  <ul class="flex flex-row justify-start items-center {spacingClass}">
    {#each SOCIALS as social}
      <li>
        <a
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label="Follow me on {social.name}"
        >
          <svelte:component
            this={social.component}
            class="{sizeClass} {colorClass}"
            aria-hidden="true"
          />
        </a>
      </li>
    {/each}
  </ul>
</section>
