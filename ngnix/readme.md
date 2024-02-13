# Steps ngnix

events {
}

http {
server {
listen 80;
server*name *;
location / {
return 200 "hello nginx";
}
}
}
