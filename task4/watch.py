#!/urs/bin/python3

import sys
from os import listdir, system
from os.path import isfile
from time import sleep

ROOT = 'login.local'



def get_all_file(directory):

    members = listdir(directory)

    all_files = []

    for member in members:

        if member == "node_modules":
            continue

        member = directory + '/' + member

        if isfile(member):
            
            all_files.append(member)

        else:
            
            all_files.extend(get_all_file(member))

    return all_files



def moniter(files):

    prev_data = {}

    for _file in files:

        with open(_file, 'rb') as moniter_file:

            prev_data[_file] = moniter_file.read()
    


    while True:

        for _file in files:
        
            with open(_file, 'rb') as moniter_file:

                currentdata = moniter_file.read()

                if currentdata != prev_data[_file]:

                    print('restarting container', _file, "got updated")

                    system('docker-compose down')
                    system('docker-compose up -d')

                    prev_data[_file] = currentdata

        sleep(1)




if __name__ == '__main__':
    
    allfiles = get_all_file(ROOT)
    
    print("reading", ROOT)
    system('docker-compose up -d')
    moniter(allfiles)