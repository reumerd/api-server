# Dockerfile 

# bootstrap api server
# version 1.0
# Author: Dennis Reumer

FROM node:4-onbuild
MAINTAINER d.reumer@strict.nl
LABEL Description="This image is to provide a bootstrap skelenton for an authenticated API server" Vendor="Strict Consultancy" Version="1.0"
EXPOSE 80 1337 443

##VOLUME ["/var/db"]