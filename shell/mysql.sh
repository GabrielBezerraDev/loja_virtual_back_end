#!/bin/bash
docker cp ../db mysql:/
docker exec -it mysql bash -c "mysql -u root --password=root nest < /db/EsporteDatas.sql"
docker exec -it mysql bash -c "mysql -u root --password=root nest < /db/EquipamentoDatas.sql"
docker exec -it mysql bash -c "mysql -u root --password=root nest < /db/Cosmeticos.sql"
docker exec -it mysql bash -c "mysql -u root --password=root nest < /db/Suplementos.sql"
