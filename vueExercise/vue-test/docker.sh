docker image rm -f pcwebimage
docker build -t pcwebimage . --no-cache
docker rm -f pcwebfund
docker run -p 7001:80 -d --name pcwebfund pcwebimage
