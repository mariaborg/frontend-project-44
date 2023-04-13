install: 
	npm ci
brain-games:
	node bin/brain-games.js

publish: 
	npm publish --dry-run
lint:
	./node_modules/.bin/eslint .