<template>
    <section>
        <my-title>Skills</my-title>
        <div class="row mt-5">
          <div class="col-md-4 mb-4">
            <div class="w-75 ">
              <p class="mb-1">HTML</p>
              <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style="width: 100%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="w-75">
              <p class="mb-1">CSS/SCSS</p>
              <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style="width: 100%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="w-75">
              <p class="mb-1">JavaScript</p>
              <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style="width: 95%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="w-75">
              <p class="mb-1">TypeScript</p>
              <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style="width: 70%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="w-75">
              <p class="mb-1">VUE</p>
              <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style="width: 85%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="w-75">
              <p class="mb-1">REST API</p>
              <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style="width: 70%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="w-75">
              <p class="mb-1">GIT</p>
              <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style="width: 85%"></div>
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
.progress {
    height: 8px !important;
    &-bar {
      background-color: #2F2F2F!important;
    }
  }
</style>