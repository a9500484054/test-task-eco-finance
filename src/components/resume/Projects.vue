<template>
    <section class="projects mb-5">
        <my-title>Projects</my-title>
        <div class="row mb-5">
          <div class="col-md-3">
            <p>Event ticketing service</p>
          </div>
          <div class="col-md-9 ps-4">

            <div class="description mb-4">
                <h5>Description</h5>
                <p>Creation of a store allowing company employees to purchase tickets to various events</p>
            </div>

            <div class="functional">
                <h5>Functional</h5>
                <ul class="functional__list">
                    <li class="functional__item">A ticket showcase displaying event information and tickets available for purchase</li>
                    <li class="functional__item"> Ordering, including selecting the number of tickets, specifying buyer details and payment</li>
                    <li class="functional__item">Administration panel for sales and inventory management, including ticket list, requests, sales tracking and inventory management</li>
                </ul>
            </div>

          </div>
        </div>
        <div class="row mb-5">
          <div class="col-md-3">
            <p>Messenger (WhatsApp analog)</p>
          </div>
          <div class="col-md-9 ps-4">

            <div class="description mb-4">
                <h5>Description</h5>
                <p>Create a messenger with the ability to exchange text messages, files and multimedia content</p>
            </div>

            <div class="functional">
                <h5>Functional</h5>
                <ul class="functional__list">
                    <li class="functional__item">Sending and receiving text messages</li>
                    <li class="functional__item">Sharing files, including images, video and audio files</li>
                    <li class="functional__item">Creating group chats and managing contacts, including adding and removing members, privacy management</li>
                </ul>
            </div>

          </div>
        </div>
        <div class="row mb-5">
          <div class="col-md-3">
            <p>Project Management Board</p>
          </div>
          <div class="col-md-9 ps-4">

            <div class="description mb-4">
                <h5>Description</h5>
                <p>Create a tool for task and project management</p>
            </div>

            <div class="functional">
                <h5>Functional</h5>
                <ul class="functional__list">
                    <li class="functional__item">Creating boards with defined visibility and access for project members</li>
                    <li class="functional__item">Move tasks between columns, assign responsibility and set due dates</li>
                    <li class="functional__item">Scheduling tasks, tracking progress status and monitoring project metrics</li>
                </ul>
            </div>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-md-3">
            <p>Service for creating and coordinating applications for individual tariffs</p>
          </div>
          <div class="col-md-9 ps-4">

            <div class="description mb-4">
                <h5>Description</h5>
                <p>Creation of a service that allows users to create and coordinate requests for individual tariffs</p>
            </div>

            <div class="functional">
                <h5>Functional</h5>
                <ul class="functional__list">
                    <li class="functional__item"> Filtering and analytics of applications</li>
                    <li class="functional__item">Tariff management and coordination of requests</li>
                    <li class="functional__item">Management of request parameters and the ability to track their status</li>
                </ul>
            </div>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-md-3">
            <p> Service for HR department with list of employees</p>
          </div>
          <div class="col-md-9 ps-4">

            <div class="description mb-4">
                <h5>Description</h5>
                <p>Create a service that provides HR department with information about all employees, their profiles and documentation.</p>
            </div>

            <div class="functional">
                <h5>Functional</h5>
                <ul class="functional__list">
                    <li class="functional__item">Employee list with basic information including contact information, title and department</li>
                    <li class="functional__item">Employee profiles with detailed information including background, education, work experience and skills</li>
                    <li class="functional__item">Documentation related to each employee including contracts, performance reviews, vacations, and other documents</li>
                    <li class="functional__item">Employee data management, including adding new employees, updating information, and deleting terminated employees</li>
                    <li class="functional__item">Employee analytics and reporting, including average salary, benefits, seniority, and other metrics</li>
                </ul>
            </div>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-md-3">
            <p> Service for providing bank guarantees</p>
          </div>
          <div class="col-md-9 ps-4">

            <div class="description mb-4">
                <h5>Description</h5>
                <p>Creation of a service that allows customers to receive and manage bank guarantees online</p>
            </div>

            <div class="functional">
                <h5>Functional</h5>
                <ul class="functional__list">
                    <li class="functional__item">Filling out and submitting applications for bank guarantees</li>
                    <li class="functional__item">Online verification and analysis of the client's creditworthiness</li>
                    <li class="functional__item">Determining the terms and amount of the guarantee based on the client's application and financial information</li>
                    <li class="functional__item">Guarantee management, including requesting amendments, extensions and termination</li>
                    <li class="functional__item">Automatic generation of contracts and documents related to guarantees</li>
                    <li class="functional__item">Online tracking of guarantee status, including alerts on payments, changes and terms</li>
                    <li class="functional__item">Generation of reports and analytics in connection with the use of bank guarantees</li>
                    <li class="functional__item">Integration with other systems such as accounting and financial management systems to automatically update guarantee data</li>
                </ul>
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
.functional {
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
</style>