<template>
<div class="p-1 p-md-3 p-lg-5">
  <div class="resume mb-5">

    <Header></Header>

    <div class="resume__main">

      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Skills></Skills>

    </div>
  </div>
</div>
</template>

<script>
    import Header from '@/components/resume/Header'
    import About from '@/components/resume/About'
    import Experience from '@/components/resume/Experience'
    import Projects from '@/components/resume/Projects'
    import Skills from '@/components/resume/Skills'

    export default {
      components: {
          Header, About, Experience,Projects,Skills
      }, 
      methods: {
      }
    }
</script>

<style lang="scss" scoped>
  * {
    padding: 0;
    margin: 0;
  }

  .resume {
    width: 100%;
    margin: 0 auto;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
    background: #fff;
    &__main {
      color: #2F2F2F;
      padding: 4em 2em;
    }
  }


</style>