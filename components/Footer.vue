<template>
  <footer class="themefooter">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col">
          <a
            href="https://www.tibia.com/community/?subtopic=fansites"
            target="_blank"
          >
            <img
              class="logofooter"
              :src="$withBase('/assets/img/fansite.png')"
              alt="Supported Fansite Badge"
            />
          </a>
        </div>
        <div class="col text-right">
          <ul v-if="contact" class="list-unstyled">
            <li
              v-for="item in contact"
              :key="item.iconComponent"
              class="contact-item"
            >
              <NavLink :link="item.link">
                <component :is="item.iconComponent"></component>
                {{ item.text }}
              </NavLink>
            </li>
          </ul>
          <ul v-if="copyright" class="list-unstyled">
            <li
              v-for="item in copyright"
              :key="item.text"
              class="copyright-item"
            >
              <ul>
                {{
                  item.text
                }}
              </ul>
            </li>
            <NavLink link="/about/" title="About">About</NavLink>
            |
            <NavLink link="/contact/" title="Contact">Contact</NavLink>
            |
            <NavLink link="https://docs.tibialabs.com" title="Documentation"
              >Documentation</NavLink
            >
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import {
  CodepenIcon,
  FacebookIcon,
  GithubIcon,
  GitlabIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MessageSquareIcon,
  PhoneIcon,
  TwitterIcon,
} from 'vue-feather-icons'

export default {
  components: {
    CodepenIcon,
    FacebookIcon,
    GithubIcon,
    GitlabIcon,
    GlobeIcon,
    InstagramIcon,
    LinkedinIcon,
    MailIcon,
    MessageSquareIcon,
    PhoneIcon,
    TwitterIcon,
  },

  computed: {
    contact() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.contact) ||
        []
      )
        .map(({ type, link }) => {
          return {
            iconComponent: this.getIconComponentName(type),
            link,
          }
        })
        .filter(({ iconComponent }) => iconComponent)
    },

    copyright() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.copyright) || []
      )
    },
  },

  methods: {
    getIconComponentName(contactType) {
      switch (contactType) {
        case 'github':
          return 'GithubIcon'
      }
    },
  },
}
</script>
