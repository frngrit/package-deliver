fullstack:
	docker-compose -f docker-compose.yml down && \
	docker-compose -f docker-compose.yml up --build --force-recreate --abort-on-container-exit
db:
	docker-compose -f docker-compose.yml down && \
	docker-compose -f docker-compose.yml up db --build --force-recreate --abort-on-container-exit
server:
	docker-compose -f docker-compose.yml down && \
	docker-compose -f docker-compose.yml up db backend --build --force-recreate --abort-on-container-exit
frontend-app:
	docker-compose -f docker-compose.yml down && \
	docker-compose -f docker-compose.yml up frontend --build --force-recreate --abort-on-container-exit
backend-unit-test:
	npm run unit-test --prefix backend