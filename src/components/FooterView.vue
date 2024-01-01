<template>
  <footer>
    <h4 class="h4 top">
      <router-link to="/contact" class="link" style="padding: 1rem; margin: -1rem; border-radius: 4rem;">
        Get in Touch With Me
      </router-link>
    </h4>
    <h2 class="h1 mail">
      <a href="mailto:vadym4che@gmail.com" class="link" style="padding: 1rem; margin: -1rem; border-radius: 4rem;">vadym4che@gmail.com</a>
    </h2>

    <div class="grid">
      <span class="logo scale2">
        <a href="http://bit.ly/Ful1-5tack">
          VADYM4<img src="/logo.png" alt="logo" class="logo-image">HE
        </a>
      </span>

      <span></span>

      <address>
        <h4 class="h4">
          Street Kniazia Ostrozkogo,<br>
          Boiarka, Kyivs'ka oblast,<br>
          08150
        </h4>
      </address>

      <div class="contacts">
        <h4 class="h4">
          <a href="tel:+380505444199">
              +380-505-444-199
          </a>
        </h4>

        <div class="links">
          <h4 class="h4">
            <a href="https://github.com/vadym4che">
              <img src="/github.svg" alt="github logo">&nbsp;
            </a>
          </h4>
          <h4 class="h4">
            <a href="https://t.me/vadym4che">
              <img src="/telegram.png" alt="telegram logo">&nbsp;
            </a>
          </h4>
          <h4 class="h4">
            <a href="mailto:vadym4che@gmail.com">
              <img src="/mail.png" alt="mail logo">&nbsp;
            </a>
          </h4>
        </div>
      </div>
    </div>

    <h4 class="h4 hr-above">
      © {{new Date().getFullYear()}}. Vadym4CHe. All rights reserved.
    </h4>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background: var(--bg2);
  padding: 0 10dvw;
  width: 100dvw;
  position: relative;
  left: -10dvw;
  .h4 {
    width: 100%;
  }
  .h4.hr-above {
    text-align: center;
    border-top: 0.125rem solid var(--color2);
    padding: 2.25rem 0 5rem 0;
  }
  .h4.top {
    text-align: center;
    padding: 6rem 0 1.5rem 0;

    & a {
      color: var(--accent0);
    }
  }

  .h1 {
    padding-bottom: 12rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 2.5fr 3fr 2.66fr;
    padding-bottom: 2.5rem;
    width: 100%;
    height: 8rem;
    position: relative;
    left: 8.5ch;
  }
}
.logo {
  font-size: 1.25rem;
  line-height: 1.25rem;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: 0;
  top: 0;
  color: var(--color0);

  img {
    margin-top: 1px;
    height: 1rem;
    margin-right: 0.25ch;
  }

}

address {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

address > h4 {
  text-align: left !important;
}
.scale2 {
  transform: scale(2) translate(0, 25%);
}

.links {
  .h4 {
    width: 3rem;
  }
  padding-top: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
}
.links img {
  width: 2.5rem;
  height: 2.5rem;

  filter: invert(var(--is-dark));
}

.mail a {
  text-decoration: underline;
}
</style>
