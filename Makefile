install:
	npm install
run:
	npm run nodemon -- --exec babel-node src/bin/index.js

debug-run:
	DEBUG=express:router make run
build:
	rm -rf dist/
	npm run build
test:
	npm run test

