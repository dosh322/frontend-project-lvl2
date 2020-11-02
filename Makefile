install:
	npm install

run:
	node bin/genDiff.js

lint:
	npx eslint .

publish:
	npm publish --dry-run 

test-coverage:
	npm test -- --collect-coverage