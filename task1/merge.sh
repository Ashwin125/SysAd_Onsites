#!/bin/bash


> merge.txt

while read line; do

    name=$(cut -d',' -f1 <<< $line)
    employeeid=$(cut -d',' -f2 <<< $line)
    phone=$(cut -d',' -f3 <<< $line)

    file2line=$(cat file2.txt | grep $employeeid)
    salary=$(cut -d',' -f2 <<< $file2line | tr -d '\n')

    file3line=$(cat file3.txt | grep $phone)
    email=$(cut -d',' -f1 <<< $file3line | tr -d '\n')
    year=$(cut -d',' -f3 <<< $file2line | tr -d '\n')

    echo -e "$name\t$employeeid\t$phone\t$salary\t$email\t$year" >> merge.txt

done < file1.txt
