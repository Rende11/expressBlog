install:
	npm install
run:
	npm run nodemon -- --exec babel-node ../src/bin/index.js
build:
	rm -rf dist/
	npm run build
test:
	npm run test

