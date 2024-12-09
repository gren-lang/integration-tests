app: Makefile gren.json node_modules
	GREN_BIN=../../compiler/gren node ../../compiler/cli.js make src/Main.gren --output=app

.PHONY: serve
serve: app
	node app

.PHONY: test
test: app node_modules
	npx playwright test -x

node_modules: package.json package-lock.json
	npm install

.PHONY: clean
clean:
	rm -rf .gren
	rm -rf node_modules
	rm app
