gnome-terminal -- bash -c "docker-compose up -d; exec bash"

sleep 10

chmod +x ./back_end.sh

gnome-terminal -- bash -c "./back_end.sh; exec bash"

sleep 5



