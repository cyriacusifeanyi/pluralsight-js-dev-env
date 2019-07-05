# pluralsight-js-dev-env
JavaScript Development Environment from Pluralsight Course with Cory House

##Steps:
add "package.json" to the root of the project directory
then run "npm install", this will create "package-lock.json"
then:
add .editorconfig to the project root and indtall editor plugin depending on your editor of choice, this will help with a shareable uniform develpment config.



--keep the terminal server running at (localhost:3000)

then run:
	lt --port 3000  
(the program was installed using "sudo npm install localtunnel -g") -g means -global

generated url:
	https://white-ladybug-40.localtunnel.me

--to get a more readable or shorter url use the ("-subdomain" option):
	lt --port 3000 -subdomain ifeanyi  (but be careful to avoid subdomain from clashing.)

generated url:
	https://ifeanyi.localtunnel.me

you can still run browserSync with localtunnel and local server
