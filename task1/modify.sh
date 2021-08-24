#!/bin/bash

> temp.txt

if [ "$1" = "name" ]; then
    field=1
elif [ "$1" = "employeeId" ]; then
    field=2
elif [ "$1" = "phone" ]; then
    field=3
elif [ "$1" = "salaries" ]; then
    field=4
elif [ "$1" = "email" ]; then
    field=5
fi

while read line; do

    name=$(cut -f 1 <<< $line)
    employeeId=$(cut -f 2 <<< $line)
    phone=$(cut -f 3 <<< $line)
    salaries=$(cut -f 4 <<< $line)
    email=$(cut -f 5 <<< $line)

    if [ "$(echo $name | cut -f1 | grep "$2")" != "" ] && [ $field -eq 1 ]; then 

        name=$(echo $name | sed "s/$2/$3/")
    
    elif [ "$(echo $employeeId | cut -f2 | grep "$2")" != "" ] && [ $field -eq 2 ]; then 

        employeeId=$(echo $employeeId | sed "s/$2/$3/")

    elif [ "$(echo $phone | cut -f3 | grep "$2")" != "" ] && [ $field -eq 3 ]; then 

        phone=$(echo $phone | sed "s/$2/$3/")

    elif [ "$(echo $salaries | cut -f4 | grep "$2")" != "" ] && [ $field -eq 4 ]; then 

        salaries=$(echo $salaries | sed "s/$2/$3/")

    elif [ "$(echo $email | cut -f5 | grep "$2")" != "" ] && [ $field -eq 5 ]; then 
    
        email=$(echo $email | sed "s/$2/$3/")

    fi

    echo -e "$name\t$employeeId\t$phone\t$salaries\t$email" >> temp.txt


done < merge.txt

cp temp.txt merge.txt
rm temp.txt