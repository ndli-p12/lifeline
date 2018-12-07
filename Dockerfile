FROM httpd

COPY ./dist/* /usr/local/apache2/htdocs

WORKDIR /opt/app
EXPOSE 80

CMD httpd-foreground
