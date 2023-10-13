<template>
    <section class="experience mb-5">
        <my-title>Experience</my-title>

        <div class="row mb-5">
            <div class="col-md-3">
                <p>September 2022 to present</p>
                <p>1 year 2 months</p>
            </div>
            <div class="col-md-9 ps-4">

                <div class="company">

                    <div class="info-block mb-4">
                        <h5>TRANSCAPITALBANK, AKB</h5>
                        <p>Moscow, <a class="company__link" target="_blank" href="https://www.tkbbank.ru/">www.tkbbank.ru</a></p>
                    </div>

                    <div class="duties-block mb-5">
                        <h5>Front-end development</h5>
                        <ul class="duties-block__list">
                        <li class="duties-block__item">Development of user interfaces and modules for the bank's internal system</li>
                        <li class="duties-block__item">Optimize interfaces to improve performance and usability</li>
                        <li class="duties-block__item">Making changes and improvements to existing web applications</li>
                        </ul>
                    </div>
                    
                    <div class="stack-block">
                        <h5 class="mb-2">Tech Stack</h5>
                        <ul class="stack-block__list d-flex align-items-center">
                        <li class="stack-block__item">HTML</li>
                        <li class="stack-block__item">CSS</li>
                        <li class="stack-block__item">JavaScript</li>
                        <li class="stack-block__item">TypeScript</li>
                        <li class="stack-block__item">VUE</li>
                        <li class="stack-block__item">PHP</li>
                        <li class="stack-block__item">Bootstrap</li>
                        <li class="stack-block__item">Rest API</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

        <div class="row mb-5">
            <div class="col-md-3">
                <p>May 2021 - September 2022</p>
                <p>1 year 5 months</p>
            </div>
            <div class="col-md-9 ps-4">

                <div class="company">

                    <div class="info-block mb-4">
                        <h5>United Market</h5>
                        <p>St. Petersburg, <a class="company__link" target="_blank" href="https:/unitedmarket.org/">www.unitedmarket.org</a></p>
                    </div>

                    <div class="duties-block mb-5">
                        <h5>Front-end development</h5>
                        <ul class="duties-block__list">
                            <li class="duties-block__item">Web page layout using modern standards and requirements, starting from scratch</li>
                            <li class="duties-block__item">Developing an attractive user experience through creating animations and working with design</li>
                        </ul>
                    </div>
                    
                    <div class="stack-block">
                        <h5 class="mb-2">Tech Stack</h5>
                        <ul class="stack-block__list d-flex align-items-center">
                        <li class="stack-block__item">HTML</li>
                        <li class="stack-block__item">CSS</li>
                        <li class="stack-block__item">SCSS</li>
                        <li class="stack-block__item">JavaScript</li>
                        <li class="stack-block__item">Bootstrap</li>
                        <li class="stack-block__item">PHP</li>
                        <li class="stack-block__item">Laravel</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-5">
            <div class="col-md-3">
                <p>December 2018 - May 2021</p>
                <p>2 years 6 months</p>
            </div>
            <div class="col-md-9 ps-4">

                <div class="company">

                    <div class="info-block mb-4">
                        <h5>Individual entrepreneurship / private practice / freelancing</h5>
                        <p>St. Petersburg</p>
                    </div>

                    <div class="duties-block mb-5">
                        <h5>Web developer</h5>
                        <ul class="duties-block__list">
                            <li class="duties-block__item">Development and revision of sites</li>
                        </ul>
                    </div>
                    
                    <div class="stack-block">
                        <h5 class="mb-2">Tech Stack</h5>
                        <ul class="stack-block__list d-flex align-items-center">
                            <li class="stack-block__item">HTML</li>
                            <li class="stack-block__item">CSS</li>
                            <li class="stack-block__item">SCSS</li>
                            <li class="stack-block__item">JavaScript</li>
                            <li class="stack-block__item">Bootstrap</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </section>
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
.company{

    &__link {
      color: #2F2F2F;
      text-decoration: none;
      &:hover {
        opacity: .6;
      }
    }

  }
  .duties-block {
    &__item {
      position: relative;
      list-style: none;
      padding-left: 20px;
      &::after {
        content: "";

        position: absolute;
        top: 8px;
        left: 0;

        display: block;
        width: 10px;
        height: 10px;
        border: 3px solid #2F2F2F;
        border-radius: 50px;
      }
    }
  }
  .stack-block {
    &__item {
      display: block;
      padding: 5px 10px;
      margin-right: 10px;
      font-size: 1em;
      font-weight: 400;
      line-height: 1;
      color :#fff;
      text-align: center;
      border-radius: 4px;
      background-color: #2F2F2F;
      list-style: none;
    }
  }
</style>