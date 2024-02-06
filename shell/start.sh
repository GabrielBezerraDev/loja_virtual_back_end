#!/bin/bash
# gnome-terminal -- bash -c "docker-compose up -d; exec bash"
docker-compose up -d

sleep 10

chmod u+x ./back_end.sh

# gnome-terminal -- bash -c "./back_end.sh; exec bash"

./back_end.sh

sleep 5



