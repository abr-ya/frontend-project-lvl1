# Makefile
setup: install # можно ссылаться на цели, описанные ниже

install:
	npm install

start:
	node bin/brain-games.js

start:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
