# Backdoor-Deals

End to End Encrypted Real Time Chat System

## Running the application without docker

  1. Navigate to backdoor-deals
  2. Run make install
     1. Only needs to be done once
  3. Run make dev

## Running application with docker

We will be using docker and docker-compose in order to make the dev experience smoother.
Please Following the following steps listed here:

### Installing Docker

  1. [Windows](https://docs.docker.com/desktop/install/windows-install/)
  2. [Mac](https://docs.docker.com/desktop/install/mac-install/)
  3. [Linux](https://docs.docker.com/desktop/install/linux-install/)

### Installing Docker Compose

  Instruction regarding docker-compose installation can be found [here](https://docs.docker.com/compose/install/)

### Running the application

  Once docker and docker-compose has been installed users can run the program fairly easily using the following commands

  1. `docker-compose build` (May require sudo)
  2. `docker-compose up` (Running it as a foreground process)
  3. `docker-compose up -d` (Running it as a daemon process)
     1. `docker-compose logs -f <image_id>`
        1. `docker-compose ps` (to see running container)

### Exiting the application

  1. ```docker-compose down```
