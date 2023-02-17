.PHONY: install 
install: ##@install the application.
	docker-compose build

.PHONY: start
start: ##@ start the application.
	docker-compose up -d

.PHONY: logs
logs: ##@run show logs
	docker-compose logs -f

.PHONY: clean
clean: ##@clean up the application
	docker-compose down -v
	rm -rf node_modules
	rm -rf .next
