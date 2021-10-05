From nginx

COPY default.conf  /etc/nginx/conf.d/default.conf

COPY dist/vex /var/www/vex-templates
