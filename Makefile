install:
	npm install

install-dev:
	npm ci

link:
	npm link	

lint:
	npx eslint .

publish:
	npm publish --dry-run 

test:
	npm test	

test-coverage:
	npm test -- --collect-coverage