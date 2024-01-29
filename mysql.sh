docker cp ./EquipamentoDatas.sql mysql:/EquipamentoDatas.sql && docker cp ./EsporteDatas.sql mysql:/EsporteDatas.sql
docker cp ./Cosmeticos.sql mysql:/Cosmeticos.sql && docker cp ./Suplementos.sql mysql:/Suplementos.sql
docker exec -it mysql bash -c "mysql -u root --password=root nest < ./EsporteDatas.sql"
docker exec -it mysql bash -c "mysql -u root --password=root nest < ./EquipamentoDatas.sql"
docker exec -it mysql bash -c "mysql -u root --password=root nest < ./Cosmeticos.sql"
docker exec -it mysql bash -c "mysql -u root --password=root nest < ./Suplementos.sql"
