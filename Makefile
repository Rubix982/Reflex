SHELL := /bin/bash

build-prod:
	sudo docker-compose -f docker-compose.yaml up --build

up-prod:
	sudo docker-compose -f docker-compose.yaml up

stop:
	docker container stop $(docker-compose ps -aq)

delete:
	docker container rm $(docker-compose ps -aq)

remove:
	sudo docker-compose down --remove-orphans

build:
	sudo docker-compose -f docker-compose.dev.yaml up --build

up:
	sudo docker-compose -f docker-compose.dev.yaml up

ps:
	sudo docker-compose ps -a

primary-reflex:
	sudo docker exec -it primary-reflex bash

secondary-reflex:
	sudo docker exec -it secondary-reflex bash
