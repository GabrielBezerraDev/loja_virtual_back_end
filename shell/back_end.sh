
docker exec -it backend bash -c "npx prisma migrate dev"

docker exec -d backend bash -c "npm run start:dev"

chmod u+x mysql.sh

./mysql.sh

