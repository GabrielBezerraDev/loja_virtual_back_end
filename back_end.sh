docker exec -d bestmind_backend_backend_1 bash -c "npx prisma migrate dev && npm run start:dev"

sleep 10

chmod +x mysql.sh

gnome-terminal -- bash -c "./mysql.sh; exec bash"

