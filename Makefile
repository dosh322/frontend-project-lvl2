install:
	npm install

lint:
	npx eslint .

publish:
	npm publish --dry-run 

test-coverage:
	npm test -- --collect-coverage