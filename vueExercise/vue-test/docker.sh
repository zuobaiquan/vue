docker image rm -f pcwebnoahfundimage
docker build -t pcwebnoahfundimage . --no-cache
docker rm -f pcwebnoahfund
docker run -p 7001:80 -d --name pcwebnoahfund pcwebnoahfundimage