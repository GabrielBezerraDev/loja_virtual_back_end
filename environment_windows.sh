# docker build ./docker/ubuntuDocker -t ubuntu

# sleep 10

# docker run ubuntu

# docker exec -d ubuntu bash -c "sudo apt-get build-dep libvte-2.91-0 gnome-terminal && sudo apt-get install g++ && chmod +x start.sh && gnome-terminal -- bash -c "./start.sh; exec bash""

declare -a array



array[0]=$(docker ps | grep mysql)
array[1]=$(docker ps | grep backend)
array[2]=$(docker ps | grep cu)

for i in ${array[@]}
do 
    if [ "$i" -ne " " ]; then
        echo $i
    else
        echo "não existe"
    fi
done

