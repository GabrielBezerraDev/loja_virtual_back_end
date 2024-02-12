#!/bin/bash

docker-compose up -d

sleep 10

chmod u+x ./back_end.sh

./back_end.sh




