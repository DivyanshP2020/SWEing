Steps to Install NGINX (https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04)

sudo apt update
sudo apt install nginx

LOcation of nginx on local: /etc/nginx

Default port of nginx: localhost:80

Structure of nginx file:

There are context and inside them are directive.

For Example: In the http context, there is include directive, default_type etc.

http {
	include	mime.types;
	default_types	application/octet-stream;
	.
	.
	.
	.
}
