<template>
    <div class="header">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <div class="mb-4">
              <h2 class="header__fio"><span class="header__first-name">Savinov</span> Alexey</h2>
              <p class="header__position">Front-end Developer</p>
            </div>

            <div>
              <p class="header__personal-gender"><i class="ri-user-line me-1"></i>Male, 34, born December 28, 1988 </p>
              <p><i class="ri-map-pin-line"></i> St. Petersburg, m. Leninsky Prospekt, ready to move, ready for business trips</p>
              <div class="d-flex">
                <p class="me-2"><i class="ri-phone-line"></i> <a class="header__link" href="tel:+79500484054">+7 (950) 048-40-54</a> </p>
                <p class="me-2"><i class="ri-mail-line"></i> <a class="header__link" href="mailto:a950004840@yandex.com">a950004840@yandex.com</a></p>
                <p><i class="ri-telegram-line"></i> <a target="_blank" class="header__link" href="https://t.me/art_savinov">@art_savinov</a></p>
              </div>
            </div>
          </div>
          <div class="img">
            <img src="@/assets/my-foto-black.jpg" alt="">
          </div>
        </div>
      </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
}
.header {
    padding: 3em 2em;
    background-color: #2F2F2F;
    color: #fff;

    &__fio {
        font-size: 2em;
        text-transform: uppercase;
        font-weight: 300;
    }
    &__first-name {
        font-weight: bold;
    }
    &__position {
        font-style: italic;
        font-size: 24px;
    }
    &__personal-gender {

        font-size: 1em;
    }
    &__link {
        color: #fff;
        text-decoration: none;
        &:hover {
            opacity: .6;
        }
    }
    &__main {
        color: #2F2F2F;
        padding: 4em 2em;
    }
}
.img {
    border-radius: 50%;
    overflow: hidden;
    width: 200px;
    height: 200px;
    img {
      width: 200px;
      height: 200px;
    }
  }
</style>