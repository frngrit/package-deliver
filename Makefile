fullstack:
	docker-compose -f docker-compose.yml down && \
	docker-compose -f docker-compose.yml up --build --force-recreate --abort-on-container-exit