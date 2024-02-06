#!/bin/bash
docker exec -d backend bash -c "npx prisma migrate dev && npm run start:dev"

sleep 10

chmod u+x mysql.sh

# gnome-terminal -- bash -c "./mysql.sh; exec bash"
./mysql.sh

